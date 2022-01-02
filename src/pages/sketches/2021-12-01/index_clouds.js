import React, { useState, Fragment, useEffect } from "react";

const clouds = Array.apply(null, Array(Math.floor(Math.random() * 16))).map(c => {
    const height = (Math.random() * 16) + 3;
    return {
        width: height + Math.random() * 40 + 'vw',
        top: (Math.random() * 10) + 15 + 'vh',
        left: (Math.random() * 140) - 20 + 'vw',
        speed: Math.random() * 100 * (Math.random() > 0.5 ? -1 : 1),
        height: height + 'vh',
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
                    boxShadow: `0 0 ${50 * scrolled}px ${80 * scrolled}px rgba(255, ${255 - (scrolled * 200)}, 0, ${0.5 * scrolled})`
                }} className="pos-absolute"></div>
                {clouds.map((c,i) => (
                     <div className="cloud pos-absolute" key={i} style={{
                        borderRadius: '100%',
                        width: c.width, 
                        top: c.top, 
                        left: `calc(${c.left} + ${scrolled * c.speed * 1.2}vw)`,
                        height: c.height,
                        background: `rgba(255, ${255 - (scrolled * 200)}, 255, 0.8)`,
                        }}>
                    </div>
                ))}
                {/* <div className="cloud" style={{width: '20vw', top: '20vh', left: 10 + (scrolled * 500)}}>
                    <div style={{
                        height: '10vh', 
                        background: `rgba(255, ${255 - (scrolled * 200)}, 255, 0.8)`,
                    }}></div>
                </div>
                <div className="cloud" style={{width: '20vw', top: '20vh', left: 10 + (scrolled * 700)}}>
                    <div style={{
                        height: 20, 
                        width: '50%',
                        marginTop: -10,
                        background: `rgba(255, ${255 - (scrolled * 200)}, 255, 0.8)`,
                    }}></div>
                </div>
                <div className="cloud" style={{width: '60vw', top: '25vh', right: 300 - (scrolled * 200)}}>
                    <div style={{
                        height: 30, 
                        background: `rgba(255, ${255 - (scrolled * 200)}, 255, 0.8)`,
                    }}></div>
                </div>
                <div className="cloud" style={{width: '30vw', top: '30vh', right: 10 - (scrolled * 300)}}>
                    <div style={{
                        height: '20vh', 
                        background: `rgba(255, ${255 - (scrolled * 200)}, 255, 0.8)`,
                    }}></div>
                </div> */}
            </div>
            <div style={{paddingTop: '90vh'}}>
                <div style={{height: 'calc(100vh - 100px)', background: `rgb(0, ${128 - (scrolled * 100)}, 0, 1)`}} className="pos-relative"></div>
            </div>
        </div>
    )
}