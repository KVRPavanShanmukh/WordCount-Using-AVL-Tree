# 🌳 Word Count Using AVL Tree — Interactive Visualization

An advanced **React + D3.js** web application that analyzes real-world text using **AVL Trees** and visually demonstrates how self-balancing trees work step-by-step.

🔗 **Live Demo**  
https://krvpavanshanmukh.github.io/WordCount-Using-AVL-Tree/

---

## 📌 Project Overview

This project takes a paragraph or large text input and:

- Splits the text into words
- Inserts words into **AVL Trees**
- Automatically balances the tree after each insertion
- Visually animates:
  - Insert paths
  - Rotations (LL, RR, LR, RL)
  - Balance Factors
- Handles **large inputs** by splitting words into **multiple AVL trees**

The goal is to **bridge theory and practice** by making AVL Trees visually intuitive.

---

## ✨ Key Features

- 🔁 **Step-by-Step AVL Insertion**
- ⚖️ **Automatic Tree Balancing**
- 🎥 **Animated Rotations & Paths**
- 📊 **Live Statistics**
  - Total words
  - Unique words
  - Number of AVL Trees generated
- 🚀 **Large Text Handling**
  - Text is split into chunks (default: 20 words per tree)
- 🎨 **Modern UI**
  - Smooth animations
  - Professional gradients
  - Responsive design
- 📘 **Dedicated Theory Page**
  - AVL history
  - Concepts
  - Advantages & disadvantages
- 📬 **Contact & Social Links**
  - GitHub
  - LinkedIn
  - Email (direct compose)

---

## 🧠 Why AVL Trees?

AVL Trees are **self-balancing binary search trees** that guarantee:

- `O(log n)` search
- `O(log n)` insertion
- `O(log n)` deletion

This makes them ideal for:
- Indexing
- Searching sorted data
- Maintaining performance consistency

---

## ⚙️ Tech Stack

| Technology | Purpose |
|----------|--------|
| React (Vite) | UI framework |
| D3.js | Tree visualization |
| JavaScript | AVL Tree logic |
| React Router | Multi-page navigation |
| GitHub Pages | Hosting |
| GitHub Actions | CI/CD |

---

## 📂 Project Structure
src/
├─ AVLVisualizer.jsx # D3 AVL Tree rendering
├─ avlTree.js # AVL Tree implementation
├─ App.jsx # Main UI & logic
├─ Theory.jsx # AVL Tree theory page
├─ main.jsx # React Router setup
├─ App.css # Styling



---

## 🧪 How It Works

1. User pastes text
2. Text is cleaned and tokenized
3. Words are grouped into chunks
4. Each chunk forms an AVL Tree
5. Insertions happen one by one
6. Rotations occur automatically
7. Visualization updates in real time

---

## 🚀 CI/CD & Deployment

This project follows a **CI/CD-first approach**:

- ✅ Code pushed to `main`
- 🔁 GitHub Actions automatically:
  - Installs dependencies
  - Builds the project
  - Deploys to GitHub Pages

👉 **No manual deployment commands required after setup**

---

## 📖 Learning Objectives

This project helps understand:

- Self-balancing trees
- Tree rotations
- Time complexity guarantees
- Visualization of abstract data structures
- Real-world frontend deployment workflows

---

## 🔮 Future Enhancements

- Delete operation visualization
- AVL vs Red-Black Tree comparison
- Export trees as SVG / PNG
- Zoom & pan for massive trees
- Dark/light theme toggle

---

## 👤 Author

**Pavan Shanmukh Kakarla**

- 🔗 GitHub: https://github.com/KVRPavanShanmukh
- 🔗 LinkedIn: https://www.linkedin.com/in/pavan-shanmukh-kakarla-aa3923335/
- 📧 Email: kakarlapavanshanmukh@gmail.com

---

## ⭐ If you like this project

Give it a ⭐ on GitHub  
Feedback and suggestions are always welcome!

