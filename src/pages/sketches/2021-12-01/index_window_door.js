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
                <div style={{height: 'calc(100vh - 150px)', background: `rgb(0, ${128 - (scrolled * 100)}, 0, 1)`}} className="pos-relative">
                    <div className="pos-absolute" style={{left: 100, top: -120, width: 150, height: 200}}>
                        <div className="pos-absolute w-100"
                            style={{
                                height: 250 * scrolled,
                                border: '5px solid rgba(0, 0, 0, 0.5)',
                                top: `calc(100% + 50px + ${scrolled * 60}px)`,
                                filter: 'blur(5px)',
                                transform: `skew(${-20 * scrolled - 5}deg, 0)`,
                                transformOrigin: 'top',
                            }}>
                                <div className="pos-absolute w-100"
                                    style={{
                                        borderTop: '5px solid rgba(0, 0, 0, 0.5)',
                                        top: '50%',
                                        position: 'absolute',
                                }}></div>
                                 <div className="pos-absolute h-100"
                                    style={{
                                        borderRight: '5px solid rgba(0, 0, 0, 0.5)',
                                        left: '50%',
                                        position: 'absolute',
                                }}></div>
                        </div>
                        <div className="pos-absolute w-100 h-100" style={{
                            border: `5px solid rgb(${(scrolled * -20) + 80},${(scrolled * -50) + 150},${(scrolled * 50) + 20})`
                        }}>
                            <div className="pos-absolute w-100"
                            style={{
                                borderTop: `5px solid rgb(${(scrolled * -20) + 80},${(scrolled * -50) + 150},${(scrolled * 50) + 20})`,
                                top: '50%',
                            }}></div>
                             <div className="pos-absolute h-100"
                                style={{
                                    borderRight: `5px solid rgb(${(scrolled * -20) + 80},${(scrolled * -50) + 150},${(scrolled * 50) + 20})`,
                                    left: '50%',
                                    position: 'absolute',
                            }}></div>
                        </div>
                    </div>

                    <div className="pos-absolute" style={{right: 100, top: -120, width: 150, height: 300}}>
                        <div className="pos-absolute w-100"
                            style={{
                                height: 300 * scrolled,
                                background: 'rgba(0, 0, 0, 0.5)',
                                top: `100%`,
                                filter: 'blur(5px)',
                                transform: `skew(${20 * scrolled - 5}deg, 0)`,
                                transformOrigin: 'top',
                            }}>
                        </div>
                        <div className="pos-absolute w-100 h-100" style={{
                            background: `rgb(${(scrolled * -20) + 80},${(scrolled * -50) + 150},${(scrolled * 50) + 20})`
                        }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}