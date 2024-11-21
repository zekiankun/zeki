"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  fill?: boolean;
}

export function FallbackImage({ 
  src, 
  alt = "", 
  className,
  fallbackSrc = "https://source.unsplash.com/random/800x600?technology",
  fill,
  ...props 
}: ImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={() => setError(true)}
      className={cn(
        "transition-all duration-200",
        fill && "absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    />
  );
}