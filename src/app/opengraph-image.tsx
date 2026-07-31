import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #05080a 0%, #0a1f1a 55%, #102e25 100%)",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 14,
              background: "linear-gradient(135deg, #10b981, #34d399)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#052e22",
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            {"LC"}
          </div>
          <div
            style={{
              display: "flex",
              color: "#e9efed",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            {`${siteConfig.name} · by ${siteConfig.trinode.name}`}
          </div>
        </div>
        <div
          style={{
            color: "#f0fdf9",
            fontSize: 62,
            fontWeight: 800,
            lineHeight: 1.12,
            maxWidth: 980,
          }}
        >
          {"Ahorro colectivo transparente para tu comunidad"}
        </div>
        <div
          style={{
            display: "flex",
            color: "#9fd8c5",
            fontSize: 28,
            marginTop: 28,
            gap: 28,
          }}
        >
          {"Cadenas de ahorro · Microcréditos · Offline-First · AES-256"}
        </div>
      </div>
    ),
    { ...size }
  );
}
