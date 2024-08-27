import './App.css';
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-blank mb-4">Tailwind Test</h1>
      <Card username="Ashish" btnText="Click Me"></Card>
      <Card username="Atharv" btnText="Visit Me"/>
      <Card username="Mahesh"/>
    </>
  );
}

export default App;
