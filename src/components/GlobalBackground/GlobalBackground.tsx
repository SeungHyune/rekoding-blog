import { useEffect, useRef, useMemo } from "react";
import useThemeStore from "@/stores/useThemeStore/useThemeStore";
import styles from "./globalBackground.module.css";

interface Point {
  x: number;
  y: number;
  age: number;
}

const CLOUD_IMAGES = [
  "/images/cloud/clouds-1-by-PhotoshopSupply.png",
  "/images/cloud/clouds-2-by-PhotoshopSupply.png",
  "/images/cloud/clouds-3-by-PhotoshopSupply.png",
  "/images/cloud/clouds-4-by-PhotoshopSupply.png",
  "/images/cloud/clouds-5-by-PhotoshopSupply.png",
  "/images/cloud/clouds-6-by-PhotoshopSupply.png",
  "/images/cloud/clouds-7-by-PhotoshopSupply.png",
  "/images/cloud/clouds-8-by-PhotoshopSupply.png",
  "/images/cloud/clouds-9-by-PhotoshopSupply.png",
  "/images/cloud/clouds-10-by-PhotoshopSupply.png",
  "/images/cloud/clouds-11-by-PhotoshopSupply.png",
  "/images/cloud/clouds-12-by-PhotoshopSupply.png",
  "/images/cloud/clouds-13-by-PhotoshopSupply.png",
  "/images/cloud/clouds-13-1-by-PhotoshopSupply.png",
  "/images/cloud/clouds-14-by-PhotoshopSupply.png",
  "/images/cloud/clouds-15-by-PhotoshopSupply.png",
  "/images/cloud/clouds-16-by-PhotoshopSupply.png",
  "/images/cloud/clouds-17-by-PhotoshopSupply.png",
  "/images/cloud/clouds-18-by-PhotoshopSupply.png",
  "/images/cloud/clouds-19-by-PhotoshopSupply.png",
];

const GlobalBackground = () => {
  const { theme } = useThemeStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const trailRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      trailRef.current.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDay = theme === "LIGHT";

      const MAX_AGE = 25;

      const trail = trailRef.current;

      if (trail.length > 1) {
        for (let i = 0; i < trail.length - 1; i++) {
          const p1 = trail[i];
          const p2 = trail[i + 1];

          const progress = p1.age / MAX_AGE;
          if (progress >= 1) continue;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          const alpha = Math.max(0, 1 - progress);

          if (isDay) {
            // Day: Airplane contrail (thick, white, cloudy, high blur)
            const width = Math.max(1, 10 * (1 - progress));
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
            ctx.shadowBlur = 25; // Increased blur for softer cloud
            ctx.shadowColor = `rgba(255, 255, 255, ${alpha})`;
          } else {
            // Night: Shooting star (sharp, matching exact star color #ffd700)
            const width = Math.max(0.1, 5 * Math.pow(1 - progress, 2));
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.strokeStyle = `rgba(255, 215, 0, ${alpha})`; // Matched exactly to star color
            ctx.shadowBlur = 20; // Increased blur
            ctx.shadowColor = `rgba(255, 215, 0, ${alpha * 0.8})`; // Glow matches star exactly
          }

          ctx.stroke();
        }
      }

      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].age++;
        if (trail[i].age > MAX_AGE) {
          trail.splice(i, 1);
        }
      }

      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  // Ensure stars are evenly distributed without overlapping using a 4x3 grid (12 stars)
  const stars = useMemo(() => {
    const result = [];
    const cols = 4;
    const rows = 3;
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;
    let id = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const left = c * cellWidth + Math.random() * (cellWidth * 0.8);
        const top = r * cellHeight + Math.random() * (cellHeight * 0.8);
        const size = Math.random() * 2.5 + 1; // 1px to 3.5px
        // 50% yellow, 50% white
        const isYellow = Math.random() > 0.5;
        const color = isYellow ? "#ffd700" : "#f0f0f0";
        const shadowColor = isYellow
          ? "rgba(255, 215, 0, 0.9)"
          : "rgba(255, 255, 255, 0.9)";

        result.push({
          id: id++,
          left: `${left}%`,
          top: `${top}%`,
          size,
          color,
          shadowColor,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${Math.random() * 2 + 2}s`,
        });
      }
    }
    return result;
  }, []);

  // Ensure clouds don't overlap vertically by assigning them to dedicated horizontal rows
  const clouds = useMemo(() => {
    const numClouds = 6; // Reduced cloud count
    const result = [];
    const rowHeight = 100 / numClouds;

    for (let i = 0; i < numClouds; i++) {
      const top = i * rowHeight + Math.random() * (rowHeight * 0.5);
      const src = CLOUD_IMAGES[Math.floor(Math.random() * CLOUD_IMAGES.length)];

      result.push({
        id: i,
        src,
        top: `${top}%`,
        width: `${Math.random() * 400 + 400}px`, // Increased width: 400px to 800px
        animationDelay: `-${Math.random() * 120}s`,
        animationDuration: `${Math.random() * 80 + 100}s`, // Very slow
        opacity: Math.random() * 0.5 + 0.4, // Increased opacity from 0.4 to 0.9
      });
    }
    return result;
  }, []);

  return (
    <div
      className={`${styles.backgroundContainer} ${theme === "LIGHT" ? styles.day : styles.night}`}
    >
      {/* Noise Texture Overlay */}
      <div className={styles.noiseOverlay} />

      {/* Sweeping Light Beam */}
      <div className={styles.ambientGlow} />

      {/* Night Theme: Stars */}
      {theme === "DARK" && (
        <div className={styles.particlesContainer}>
          {stars.map((star) => (
            <div
              key={star.id}
              className={styles.particle}
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                // Dynamic glow based on star size and color
                boxShadow: `0 0 ${star.size * 6}px ${star.size * 2}px ${star.shadowColor}`,
                animationDelay: star.animationDelay,
                animationDuration: star.animationDuration,
              }}
            />
          ))}
        </div>
      )}

      {/* Day Theme: Real Cloud Images */}
      {theme === "LIGHT" && (
        <div className={styles.cloudsContainer}>
          {clouds.map((cloud) => (
            <img
              key={cloud.id}
              src={cloud.src}
              alt="cloud"
              className={styles.realCloud}
              style={{
                top: cloud.top,
                width: cloud.width,
                animationDelay: cloud.animationDelay,
                animationDuration: cloud.animationDuration,
                opacity: cloud.opacity,
              }}
            />
          ))}
        </div>
      )}

      {/* Mouse Trail Canvas */}
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};

export default GlobalBackground;
