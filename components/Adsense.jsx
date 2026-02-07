import { useEffect, useRef } from "react";

const Adsense = ({ slot, style = {} }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (err) {
      console.error("Adsense error:", err);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", ...style }}
      data-ad-client="ca-pub-9240687194374684"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default Adsense;
