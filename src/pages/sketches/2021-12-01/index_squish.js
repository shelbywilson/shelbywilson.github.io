import React, { useState, Fragment, useEffect } from "react";

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
    
    return (
        <div>
            <div style={{height: '100vh', width: '100%', background: `rgba(${78 + (scrolled * 177)}, 150, ${255}, 1)`, position: 'fixed', top: 0}}>
                <div style={{
                    background: `rgb(255, ${255 - (scrolled * 200)}, 0)`, 
                    width: 100, 
                    height: 100- (Math.max(0, scrolled - 0.9) * 400), 
                    borderRadius: '100%', 
                    top: 100 - (scrolled * 60), 
                    transform: 'translate(-50%, 0)', 
                    left: '50%',
                }} className="pos-absolute"></div>
            </div>
            <div style={{paddingTop: '90vh'}}>
                <div style={{height: 'calc(100vh - 100px)', background: `rgb(0, ${128 - (scrolled * 100)}, 0, 1)`}} className="pos-relative"></div>
            </div>
        </div>
    )
}