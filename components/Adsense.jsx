import { useEffect, useRef } from "react";

const Adsense = ({ slot, style = {} }) => {
  const adRef = useRef(null);

  useEffect(() => {
    // Only run if the ref exists and the ad hasn't been loaded yet
    if (adRef.current && adRef.current.innerHTML.trim() === "") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("Adsense error:", err);
      }
    }
  }, []);

  return (
    <div style={{ width: "100%", textAlign: "center", overflow: "hidden", minHeight: "90px", ...style }}>
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