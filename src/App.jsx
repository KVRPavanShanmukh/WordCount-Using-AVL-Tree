import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AVLVisualizer from "./AVLVisualizer";
import Theory from "./Theory";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const CHUNK_SIZE = 20;

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/* ================= HOME PAGE ================= */
function Home() {
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(800);

  const words = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const totalWords = words.length;
  const uniqueWords = new Set(words).size;
  const wordChunks = chunkArray(words, CHUNK_SIZE);

  return (
    <div className="app">

      {/* TOP BUTTON */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}>
        <Link to="/theory" className="theory-btn">
          Learn AVL Trees
        </Link>
      </div>

      {/* HERO */}
      <section className="section">
        <h1>AVL Tree Word Analyzer</h1>
        <p className="hero-text">
          Visualizing AVL Tree balancing and rotations while processing text.
        </p>

        <textarea
          className="text-input"
          placeholder="Paste your paragraph here..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </section>

      {/* STATS */}
      <section className="section stats">
        <div className="stat-card">
          <h3>Total Words</h3>
          <span>{totalWords}</span>
        </div>
        <div className="stat-card">
          <h3>Unique Words</h3>
          <span>{uniqueWords}</span>
        </div>
        <div className="stat-card">
          <h3>AVL Trees</h3>
          <span>{wordChunks.length}</span>
        </div>
      </section>

      {/* SPEED */}
      <section className="section">
        <h2>Animation Speed</h2>
        <input
          type="range"
          min="300"
          max="1500"
          step="100"
          value={speed}
          onChange={e => setSpeed(Number(e.target.value))}
          className="speed-slider"
        />
        <p style={{ color: "#94a3b8" }}>
          Speed: {speed} ms
        </p>
      </section>

      {/* VISUALIZATION */}
      {wordChunks.map((chunk, index) => (
        <section className="section" key={index}>
          <h2>
            AVL Tree {index + 1}{" "}
            <span style={{ color: "#94a3b8" }}>
              ({chunk.length} words)
            </span>
          </h2>
          <AVLVisualizer words={chunk} speed={speed} />
        </section>
      ))}

      {/* CONTACT */}
      <section className="section contact-section">
        <h2>Contact Me</h2>
        <div className="contact-grid">
          <a href="mailto:kakarlapavanshanmukh@gmail.com" className="contact-card email">
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a href="https://github.com/KVRPavanShanmukh" target="_blank" className="contact-card github">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/pavan-shanmukh-kakarla-aa3923335/" target="_blank" className="contact-card linkedin">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

    </div>
  );
}

/* ================= ROUTER ================= */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theory" element={<Theory />} />
    </Routes>
  );
}
