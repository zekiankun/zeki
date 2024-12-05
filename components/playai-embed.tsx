"use client";

import { useEffect } from "react";

const PlayAIEmbed: React.FC = () => {
  useEffect(() => {
    const apiKey = process.env.PLAYAI_API_KEY;
    if (!apiKey) {
      return;
    }

    const handleLoad = () => {
      if (typeof PlayAI !== "undefined") {
        PlayAI.open(apiKey);
      }

      // Mikrofon ikonuna stil ekleme
      const iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.style.backgroundColor = "transparent";
        iframe.style.border = "none";
        iframe.style.overflow = "hidden";
      }
    };

    const script = document.createElement("script");
    script.src = "https://unpkg.com/@play-ai/web-embed";
    script.type = "text/javascript";
    script.onload = handleLoad;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default PlayAIEmbed;
