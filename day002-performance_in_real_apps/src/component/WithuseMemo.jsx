import { useState, useMemo } from "react";

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

function WithUseMemo() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  console.log("🟢 Component re-rendered (With useMemo)");

  const filteredItems = useMemo(() => {
    console.log("✅ Filtering...");
    return items.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <h2>With useMemo</h2>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default WithUseMemo;
