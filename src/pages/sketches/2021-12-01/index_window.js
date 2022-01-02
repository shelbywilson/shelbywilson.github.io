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
                    height: 100, 
                    borderRadius: '100%', 
                    top: 100,
                    transform: 'translate(-50%, 0)', 
                    left: '50%',
                }} className="pos-absolute"></div>
            </div>
            <div style={{paddingTop: '90vh'}}>
                <div style={{height: 'calc(100vh - 100px)', background: `rgb(0, ${128 - (scrolled * 100)}, 0, 1)`}} className="pos-relative">
                    <div className="pos-absolute" style={{left: '10%', top: -100, width: 150, height: 250}}>
                        <div className="pos-absolute w-100"
                            style={{
                                height: 250 * scrolled,
                                border: '5px solid rgba(0, 50, 0, 0.9)',
                                top: `calc(100% + 50px + ${scrolled * 60}px)`,
                                filter: 'blur(5px)',
                                transform: `skew(${-20 * scrolled - 5}deg, 0)`,
                                transformOrigin: 'top',
                            }}>
                        </div>
                        <div className="pos-absolute w-100 h-100" style={{
                            border: '5px solid rgb(0,150,0)'
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}