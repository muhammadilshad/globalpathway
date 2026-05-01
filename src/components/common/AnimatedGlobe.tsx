"use client";
import { useEffect, useRef } from "react";

const COUNTRIES = [
  { code: "USA",  lat: 39.5,  lon: -98.4,  color: "#60a5fa" },
  { code: "CAN",  lat: 58.0,  lon: -105.0, color: "#818cf8" },
  { code: "MEX",  lat: 23.6,  lon: -102.6, color: "#34d399" },
  { code: "BRA",  lat: -14.2, lon: -51.9,  color: "#0a9e5e" },
  { code: "ARG",  lat: -36.0, lon: -64.0,  color: "#38bdf8" },
  { code: "COL",  lat: 4.6,   lon: -74.1,  color: "#fbbf24" },
  { code: "GBR",  lat: 54.0,  lon: -2.0,   color: "#c084fc" },
  { code: "FRA",  lat: 46.2,  lon: 2.2,    color: "#f59e0b" },
  { code: "DEU",  lat: 51.2,  lon: 10.5,   color: "#ec4899" },
  { code: "ITA",  lat: 42.5,  lon: 12.6,   color: "#f472b6" },
  { code: "ESP",  lat: 40.5,  lon: -3.7,   color: "#fb923c" },
  { code: "NOR",  lat: 63.0,  lon: 14.0,   color: "#c4b5fd" },
  { code: "SWE",  lat: 63.0,  lon: 20.0,   color: "#fdba74" },
  { code: "POL",  lat: 51.9,  lon: 19.1,   color: "#93c5fd" },
  { code: "RUS",  lat: 61.5,  lon: 90.0,   color: "#94a3b8" },
  { code: "TUR",  lat: 39.0,  lon: 35.2,   color: "#e879f9" },
  { code: "EGY",  lat: 26.8,  lon: 30.8,   color: "#fcd34d" },
  { code: "NGA",  lat: 9.1,   lon: 8.7,    color: "#4ade80" },
  { code: "KEN",  lat: -0.5,  lon: 37.9,   color: "#fde68a" },
  { code: "ZAF",  lat: -29.0, lon: 25.1,   color: "#14b8a6" },
  { code: "SAU",  lat: 23.9,  lon: 45.1,   color: "#86efac" },
  { code: "UAE",  lat: 24.0,  lon: 54.0,   color: "#a5b4fc" },
  { code: "IND",  lat: 20.6,  lon: 79.0,   color: "#f97316" },
  { code: "PAK",  lat: 30.4,  lon: 69.4,   color: "#4ade80" },
  { code: "CHN",  lat: 35.9,  lon: 104.2,  color: "#f43f5e" },
  { code: "JPN",  lat: 36.2,  lon: 138.3,  color: "#ef4444" },
  { code: "KOR",  lat: 35.9,  lon: 127.8,  color: "#22d3ee" },
  { code: "SGP",  lat: 1.4,   lon: 103.8,  color: "#fb7185" },
  { code: "MYS",  lat: 4.2,   lon: 109.5,  color: "#f87171" },
  { code: "IDN",  lat: -2.5,  lon: 118.0,  color: "#6ee7b7" },
  { code: "AUS",  lat: -25.3, lon: 133.8,  color: "#10b981" },
  { code: "NZL",  lat: -41.0, lon: 174.9,  color: "#a3e635" },
  { code: "GHA",  lat: 7.9,   lon: -1.0,   color: "#fde047" },
  { code: "IRN",  lat: 32.4,  lon: 53.7,   color: "#d1fae5" },
  { code: "PHL",  lat: 12.9,  lon: 121.8,  color: "#fdba74" },
  { code: "BGD",  lat: 23.7,  lon: 90.4,   color: "#c084fc" },
  { code: "UKR",  lat: 48.4,  lon: 31.2,   color: "#fbbf24" },
  { code: "CHL",  lat: -35.7, lon: -71.5,  color: "#a78bfa" },
  { code: "ETH",  lat: 9.1,   lon: 40.5,   color: "#fb923c" },
  { code: "NLD",  lat: 52.4,  lon: 5.3,    color: "#6ee7b7" },
];

