"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Home() {
    const mountRef = useRef(null);
useEffect(() => {
  // Initialize scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();

  // Set renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 1);
  mountRef.current.appendChild(renderer.domElement);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.minPolarAngle = Math.PI / 2; // Lock to horizontal
  controls.maxPolarAngle = Math.PI / 2; 
  // Create a cube
  const geometry = new THREE.CylinderGeometry(
    18,
    18,
    20,
    32,
    1,
    true,
    Math.PI / 2,
    Math.PI / 2
  );
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    side: THREE.DoubleSide,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Set camera position
  camera.position.z = 20;
  cube.rotation.x = Math.PI ;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const onMouseMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    // mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  const onMouseClick = () => {
    raycaster.setFromCamera(mouse, camera);
    // const intersects = raycaster.intersectObjects(rectangles);
    // if (intersects.length > 0) {
    //   // Change color on click
    //   intersects[0].object.material.color.set(Math.random() * 0xffffff);
    // }
  };

  const onDrag = (event) => {
    raycaster.setFromCamera(mouse, camera);
    // const intersects = raycaster.intersectObjects(rectangles);
    // if (intersects.length > 0) {
    //   // Update rectangle position
    //   intersects[0].object.position.x += event.movementX * 0.01;
    //   intersects[0].object.position.y = 0;     
    // }
  };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);
    window.addEventListener('mousedown', () => window.addEventListener('mousemove', onDrag));
    window.addEventListener('mouseup', () => window.removeEventListener('mousemove', onDrag));

    // Animation Loop
    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onMouseClick);
      window.removeEventListener('mousedown', () => window.addEventListener('mousemove', onDrag));
      window.removeEventListener('mouseup', () => window.removeEventListener('mousemove', onDrag));
      renderer.dispose();
    };
  }, []);
  return (
    <div className="p-0 w-screen h-full">
      <div className="w-screen h-full bg-white" ref={mountRef} />
    </div>
  );
}
