import './App.css';
import { Suspense, lazy } from "react";
import Parent from './component/Parent';
import ParentCallbackEg from './component/ParentCallbackEg';
import WithoutUseMemo from './component/WithoutuseMemo';
// import WithUseMemo from './component/WithuseMemo';

const WithUseMemo = lazy(() => import("./component/WithoutuseMemo"));

function App() {

  return (
    <>
      {/* <Parent /> */}
      {/* <ParentCallbackEg /> */}
      {/* <WithoutUseMemo /> */}
      <Suspense fallback={<p>Loading page...</p>}>
        <WithUseMemo />
      </Suspense>
    </>
  )
}

export default App
