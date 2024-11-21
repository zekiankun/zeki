"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FallbackImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

export function FallbackImage({ src, alt, fill, className }: FallbackImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-muted/10">
        <div className="flex flex-col items-center gap-2">
          <ImageIcon className="h-8 w-8 text-muted-foreground/25" />
          <span className="text-xs text-muted-foreground/25">No image</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={cn("duration-300 ease-in-out", className)}
      onError={() => setError(true)}
    />
  );
}