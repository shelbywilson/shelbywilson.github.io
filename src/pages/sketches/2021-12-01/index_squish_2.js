import React, { useState, useEffect } from "react";

export const Sketch = () => {
     const [scrolled, setScrolled] = useState(0)
      useEffect(() => {
        const onScroll = () => {
          const scrollTop = window.scrollY;
          const docHeight = document.body.offsetHeight;
          const winHeight = window.innerHeight;
          const scrollPercent = scrollTop / (docHeight - winHeight);

          setScrolled(scrollPercent)
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
    
    const spacer = 40;
    const sunHeight = scrolled > 0.8 ? 100 - ((100 - spacer) * (scrolled - 0.8) * 1/0.2) : 100;
    
    return (
        <div>
            <div style={{height: '100vh', width: '100%', background: `rgba(${78 + (scrolled * 177)}, 150, ${255}, 1)`, position: 'fixed', top: 0}}>
                <div style={{
                    background: `rgb(255, ${255 - (scrolled * 200)}, 0)`, 
                    width: 100, 
                    height: sunHeight, 
                    borderRadius: '100%', 
                    top: spacer - (spacer * (scrolled > 0.9 ? (scrolled - 0.9) / 0.1 : 0)),
                    transform: 'translate(-50%, 0)', 
                    left: '50%',
                    boxShadow: `0 0 ${50 * scrolled}px ${80 * scrolled}px rgba(255, ${255 - (scrolled * 200)}, 0, ${0.5 * scrolled})`
                }} className="pos-absolute"></div>
            </div>
            <div style={{paddingTop: '90vh'}}>
                <div style={{height: `calc(100vh - ${spacer}px)`, background: `rgb(0, ${128 - (scrolled * 100)}, 0, 1)`}} className="pos-relative"></div>
            </div>
        </div>
    )
}

export default Sketch;