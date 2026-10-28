import React, { useEffect, useRef } from 'react';
import { useAdSenseContext } from '../../lib/adsense/AdSenseGuard';

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export interface AdUnitProps {
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export function AdUnit({
  slotId = '0000000000',
  format = 'auto',
  responsive = true,
  className = '',
}: AdUnitProps) {
  const { isAdPermitted, clientId } = useAdSenseContext();
  const adRef = useRef<HTMLModElement | null>(null);
  const isPushedRef = useRef(false);

  useEffect(() => {
    if (!isAdPermitted || !adRef.current || isPushedRef.current) return;

    try {
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isPushedRef.current = true;
      }
    } catch (error) {
      console.warn('AdSense ad push was suppressed:', error);
    }
  }, [isAdPermitted]);

  // STRICT COMPLIANCE: Suppress ad containers completely on restricted/utility screens
  if (!isAdPermitted) {
    return null;
  }

  return (
    <div
      className={`my-8 flex flex-col items-center justify-center overflow-hidden transition-all ${className}`}
      data-nosnippet="true"
    >
      <span className="text-[9px] uppercase tracking-widest text-secondary/30 mb-2 font-mono">
        Advertisement
      </span>

      {/* Explicit min-height ensures CLS = 0 */}
      <div className="w-full max-w-4xl min-h-[100px] sm:min-h-[250px] bg-primary/20 rounded-xl flex items-center justify-center border border-accent/5 overflow-hidden">
        <ins
          ref={adRef}
          className="adsbygoogle block w-full text-center"
          style={{ display: 'block' }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </div>
  );
}

