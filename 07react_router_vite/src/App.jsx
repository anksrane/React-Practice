import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page1 />} /> {/* Default route */}
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
