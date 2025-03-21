import { Suspense, lazy } from "react";
import "./Home.css";

// Lazy load components
const Social = lazy(() => import("./Social"));
const Data = lazy(() => import("./Data"));

// Lazy load the image using dynamic import
const homeBanner = new URL('../../assets/about.jpg', import.meta.url).href;

function Home() {
  return (
    <div className="custom-container home-container">
      <div className="home-container-grid">
        <Suspense fallback={<div>Loading Social...</div>}>
          <Social />
        </Suspense>

        <div className="img-container">
          {/* Lazy load image with loading="lazy" */}
          <img 
            src={homeBanner} 
            alt="profileImage" 
            className="img-fluid profile_img" 
            loading="lazy" 
          />
        </div>

        <Suspense fallback={<div>Loading Data...</div>}>
          <Data />
        </Suspense>
      </div>
    </div>
  );
}

export default Home;