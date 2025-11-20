import { useLayoutEffect, useRef } from 'react';
import bg from './assets/bg.jpg';
import './App.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const bg1=useRef(null);
  const img_container=useRef(null);
  const img=useRef(null);
  const text1=useRef(null);
  const text2=useRef(null);

  useLayoutEffect(()=>{
    let ctx= gsap.context(()=>{
      ScrollTrigger.create({
        trigger:bg1.current,
        pin:bg1.current,
        pinSpacing:false,
        start: "top top",
        endTrigger:".last",
        end: "bottom bottom"
      })

      gsap.timeline({
        scrollTrigger:{
          trigger:img_container.current,
          pin: img_container.current,
          scrub: 1,
          start: "0% 0%",
        }
      })
      .to(img.current,{transform: "translateZ(2200px)"})
      .to(text1.current,{y:-800},0.05,"<")
      .to(text2.current,{y:-800},0.08,"<")
    })

    return ()=> ctx.revert();
  },[])

  return (
    <>
      <div className='relative'>
        <div ref={bg1} className='bg bg-[#141414] absolute h-screen w-screen z-[-1]'></div>
        <section>
          <div ref={img_container} className='img-container perspective flex items-center justify-center h-screen w-screen'>
            <img ref={img} src={bg} alt="background" className='image-mask' />
            <div className='text-white absolute flex flex-col items-center justify-center bg-transparent'>
              <h1 ref={text1} className='text-[120px] bg-transparent'><span className='text-stroke'>Outlook</span> Above</h1>
              <p ref={text2} className='opacity-50 w-48 text-[13px] text-center'>A showcase of the world's best photography</p>
            </div>
          </div>
        </section>
          <div className="container m-auto bg-slate-300">
            <div className="col-1">
              <img src="https://placehold.co/500x500/jpg" alt="" className="w-100 h-auto border-2 p-1" />
              <img src="https://placehold.co/500x500/jpg" alt="" className="w-100 h-auto border-2 p-1" />
            </div>
            <div className="col-1">
              <img src="https://placehold.co/500x500/jpg" alt="" className="w-100 h-auto border-2 p-1" />
              <img src="https://placehold.co/500x500/jpg" alt="" className="w-100 h-auto border-2 p-1 last" />
            </div>
          </div>        
      </div>
    </>
  )
}

export default App
