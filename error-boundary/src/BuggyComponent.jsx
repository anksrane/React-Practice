// BuggyComponent.jsx
export default function BuggyComponent() {
  throw new Error("Crash 💥");
  return <div>Normal UI</div>;
}