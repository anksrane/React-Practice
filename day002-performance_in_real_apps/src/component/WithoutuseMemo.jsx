import { useState } from "react";

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

function WithoutUseMemo() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  console.log("🔴 Component re-rendered (Without useMemo)");

  const filteredItems = items.filter(item => {
    console.log("❌ Filtering...");
    return item.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <h2>Without useMemo</h2>

      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default WithoutUseMemo;