function toXY(lat: number, lon: number, W: number, H: number) {
  const x = ((lon + 180) / 360) * W;
  const latRad = (Math.min(Math.max(lat, -80), 80) * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = H / 2 - (W * mercN) / (2 * Math.PI);
  return { x, y };
}

export function AnimatedGlobe() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const stateRef = useRef({ activeIdx: 0, pulse: 0, connAlpha: 0, lastSwitch: 0 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 3);
    let W = 0, H = 0;

    function setupCanvas() {
      if (!wrap || !canvas) return;
      W = wrap.clientWidth;
      H = wrap.clientHeight;
      // Physical pixels
      canvas.width  = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      // CSS size stays the same
      canvas.style.width  = W + "px";
      canvas.style.height = H + "px";
    }

    setupCanvas();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Scale ONCE — never inside draw loop
    ctx.scale(dpr, dpr);

    function draw(t: number) {
      if (!ctx || W === 0) return;
      const s = stateRef.current;

      ctx.clearRect(0, 0, W, H);

      // Grid
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      for (let lat = -60; lat <= 80; lat += 30) {
        const { y } = toXY(lat, 0, W, H);
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      for (let lon = -180; lon <= 180; lon += 30) {
        const x = ((lon + 180) / 360) * W;
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }

      const pos = COUNTRIES.map((c) => ({ ...c, ...toXY(c.lat, c.lon, W, H) }));
      const active = pos[s.activeIdx];

      // Arcs
      s.connAlpha = Math.min(0.6, s.connAlpha + 0.02);
      pos.forEach((p, i) => {
        if (i === s.activeIdx || i % 7 !== s.activeIdx % 7) return;
        const mx = (active.x + p.x) / 2;
        const dist = Math.hypot(p.x - active.x, p.y - active.y);
        const my = (active.y + p.y) / 2 - dist * 0.3;
        ctx.beginPath();
        ctx.moveTo(active.x, active.y);
        ctx.quadraticCurveTo(mx, my, p.x, p.y);
        ctx.strokeStyle = `rgba(10,158,94,${s.connAlpha * 0.5})`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash([3, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Countries
      pos.forEach((p, i) => {
        const isActive = i === s.activeIdx;

        if (isActive) {
          // Outer pulse ring
          s.pulse = (s.pulse + 0.02) % 1;
          const pr = 14 + s.pulse * 20;
          const pa = (1 - s.pulse) * 0.5;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pr, 0, Math.PI * 2);
          ctx.strokeStyle = p.color + Math.round(pa * 255).toString(16).padStart(2, "0");
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Inner glow
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 12);
          grd.addColorStop(0, p.color + "55");
          grd.addColorStop(1, p.color + "00");
          ctx.beginPath();
          ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, isActive ? 4.5 : 2.5, 0, Math.PI * 2);
        ctx.fillStyle = isActive ? p.color : p.color + "bb";
        ctx.fill();

        // Label — crisp pill background, zero shadow blur
        const fs = isActive ? 11 : 9;
        ctx.font = `${isActive ? 700 : 600} ${fs}px ui-monospace, 'Cascadia Code', 'Consolas', monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const tw = ctx.measureText(p.code).width;
        const th = fs;
        const px = p.x;
        const py = p.y + (isActive ? 7 : 6);
        const padX = 4, padY = 2;

        // Pill background — no blur, just solid dark
        ctx.fillStyle = isActive ? p.color + "ee" : "rgba(8,20,40,0.82)";
        ctx.beginPath();
        const rx = tw / 2 + padX, ry = th / 2 + padY;
        ctx.roundRect(px - rx, py - ry, rx * 2, ry * 2, ry);
        ctx.fill();

        // Crisp border on active
        if (isActive) {
          ctx.strokeStyle = "#ffffff44";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }

        // Text — zero shadow
        ctx.fillStyle = isActive ? "#ffffff" : p.color;
        ctx.shadowBlur = 0;
        ctx.fillText(p.code, px, py);
      });
    }

    function animate(t: number) {
      const s = stateRef.current;
      draw(t);
      if (t - s.lastSwitch > 2000) {
        s.activeIdx = (s.activeIdx + 1) % COUNTRIES.length;
        s.connAlpha = 0;
        s.pulse = 0;
        s.lastSwitch = t;
      }
      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(frameRef.current);
      setupCanvas();
      // Re-apply scale after resize
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      frameRef.current = requestAnimationFrame(animate);
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} className="w-full h-full">
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}
