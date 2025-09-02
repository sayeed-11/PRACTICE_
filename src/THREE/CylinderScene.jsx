import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import nikeImage from "../assets/sayeed.jpg";

export default function CylinderScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const width = mountRef.current.clientWidth || window.innerWidth;
    const height = mountRef.current.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Texture
    const texture = new THREE.TextureLoader().load(nikeImage);

    // Material (flat, no lights, double side)
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide, // ✅ shows both inside & outside
    });

    // Cylinder (only side surface → openEnded = true)
    const geometry = new THREE.CylinderGeometry(5, 5, 5, 32, 1, true);
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    // OrbitControls (mouse drag rotates object)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 1.0;

    // Render loop
    const renderScene = () => {
      requestAnimationFrame(renderScene);
      controls.update();
      renderer.render(scene, camera);
    };
    renderScene();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      const newWidth = mountRef.current.clientWidth || window.innerWidth;
      const newHeight = mountRef.current.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-screen" />;
}
