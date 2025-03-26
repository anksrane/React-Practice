import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { Suspense, lazy } from "react";
import "./Home.css";

// Lazy load components
const Social = lazy(() => import("./Social"));
const Data = lazy(() => import("./Data"));

// Lazy load the image using dynamic import
const homeBanner = new URL('../../assets/about.jpg', import.meta.url).href;

function Home() {
  const socialRef = useRef(null);
  const dataRef = useRef(null);
  const imageRef = useRef(null);
  const firstHalfRef = useRef(null);
  const secondHalfRef = useRef(null);
  const positionFirstRef=useRef(null);
  const positionSecondRef=useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (socialRef.current && dataRef.current && imageRef.current.complete) {
      setIsLoaded(true);
    }
  }, [socialRef, dataRef, imageRef]);  

  useLayoutEffect(() => {
    if (!isLoaded) return;
  
    let ctx = gsap.context(() => {
      let tl = gsap.timeline();
  
      setTimeout(() => { // Delay GSAP execution
        // Social & Data Slide In
        tl.from(socialRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        })
        .from(dataRef.current, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.5")
        .from(imageRef.current, {
          x: 100,
          scale: 1.5,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        }, "-=0.5");
  
        // Text Stagger Animation
        if (firstHalfRef.current && secondHalfRef.current && positionFirstRef.current.children && positionSecondRef.current.children) {
          tl.from([firstHalfRef.current.children, secondHalfRef.current.children], {
            y: 50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
          });
  
          tl.from([positionFirstRef.current.children, positionSecondRef.current.children], {
            y: 50,
            opacity: 0,
            duration: 0.3,
            stagger: 0.1,
          });
        }
      }, 500); // Small delay for lazy components
  
    });
  
    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, [isLoaded]);

  // useLayoutEffect(() => {
  //   if (!isLoaded) return;

  //   let ctx = gsap.context(() => {
  //     let tl = gsap.timeline();

  //     // Social & Data Slide In
  //     tl.from(socialRef.current, {
  //       x: -100,
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power2.out",
  //     })
  //       .from(
  //         dataRef.current,
  //         {
  //           x: -100,
  //           opacity: 0,
  //           duration: 1,
  //           ease: "power2.out",
  //         },
  //         "-=0.5"
  //       )
  //       .from(
  //         imageRef.current,
  //         {
  //           x: 100,
  //           scale: 1.5,
  //           opacity: 0,
  //           duration: 1,
  //           ease: "power2.out",
  //         },
  //         "-=0.5"
  //       );

  //     // Text Stagger Animation
  //     if (firstHalfRef.current && secondHalfRef.current && positionFirstRef.current.children && positionSecondRef.current.children) {
  //       tl.from([firstHalfRef.current.children,secondHalfRef.current.children], {
  //         y: 50,
  //         opacity: 0,
  //         duration:0.3,
  //         stagger: 0.1,
  //       });

  //       tl.from([positionFirstRef.current.children,positionSecondRef.current.children], {
  //         y: 50,
  //         opacity: 0,
  //         duration:0.3,
  //         stagger: 0.1,
  //       });
  //     }
  //   });

  //   return () => ctx.revert(); // Cleanup on unmount
  // }, [isLoaded]);

  return (
    <div className="custom-container home-container">
      <div className="home-container-grid">
        <Suspense fallback={<div>Loading Social...</div>}>
          <div ref={socialRef}>
            <Social />
          </div>
        </Suspense>

        <div className="img-container">
          {/* Lazy load image with loading="lazy" */}
          <img 
            ref={imageRef}
            src={homeBanner} 
            alt="profileImage" 
            className="img-fluid profile_img" 
            loading="lazy" 
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <Suspense fallback={<div>Loading Data...</div>} >
          <div ref={dataRef}>
              <Data 
                firstHalfRef={firstHalfRef} 
                secondHalfRef={secondHalfRef} 
                positionFirstRef={positionFirstRef} 
                positionSecondRef={positionSecondRef} 
              />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default Home;