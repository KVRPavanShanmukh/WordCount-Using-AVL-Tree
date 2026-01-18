import { useState } from "react";
import AVLVisualizer from "./AVLVisualizer";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";



const CHUNK_SIZE = 20;

function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function App() {
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

      {/* ================= HERO ================= */}
      <section className="section">
        <h1>AVL Tree Word Analyzer</h1>
        <p className="hero-text">
          This project demonstrates how an AVL Tree dynamically balances itself
          while processing real-world text data and visualizes every rotation
          step-by-step.
        </p>

        <textarea
          className="text-input"
          placeholder="Paste your paragraph or large text here..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </section>

      {/* ================= STATS ================= */}
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
          <h3>AVL Trees Generated</h3>
          <span>{wordChunks.length}</span>
        </div>
      </section>

      {/* ================= SPEED ================= */}
      <section className="section">
        <h2>Animation Speed Control</h2>
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
          Speed: {speed} ms per insertion
        </p>
      </section>

      {/* ================= VISUALIZATION ================= */}
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

      {/* ================= ADVANTAGES ================= */}
      <section className="section">
        <h2>Advantages of Using AVL Tree</h2>
        <ul className="info-list">
          <li>
            <strong>Balanced Structure:</strong> AVL Trees strictly maintain
            balance using height constraints, ensuring that the difference
            between left and right subtrees is at most 1.
          </li>
          <li>
            <strong>Efficient Operations:</strong> Search, insertion, and deletion
            operations run in <code>O(log n)</code> time, even in the worst case.
          </li>
          <li>
            <strong>Automatic Rebalancing:</strong> Rotations occur automatically
            after every insertion, making performance consistent and predictable.
          </li>
        </ul>
      </section>

      {/* ================= DISADVANTAGES ================= */}
      <section className="section">
        <h2>Disadvantages of AVL Tree</h2>
        <ul className="info-list">
          <li>
            <strong>Higher Rotation Cost:</strong> AVL Trees may perform more
            rotations compared to other balanced trees like Red-Black Trees.
          </li>
          <li>
            <strong>Extra Memory:</strong> Each node stores height information,
            increasing memory usage.
          </li>
          <li>
            <strong>Complex Implementation:</strong> Maintaining balance logic
            and rotations makes AVL Trees harder to implement correctly.
          </li>
        </ul>
      </section>

      {/* ================= FUTURE SCOPE ================= */}
      <section className="section">
        <h2>Future Enhancements</h2>
        <ul className="info-list">
          <li>Parallel AVL tree construction for massive datasets</li>
          <li>Support for deletion visualization</li>
          <li>Export AVL Trees as SVG or PNG</li>
          <li>Comparison with Red-Black Trees and B-Trees</li>
        </ul>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section contact">
        <h2>Contact Me</h2>
        <p>
          If you have suggestions, feedback, or would like to collaborate on
          advanced data structure visualizations, feel free to reach out.
        </p>
      </section>

      <section className="section contact-section">
        <h2>Contact Me</h2>
        <p className="contact-subtext">
          Let’s connect. Hover, feel the motion, and click to reach me.
        </p>

        <div className="contact-grid">

          {/* EMAIL */}
          <a
            href="mailto:kakarlapavanshanmukh@gmail.com"
            className="contact-card animated magnetic"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/KVRPavanShanmukh"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card animated magnetic"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/pavan-shanmukh-kakarla-aa3923335/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card animated magnetic"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          {/* TWITTER */}
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card animated magnetic"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>

        </div>
      </section>

    </div>
  );

}

export default App;
