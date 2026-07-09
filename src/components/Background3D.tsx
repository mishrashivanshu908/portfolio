import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any existing canvas if it exists (safety check)
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    let animationId: number;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let sphere: THREE.LineSegments;
    let innerShape: THREE.LineSegments;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      rendererRef.current = renderer;

      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      // Create a large wireframe sphere (Icosahedron)
      const geometry = new THREE.IcosahedronGeometry(10, 2);
      const wireframe = new THREE.WireframeGeometry(geometry);
      
      const material = new THREE.LineBasicMaterial({
        color: 0x444444, // Slightly lighter grey
        transparent: true,
        opacity: 0.6, // Increased opacity
      });

      sphere = new THREE.LineSegments(wireframe, material);
      scene.add(sphere);

      // Add a second, smaller, faster rotating shape
      const geometry2 = new THREE.OctahedronGeometry(5, 0);
      const wireframe2 = new THREE.WireframeGeometry(geometry2);
      const material2 = new THREE.LineBasicMaterial({
        color: 0x555555, // Slightly lighter grey
        transparent: true,
        opacity: 0.4, // Increased opacity
      });
      innerShape = new THREE.LineSegments(wireframe2, material2);
      scene.add(innerShape);

      camera.position.z = 15;
    } catch (error) {
      console.error("Failed to initialize 3D background:", error);
      return;
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const clock = new THREE.Clock();

    const animate = () => {
      if (!rendererRef.current) return;
      
      const elapsedTime = clock.getElapsedTime();

      // Rotate main sphere
      if (sphere) {
        sphere.rotation.y = elapsedTime * 0.05;
        sphere.rotation.x = elapsedTime * 0.02;
        // Subtle parallax based on mouse
        sphere.rotation.y += mouseX * 0.05;
        sphere.rotation.x += mouseY * 0.05;
      }

      // Rotate inner shape faster
      if (innerShape) {
        innerShape.rotation.y = -elapsedTime * 0.1;
        innerShape.rotation.z = elapsedTime * 0.05;
      }

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (containerRef.current && containerRef.current.contains(rendererRef.current.domElement)) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}