import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ADSENSE_CONFIG, isAdDeliveryPermitted, isPrivateOrUtilityRoute } from './adsenseConfig';

interface AdSenseContextType {
  isAdPermitted: boolean;
  clientId: string;
}

const AdSenseContext = createContext<AdSenseContextType>({
  isAdPermitted: false,
  clientId: ADSENSE_CONFIG.clientId,
});

export const useAdSenseContext = () => useContext(AdSenseContext);

export function AdSenseGuard({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isAdPermitted, setIsAdPermitted] = useState<boolean>(() =>
    isAdDeliveryPermitted(location.pathname)
  );

  useEffect(() => {
    const permitted = isAdDeliveryPermitted(location.pathname);
    setIsAdPermitted(permitted);

    const scriptId = 'opalsphere-adsbygoogle-script';
    const existingScript = document.getElementById(scriptId);

    if (permitted) {
      // 1. Inject script only when on approved publisher content
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = ADSENSE_CONFIG.scriptUrl;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    } else {
      // 2. Strict isolation: Remove script on non-content/restricted routes to halt auto-ads
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }

      // If it's a private or utility route (auth, profile, checkout), enforce noindex
      if (isPrivateOrUtilityRoute(location.pathname)) {
        let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
        if (!robotsMeta) {
          robotsMeta = document.createElement('meta');
          robotsMeta.name = 'robots';
          document.head.appendChild(robotsMeta);
        }
        robotsMeta.content = 'noindex, nofollow';
      }
    }
  }, [location.pathname]);

  return (
    <AdSenseContext.Provider value={{ isAdPermitted, clientId: ADSENSE_CONFIG.clientId }}>
      {children}
    </AdSenseContext.Provider>
  );
}

