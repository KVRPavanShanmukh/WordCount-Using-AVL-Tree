function Theory() {
  return (
    <div className="app">

      {/* ================= INTRODUCTION ================= */}
      <section className="section">
        <h1>AVL Trees – Complete Theoretical Overview</h1>
        <p className="hero-text">
          AVL Trees are one of the earliest and most important self-balancing
          binary search trees in Data Structures. They guarantee efficient
          performance by strictly maintaining balance after every insertion
          and deletion operation.
        </p>
      </section>

      {/* ================= HISTORY ================= */}
      <section className="section">
        <h2>History of AVL Trees</h2>
        <p>
          The AVL Tree was introduced in 1962 by two Soviet mathematicians,
          <strong> Georgy Adelson-Velsky</strong> and
          <strong> Evgenii Landis</strong>. The name “AVL” comes from the initials
          of their surnames.
        </p>
        <p>
          It was the first self-balancing Binary Search Tree ever proposed.
          Before AVL Trees, Binary Search Trees could easily become unbalanced,
          leading to inefficient performance. AVL Trees solved this problem by
          introducing automatic rebalancing using tree rotations.
        </p>
      </section>

      {/* ================= DEFINITION ================= */}
      <section className="section">
        <h2>What is an AVL Tree?</h2>
        <p>
          An AVL Tree is a <strong>self-balancing Binary Search Tree</strong>.
          In an AVL Tree, for every node, the height difference between the left
          and right subtrees is at most one.
        </p>
        <p>
          This height difference is known as the <strong>Balance Factor</strong>.
          Maintaining this property ensures that the tree height remains
          logarithmic with respect to the number of nodes.
        </p>
      </section>

      {/* ================= PROPERTIES ================= */}
      <section className="section">
        <h2>Properties of AVL Trees</h2>
        <ul className="info-list">
          <li>
            It follows all properties of a Binary Search Tree.
          </li>
          <li>
            For every node, the balance factor is −1, 0, or +1.
          </li>
          <li>
            The tree automatically rebalances itself after insertions and deletions.
          </li>
          <li>
            The height of the tree is always O(log n).
          </li>
        </ul>
      </section>

      {/* ================= BALANCE FACTOR ================= */}
      <section className="section">
        <h2>Balance Factor</h2>
        <p>
          The balance factor of a node is defined as:
        </p>
        <p>
          <strong>Balance Factor = Height of Left Subtree − Height of Right Subtree</strong>
        </p>
        <p>
          If the balance factor of any node becomes less than −1 or greater than +1,
          the tree is considered unbalanced and must be rebalanced.
        </p>
      </section>

      {/* ================= ROTATIONS ================= */}
      <section className="section">
        <h2>Rotations in AVL Trees</h2>
        <p>
          Rotations are used to restore balance in an AVL Tree. They rearrange
          nodes locally without violating the Binary Search Tree property.
        </p>
        <ul className="info-list">
          <li>
            <strong>Left Rotation (LL case)</strong>
          </li>
          <li>
            <strong>Right Rotation (RR case)</strong>
          </li>
          <li>
            <strong>Left-Right Rotation (LR case)</strong>
          </li>
          <li>
            <strong>Right-Left Rotation (RL case)</strong>
          </li>
        </ul>
        <p>
          The type of rotation applied depends on the structure of the imbalance.
        </p>
      </section>

      {/* ================= OPERATIONS ================= */}
      <section className="section">
        <h2>Operations on AVL Trees</h2>
        <ul className="info-list">
          <li>
            <strong>Search:</strong> Performed like a normal BST search.
          </li>
          <li>
            <strong>Insertion:</strong> Insert as in BST, then rebalance if required.
          </li>
          <li>
            <strong>Deletion:</strong> Delete as in BST, then rebalance from bottom up.
          </li>
        </ul>
      </section>

      {/* ================= TIME COMPLEXITY ================= */}
      <section className="section">
        <h2>Time Complexity</h2>
        <ul className="info-list">
          <li>
            <strong>Search:</strong> O(log n)
          </li>
          <li>
            <strong>Insertion:</strong> O(log n)
          </li>
          <li>
            <strong>Deletion:</strong> O(log n)
          </li>
        </ul>
        <p>
          These guarantees hold even in the worst case due to strict balancing.
        </p>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="section">
        <h2>Advantages of AVL Trees</h2>
        <ul className="info-list">
          <li>
            Guarantees balanced height at all times.
          </li>
          <li>
            Ensures predictable and fast search performance.
          </li>
          <li>
            Worst-case time complexity is always logarithmic.
          </li>
          <li>
            Suitable for applications requiring frequent searches.
          </li>
        </ul>
      </section>

      {/* ================= DISADVANTAGES ================= */}
      <section className="section">
        <h2>Disadvantages of AVL Trees</h2>
        <ul className="info-list">
          <li>
            Requires extra memory to store height information.
          </li>
          <li>
            More rotations compared to other balanced trees like Red-Black Trees.
          </li>
          <li>
            More complex to implement correctly.
          </li>
        </ul>
      </section>

      {/* ================= REAL WORLD APPLICATIONS ================= */}
      <section className="section">
        <h2>Real-World Applications of AVL Trees</h2>
        <ul className="info-list">
          <li>
            Database indexing systems.
          </li>
          <li>
            File system directory structures.
          </li>
          <li>
            Memory allocation and management.
          </li>
          <li>
            Search engines and dictionary implementations.
          </li>
          <li>
            Compiler symbol tables.
          </li>
        </ul>
      </section>

      {/* ================= PURPOSE IN THIS PROJECT ================= */}
      <section className="section">
        <h2>Purpose of Using AVL Trees in This Project</h2>
        <p>
          In this project, AVL Trees are used to efficiently count and organize
          words from large text inputs while ensuring balanced performance.
        </p>
        <p>
          The visualization demonstrates how rotations occur in real time and
          how balance is maintained dynamically, making AVL Trees easier to
          understand conceptually.
        </p>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="section">
        <h2>Conclusion</h2>
        <p>
          AVL Trees represent a fundamental concept in Data Structures, showing
          how balance can be enforced to achieve optimal performance. Though they
          involve additional complexity, their guaranteed efficiency makes them
          invaluable in systems where search performance is critical.
        </p>
      </section>

    </div>
  );
}

export default Theory;
