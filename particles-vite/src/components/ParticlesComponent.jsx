import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Loads a minimal version of tsparticles

const ParticlesComponent = ({ id = "tsparticles" }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load particles engine
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles container:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: "#121212",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { distance: 200, duration: 15 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: "#FBE4D6" },
        links: {
          color: "#FBE4D6",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          random: true,
          speed: 10,
          outModes: {
            default: "bounce",  // Bounce off all edges
            top: "out",         // Particles disappear at the top
            bottom: "destroy",  // Particles get destroyed at the bottom
          },
        },
        number: { density: { enable: true }, value: 150 },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? <Particles id={id} init={particlesLoaded} options={options} /> : null;
};

export default ParticlesComponent;