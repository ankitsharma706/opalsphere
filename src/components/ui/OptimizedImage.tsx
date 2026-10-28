import React, { useState } from 'react';

export interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  aspectRatio?: string; // e.g., '16/9', '4/3', '1/1'
  priority?: boolean; // When true, loads eagerly for LCP
  className?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio,
  priority = false,
  className = '',
  containerClassName = '',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Auto-optimize Unsplash URLs for WebP & quality if applicable
  const optimizedSrc = React.useMemo(() => {
    if (src.includes('images.unsplash.com') && !src.includes('format=')) {
      const separator = src.includes('?') ? '&' : '?';
      return `${src}${separator}auto=format&fit=crop&q=80`;
    }
    return src;
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-secondary/5 ${containerClassName}`}
      style={{
        aspectRatio: aspectRatio,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        referrerPolicy="no-referrer"
        {...props}
      />
    </div>
  );
}

