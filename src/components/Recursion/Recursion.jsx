import React, { useState } from "react";

const TreeNode = ({ path, remaining, level }) => {
  if (remaining.length === 0) {
    return (
      <div style={{ marginLeft: level * 20, marginTop: 10 }}>
        <strong>Subsequence:</strong> [{path.join(", ")}]
      </div>
    );
  }

  const [head, ...rest] = remaining;

  return (
    <div style={{ marginLeft: level * 20, marginTop: 10 }}>
      <div>
        Node: path = [{path.join(", ")}], remaining = [{remaining.join(", ")}]
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {/* Take */}
        <TreeNode path={[...path, head]} remaining={rest} level={level + 1} />
        {/* Not Take */}
        <TreeNode path={path} remaining={rest} level={level + 1} />
      </div>
    </div>
  );
};

const RecursionTreeTakeNotTake = () => {
  const [input, setInput] = useState("");
  const [array, setArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = input
      .split(",")
      .map((x) => parseInt(x.trim()))
      .filter((x) => !isNaN(x));
    setArray(arr);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Take/Not-Take Subsequence Tree</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter array (e.g., 1,2,3)"
          style={{ padding: 8, width: "300px" }}
        />
        <button type="submit" style={{ marginLeft: 10, padding: 8 }}>
          Generate
        </button>
      </form>

      <div style={{ marginTop: 20 }}>
        {array.length > 0 && (
          <TreeNode path={[]} remaining={array} level={0} />
        )}
      </div>
    </div>
  );
};

export default RecursionTreeTakeNotTake;
