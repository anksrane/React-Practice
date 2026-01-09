import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client';
import Lenis from "@studio-freight/lenis";3
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 🔥 LENIS SETUP
const lenis = new Lenis({
  smooth: true,
  lerp: 0.08, // lower = smoother
});

// Sync Lenis with GSAP
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
