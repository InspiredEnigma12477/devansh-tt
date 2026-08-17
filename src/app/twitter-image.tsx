import { ImageResponse } from "next/og";
import { business } from "@/data/business";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${business.name} — ${business.tagline}`;

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a1226 0%, #182a4d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            fontWeight: 700,
            color: "#f59e0b",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {business.name}
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, marginTop: 24, lineHeight: 1.15 }}>
          {business.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 28, marginTop: 24, color: "rgba(255,255,255,0.75)", maxWidth: 900 }}>
          {business.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
