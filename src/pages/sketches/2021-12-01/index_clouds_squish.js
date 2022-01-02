import React, { useState, Fragment, useEffect } from "react";

const clouds = Array.apply(null, Array(Math.floor(Math.random() * 16))).map(c => {
    const height = (Math.random() * 150) + 40;
    return {
        width: height + 100 + (Math.random() * 300),
        top: (Math.random() * 10) + 15,
        left: (Math.random() * 140) - 20 + 'vw',
        speed: Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1),
        height: height,
    }
})

export default () => {
     const [scrolled, setScrolled] = useState(0)
      useEffect(() => {
        const onScroll = e => {
          let scrollTop = window.scrollY;
          let docHeight = document.body.offsetHeight;
          let winHeight = window.innerHeight;
          let scrollPercent = scrollTop / (docHeight - winHeight);

          setScrolled(scrollPercent)
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
    
    const spacer = 40;
    const sunHeight = scrolled > 0.9 ? 100 - ((100 - spacer) * (scrolled - 0.9) * 1/0.1) : 100;
    
    return (
        <div>
            <div style={{height: '100vh', width: '100%', background: `rgba(${78 + (scrolled * 177)}, 150, ${255}, 1)`, position: 'fixed', top: 0}}>
                <div style={{
                    background: `rgb(255, ${255 - (scrolled * 200)}, 0)`, 
                    width: 100, 
                    height: sunHeight, 
                    borderRadius: '100%', 
                    top: spacer - (spacer * 2 * scrolled/2),
                    transform: 'translate(-50%, 0)', 
                    left: '50%',
                    boxShadow: `0 0 ${50 * scrolled}px ${80 * scrolled}px rgba(255, ${255 - (scrolled * 200)}, 0, ${0.5 * scrolled})`
                }} className="pos-absolute"></div>
                {clouds.map((c,i) => (
                     <div className="cloud pos-absolute" key={i} style={{
                        borderRadius: '100%',
                        width: c.width, 
                        top: `calc(${c.top}vh - ${(c.top * 2 * scrolled/2)}vh)`, 
                        left: `calc(${c.left} + ${scrolled * c.speed * 1.2}vw)`,
                        height: spacer + c.height - (c.height * scrolled),
                        background: `rgba(255, ${255 - (scrolled * 200)}, 255, 0.8)`,
                        }}>
                    </div>
                ))}
            </div>
            <div style={{paddingTop: '90vh'}}>
                <div style={{height: `calc(100vh - ${spacer}px)`, background: `rgb(0, ${128 - (scrolled * 100)}, 0, 1)`}} className="pos-relative"></div>
            </div>
        </div>
    )
}