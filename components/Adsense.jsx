import { useEffect, useRef, useState } from "react";

const Adsense = ({ slot, style = {} }) => {
  const adRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!adRef.current) return;

    // Use ResizeObserver to wait for a valid width
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width > 0 && !isLoaded) {
          try {
            if (window.adsbygoogle && adRef.current.innerHTML.trim() === "") {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              setIsLoaded(true); // Prevent multiple pushes
            }
          } catch (err) {
            console.error("Adsense error:", err);
          }
        }
      }
    });

    observer.observe(adRef.current);
    return () => observer.disconnect();
  }, [isLoaded]);

  return (
    <div style={{ width: "100%", textAlign: "center", minHeight: "90px", ...style }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9240687194374684"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default Adsense;