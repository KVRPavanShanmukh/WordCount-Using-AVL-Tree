import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { AVLTree } from "./avlTree";

/* ===== CONFIG ===== */
const NODE_THRESHOLD = 40;
const DEPTH_THRESHOLD = 4;
const TOP_PADDING = 30;
const SIDE_PADDING = 30;

/* Convert AVL to hierarchy */
function buildHierarchy(node) {
  if (!node) return null;
  return {
    name: node.word,
    bf:
      (node.left ? node.left.height : 0) -
      (node.right ? node.right.height : 0),
    children: [
      buildHierarchy(node.left),
      buildHierarchy(node.right)
    ].filter(Boolean)
  };
}

export default function AVLVisualizer({ words, speed }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);

  /* Persistent state */
  const indexRef = useRef(0);
  const rootRef = useRef(null);
  const avlRef = useRef(new AVLTree());

  const [playing, setPlaying] = useState(true);
  const [step, setStep] = useState(0);
  const [rotation, setRotation] = useState(null);

  /* ===== INIT SVG ONCE ===== */
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg
      .style("background", "#0f172a")
      .style("shape-rendering", "geometricPrecision");

    svg.append("g");
  }, []);

  /* ===== RESET ONLY ON WORD CHANGE ===== */
  useEffect(() => {
    indexRef.current = 0;
    rootRef.current = null;
    avlRef.current = new AVLTree();
    setStep(0);
    setRotation(null);

    d3.select(svgRef.current).select("g").selectAll("*").remove();
  }, [words]);

  /* ===== MAIN ANIMATION LOOP ===== */
  useEffect(() => {
    if (!words.length) return;

    const svg = d3.select(svgRef.current);
    const g = svg.select("g");

    const interval = setInterval(() => {
      if (!playing) return;
      if (indexRef.current >= words.length) return;

      /* Insert */
      avlRef.current.insertPath = [];
      rootRef.current = avlRef.current.insert(
        rootRef.current,
        words[indexRef.current]
      );

      indexRef.current++;
      setStep(indexRef.current);
      setRotation(avlRef.current.lastRotation);

      const hierarchy = d3.hierarchy(buildHierarchy(rootRef.current));

      /* Auto fullscreen if congested */
      if (
        hierarchy.descendants().length > NODE_THRESHOLD ||
        hierarchy.height > DEPTH_THRESHOLD
      ) {
        if (
          !document.fullscreenElement &&
          containerRef.current?.requestFullscreen
        ) {
          containerRef.current.requestFullscreen();
        }
      }

      /* Dynamic canvas sizing */
      const width =
        Math.max(
          containerRef.current.clientWidth,
          hierarchy.descendants().length * 120
        );

      const height =
        Math.max(
          600,
          hierarchy.height * 140
        );

      svg
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`);

      /* Layout (THIS centers automatically) */
      const treeLayout = d3.tree().size([
        width - SIDE_PADDING * 2,
        height - TOP_PADDING * 2
      ]);

      treeLayout(hierarchy);

      /* Correct transform (NO horizontal shift) */
      g.attr(
        "transform",
        `translate(${SIDE_PADDING}, ${TOP_PADDING})`
      );

      g.selectAll("*").remove();

      /* ===== EDGES ===== */
      g.selectAll(".link")
        .data(hierarchy.links())
        .enter()
        .append("line")
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.source.x)
        .attr("y2", d => d.source.y)
        .attr("stroke", "#64748b")
        .attr("stroke-width", 1)
        .attr("opacity", 0)
        .transition()
        .duration(speed * 0.4)
        .attr("opacity", 1)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      const pathSet = new Set(avlRef.current.insertPath);
      const rotatedSet = new Set(avlRef.current.rotatedNodes);

      /* ===== NODES ===== */
      const node = g
        .selectAll(".node")
        .data(hierarchy.descendants())
        .enter()
        .append("g")
        .attr("transform", d => `translate(${d.x},${d.y})`);

      node.append("circle")
        .attr("r", 22)
        .attr("fill", d =>
          rotatedSet.has(d.data.name)
            ? "#f59e0b"
            : "#38bdf8"
        )
        .attr("stroke", d =>
          pathSet.has(d.data.name)
            ? "#8b5cf6"
            : "#0f172a"
        )
        .attr("stroke-width", 3);

      node.append("text")
        .text(d => d.data.name)
        .attr("dy", "-0.2em")
        .attr("text-anchor", "middle")
        .style("font-size", "11px")
        .style("font-weight", "600")
        .style("fill", "#020617");

      node.append("text")
        .text(d => `BF: ${d.data.bf}`)
        .attr("dy", "1.1em")
        .attr("text-anchor", "middle")
        .style("font-size", "9px")
        .style("fill", "#cbd5f5");

    }, speed);

    return () => clearInterval(interval);
  }, [words, speed, playing]);

  return (
    <div
      ref={containerRef}
      className="visualizer"
      style={{
        overflow: "auto",
        maxHeight: "80vh"
      }}
    >
      <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
        <button onClick={() => setPlaying(p => !p)}>
          {playing ? "Pause" : "Play"}
        </button>
        <span style={{ color: "#e5e7eb" }}>
          Inserted: {step}
        </span>
      </div>

      {rotation && (
        <div
          style={{
            padding: "10px 16px",
            marginBottom: "10px",
            borderRadius: "12px",
            background: "rgba(99,102,241,0.18)",
            color: "#e0e7ff",
            fontWeight: "600"
          }}
        >
          Rotation: {rotation}
        </div>
      )}

      <svg ref={svgRef}></svg>
    </div>
  );
}
