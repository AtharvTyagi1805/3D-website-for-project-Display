import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas
      camera={{
        fov: 64,
        position: [11.3338, 16.0536, 11, 3338],
      }}
    >
      <Experience />
    </Canvas>
  );
}

export default App;
