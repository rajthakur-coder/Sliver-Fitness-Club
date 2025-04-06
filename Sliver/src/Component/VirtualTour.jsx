
import gymImage from "../images/gym360.jpg"; // ✅ Make sure the image path is correct
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import "./VirtualTour.css";

const Hotspot = ({ position, label }) => {
  return (
    <Html position={position}>
      <div className="hotspot" onClick={() => alert(label)}>
        🔘 {label}
      </div>
    </Html>
  );
};

const VirtualTour = () => {
  const texture = new THREE.TextureLoader().load(gymImage); // 360° image

  return (
    <div style={{ height: "60vh", width: "100%", marginTop: "100px"  }}>
       <h1 className="h1" >Gym 360° Virtual Tour (VR Ready)</h1>
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls enableZoom={false}  autoRotate={true}/>
        <mesh>
          <sphereGeometry args={[5, 60, 40]} />
          <meshBasicMaterial map={texture} side={THREE.BackSide} />
        </mesh>

        {/* 🔥 Hotspots */}
        <Hotspot position={[1, 0, -4]} label="Treadmill Section" />
        <Hotspot position={[-2, -1, -3]} label="Weight Lifting Zone" />
        <Hotspot position={[2, 1, -3]} label="Trainer Info" />
      </Canvas>
    </div>
  );
};

export default VirtualTour;
