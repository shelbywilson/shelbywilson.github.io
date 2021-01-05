import React    from 'react';

export default () => {
    return (
        <div style={{
            background: 'linear-gradient(black, navy)'
            }}>
                <div 
                    style={{
                    position: 'fixed',
                    //background: '#123123',
                    background: 'rgba(255,255,255,1)',
                    //boxShadow: 'inset -12px 5px 0 3px #fff', //'0 0 25px 25px rgba(240, 248, 255, 0.46)',
                    boxShadow: '0 0 25px 25px rgba(240, 248, 255, 0.46)',
                    width: '50px',
                    height: '50px',
                    borderRadius: '100%',
                    top: '50%',
                    left: '50%',
                }}></div>
                <div style={{
                    position: 'relative',
                    //background: '#123123',
                    width: '100%',
                    height: '80vh',
                    marginTop: '-60vh',
                }}></div>
                <div style={{            
                    marginLeft: 'auto',
                    position: 'relative',
                    //background: '#8e8fab',
                    height: '100vh',
                    width: '40%',
                }}>
                    <div style={{
                        height: '100%',
                        position: 'absolute',
                        width: '100%',
                        left: '-150%',
                        background: '#fff',
                        //background: '#ca1111',
                    }}>
                        <div className='window'>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div style={{
                    position: 'relative',
                    //background: 'white',
                    width: '100%',
                    height: '80vh',
                    marginTop: '-40vh',
                }}></div>
                <div style={{
                    position: 'relative',
                    width: '40%',
                    right: '0',
                    height: '100vh',
                    //background: '#9018ca',
                }}>
                    <div style={{
                        height: '100%',
                        position: 'absolute',
                        width: '100%',
                        right: '-200%',
                        background: '#fff',
                        //background: '#ab1918',
                    }}>

                    </div>
                </div>
                <div style={{
                    position: 'relative',
                    //background: '#de7777',
                    width: '100%',
                    height: '80vh',
                    marginTop: '-40vh',
                }}></div>
            <div>
            </div>
        </div>
    )
}

// background-image: repeating-linear-gradient(45deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(255, 231, 167)), repeating-linear-gradient(45deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(167, 186, 255));
//     background-position: 0px 0px, 60px 60px;
//     background-size: calc(120px) calc(120px);


// background-image: repeating-linear-gradient(45deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(255, 231, 167)), repeating-linear-gradient(45deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(167, 186, 255));
//     background-position: 0px 0px, 60px 60px;
//     background-size: calc(120px) calc(120px);
{/* <div style="
    background-image: repeating-linear-gradient(-45deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(255, 231, 167)), repeating-linear-gradient(45deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(167, 186, 255));
    background-position: 0px 0px, 60px 60px;
    background-size: calc(120px) calc(120px);
    position: fixed;
    width: 100%;
    height: 100%;
"></div> */}

// <html lang="en"><head>
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <meta name="robots" content="index,follow">
//     <meta name="googlebot" content="index,follow">
//     <title>Shelby Wilson</title>
//   <style>*{-webkit-box-sizing:border-box;box-sizing:border-box}body,html{margin:0;font-size:16px;min-width:100%}html{background:#eee5ee;height:100%}body{background:#fff;min-height:100%;min-height:-webkit-fill-available}h1{font-size:1.625rem;font-weight:100;width:100%;position:fixed;left:0;bottom:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;margin:0;color:#00f;text-transform:uppercase}h1 span:first-child,h1 span:nth-child(6),h1 span:nth-child(10){-webkit-transform:translateY(-2.5vh);transform:translateY(-2.5vh)}h1 span:nth-child(2),h1 span:nth-child(7),h1 span:nth-child(9){-webkit-transform:translateY(1.5vh);transform:translateY(1.5vh)}h1 span:nth-child(5),h1 span:nth-child(8){-webkit-transform:translateY(4vh);transform:translateY(4vh)}h2{-webkit-text-decoration:underline wavy;text-decoration:underline wavy;color:#ff4500}button,p{font-size:1rem}a{color:#00f;text-decoration:none}button{outline:none;background:none;border:none;cursor:pointer}.default-font,a,button,h1,h2,h3,h4,h5,h6{font-family:sans-serif}.font-mono,button,h2,p{font-family:monospace}h1{pointer-events:none}.home{max-width:63rem;margin:0 auto}@media (min-width:768px){.home{display:grid;grid-template-columns:50% 50%}}.home__container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.home__container a{position:absolute;bottom:0;background:#00f;color:#fff;text-align:center;border-radius:100%;font-size:1.25rem;padding:1.5rem}.home__container a:hover{background:#fff;color:#00f}.home a,.home iframe,.home img{-webkit-transform:scale(.8);transform:scale(.8);border:2px solid #00f}@media (max-width:767px){.home a,.home iframe,.home img{-webkit-transform:scale(.9);transform:scale(.9)}}.home iframe,.home img{width:100%;max-width:50vh;height:50vh}.home iframe.iframe-small,.home img.iframe-small{-webkit-transform:scale(.6);transform:scale(.6)}@media (max-width:767px){.home iframe,.home img{max-width:100%;height:100vh}}
// /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVsYnkvcHJvamVjdHMvMjAyMC9wb3J0Zm9saW8vc3JjL2Jhc2UvcGFydGlhbHMvX3Jlc2V0LnNjc3MiLCIvVXNlcnMvc2hlbGJ5L3Byb2plY3RzLzIwMjAvcG9ydGZvbGlvL3NyYy9iYXNlL3BhcnRpYWxzL19jb2xvcnMuc2NzcyIsIi9Vc2Vycy9zaGVsYnkvcHJvamVjdHMvMjAyMC9wb3J0Zm9saW8vc3JjL2Jhc2UvcGFydGlhbHMvX3R5cG9ncmFwaHkuc2NzcyIsIi9Vc2Vycy9zaGVsYnkvcHJvamVjdHMvMjAyMC9wb3J0Zm9saW8vc3JjL2NvbXBvbmVudHMvaG9tZS9faG9tZS5zY3NzIiwiL1VzZXJzL3NoZWxieS9wcm9qZWN0cy8yMDIwL3BvcnRmb2xpby9zcmMvYmFzZS9wYXJ0aWFscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFDQyw2QkFBc0IsQ0FBdEIscUJBQXNCLENBR3ZCLFVBQ0MsUUFBUyxDQUNULGNBQWUsQ0FDZixjQUFlLENBR2hCLEtBQ0Msa0JDWGMsQ0RZZCxXQUFZLENBR2IsS0FDQyxlQ1pjLENEYWQsZUFBZ0IsQ0FFaEIsaUNBQWtDLENBT25DLEdBQ0Msa0JBQW1CLENBQ25CLGVBQWdCLENBQ2hCLFVBQVcsQ0FDWCxjQUFlLENBQ2YsTUFBTyxDQUNQLFVBQVcsQ0FDWCxtQkFBYSxDQUFiLG1CQUFhLENBQWIsWUFBYSxDQUNiLDZCQUE2QixDQUE3QiwwQkFBNkIsQ0FBN0IsNEJBQTZCLENBQzdCLFFBQVMsQ0FDVCxVQ2xDYSxDRG1DYix3QkFBeUIsQ0FYMUIsK0RBY0csb0NBQTZCLENBQTdCLDRCQUE2QixDQWRoQywrREFpQkcsbUNBQTRCLENBQTVCLDJCQUE0QixDQWpCL0IsMENBb0JHLGlDQUEwQixDQUExQix5QkFBMEIsQ0FLN0IsR0FDQyxzQ0FBK0IsQ0FBL0IsOEJBQStCLENBQy9CLGFDaERrQixDRG9EbkIsU0FFQyxjQUFlLENBR2hCLEVBQ0MsVUM3RGEsQ0Q4RGIsb0JBQXFCLENBR3RCLE9BQ0MsWUFBYSxDQUNiLGVBQWdCLENBQ2hCLFdBQVksQ0FDWixjQUFlLENFckVoQix5Q0FDQyxzQkFBdUIsQ0FHeEIsdUJBQ0MscUJBQXNCLENGbUJ2QixHR3ZCSSxtQkFBb0IsQ0FFeEIsTUFDQyxlQUFnQixDQUNoQixhQUFjLENDR1QseUJETE4sTUFJRSxZQUFhLENBQ1AsNkJBQThCLENBNENyQyxDQTFDQSxpQkFDQyxpQkFBa0IsQ0FDbEIsbUJBQWEsQ0FBYixtQkFBYSxDQUFiLFlBQWEsQ0FDYix1QkFBdUIsQ0FBdkIsb0JBQXVCLENBQXZCLHNCQUF1QixDQUh2QixtQkFLQyxpQkFBa0IsQ0FDVCxRQUFTLENBQ1QsZUZqQkUsQ0VrQkYsVUZoQkcsQ0VpQkgsaUJBQWtCLENBQ2xCLGtCQUFtQixDQUNuQixpQkFBa0IsQ0FDbEIsY0FBZSxDQVp6Qix5QkFjYyxlRnRCRCxDRXVCQyxVRnpCRixDRUdkLCtCQTRCUSwyQkFBcUIsQ0FBckIsbUJBQXFCLENBQ3JCLHFCRmhDTSxDR0lSLHlCREROLCtCQStCWSwyQkFBcUIsQ0FBckIsbUJBQXFCLENBRTVCLENBakNMLHVCQW9DUSxVQUFXLENBQ1gsY0FBZSxDQUNmLFdBQVksQ0F0Q3BCLGlEQXlDWSwyQkFBcUIsQ0FBckIsbUJBQXFCLENDeEMzQix5QkRETix1QkE2Q1ksY0FBZSxDQUNmLFlBQWEsQ0FFcEIiLCJmaWxlIjoiX2hvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLCBib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdG1pbi13aWR0aDogMTAwJTtcbn1cblxuaHRtbCB7XG5cdGJhY2tncm91bmQ6ICRsaWxhYztcblx0aGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcblx0YmFja2dyb3VuZDogJHdoaXRlO1xuXHRtaW4taGVpZ2h0OiAxMDAlO1xuXHQvKiBtb2JpbGUgdmlld3BvcnQgYnVnIGZpeCAqL1xuXHRtaW4taGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBidXR0b24sIGEge1xuXHRAZXh0ZW5kIC5kZWZhdWx0LWZvbnQ7XG59XG5cbmgxIHtcblx0Zm9udC1zaXplOiAxLjYyNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogMDtcblx0Ym90dG9tOiA1MCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHRtYXJnaW46IDA7XG5cdGNvbG9yOiAkYmx1ZTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0c3BhbiB7XG5cdFx0JjpmaXJzdC1jaGlsZCwgJjpudGgtY2hpbGQoNiksICY6bnRoLWNoaWxkKDEwKSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIuNXZoKTtcblx0XHR9XG5cdFx0JjpudGgtY2hpbGQoMiksICY6bnRoLWNoaWxkKDcpLCAmOm50aC1jaGlsZCg5KSB7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS41dmgpO1xuXHRcdH1cblx0XHQmOm50aC1jaGlsZCg1KSwgJjpudGgtY2hpbGQoOCkge1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDR2aCk7XG5cdFx0fVxuXHR9XG59XG5cbmgyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgd2F2eTtcblx0Y29sb3I6ICRvcmFuZ2VyZWQ7XG5cdEBleHRlbmQgLmZvbnQtbW9ubztcbn1cblxucCwgYnV0dG9uIHtcdFxuXHRAZXh0ZW5kIC5mb250LW1vbm87XG5cdGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuYSB7XG5cdGNvbG9yOiAkYmx1ZTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5idXR0b24ge1xuXHRvdXRsaW5lOiBub25lO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn0iLCIkbGlsYWM6ICNFRUU1RUU7XG4kYWxpY2VibHVlOiAjZjBmOGZmO1xuJGJsdWU6ICMwMDAwZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kd2hpdGU6ICNmZmZmZmY7XG4kb3JhbmdlcmVkOiAjZmY0NTAwOyIsIi8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZGlzcGxheT1zd2FwJyk7XG5cbi5kZWZhdWx0LWZvbnQge1xuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cblxuLmZvbnQtbW9ub3tcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn0iLCJAaW1wb3J0ICcuLy4uLy4uL2Jhc2UvYmFzZSc7XG5cbmgxIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5ob21lIHtcblx0bWF4LXdpZHRoOiA2M3JlbTtcblx0bWFyZ2luOiAwIGF1dG87XG5cdEBpbmNsdWRlIGJyZWFrcG9pbnQoc20pIHtcblx0XHRkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG5cdH1cblx0Jl9fY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICAgICAgfVxuXHRcdH1cbiAgICB9XG5cbiAgICBpZnJhbWUsIGltZywgYSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGJsdWU7XG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoeHMpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBpZnJhbWUsIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDUwdmg7XG4gICAgICAgIGhlaWdodDogNTB2aDtcbiAgICBcbiAgICAgICAgJi5pZnJhbWUtc21hbGwge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIEBpbmNsdWRlIGJyZWFrcG9pbnQoeHMpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiQG1peGluIGJyZWFrcG9pbnQoJGNsYXNzKSB7XG4gICAgLy8gaXBob25lIDUvU0VcbiAgICBAaWYgJGNsYXNzID09IHh4cyB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogMzc0cHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9XG4gICAgQGlmICRjbGFzcyA9PSB4cyB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgQGNvbnRlbnQ7IH1cbiAgICB9XG4gICBcbiAgICBAZWxzZSBpZiAkY2xhc3MgPT0gc20ge1xuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IEBjb250ZW50OyB9XG4gICAgfVxuICAgXG4gICAgQGVsc2UgaWYgJGNsYXNzID09IG1kIHtcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgeyBAY29udGVudDsgfVxuICAgIH1cbiAgIFxuICAgIEBlbHNlIGlmICRjbGFzcyA9PSBsZyB7XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7IEBjb250ZW50OyB9XG4gICAgfVxuICAgXG4gICAgQGVsc2Uge1xuICAgICAgQHdhcm4gXCJCcmVha3BvaW50IG1peGluIHN1cHBvcnRzOiB4cywgc20sIG1kLCBsZ1wiO1xuICAgIH1cbiAgfSJdfQ== */</style></head>
//   <body><div style="
//     background-image: repeating-linear-gradient(-45deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(255, 231, 167)), repeating-linear-gradient(96deg, rgb(255, 231, 167) 25%, transparent 25%, transparent 75%, rgb(255, 231, 167) 75%, rgb(167, 186, 255));
//     /* background-position: 0px 0px, 60px 60px; */
//     background-size: calc(120px) calc(120px);
//     position: fixed;
//     width: 100%;
//     height: 100%;
//     /* display: none; */
// "></div>

// export default () => {
//     // const [size, setSize] = useState(() => Math.random())

//     // useEffect(() => {
//     //     setInterval(() => {
//     //         setSize(() => Math.random())
//     //     }, 10000)
//     // }, [])

//     const size = 0.5;


//     return (
//         <div style={{
//                 height: '100vh',
//                 width: '100vw',
//                 position: 'relative',
//                 overflow: 'hidden',
//             }}>
//             {/* <div style=
//                 {{
//                     backgroundImage: 'repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, #ffe7a7),repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, #ffe7a7)',
//                     backgroundPosition: `0 0,${size * 120}px ${size * 120}px`,
//                     backgroundSize: `calc(2 * ${size * 120}px) calc(2 * ${size * 120}px)`,
//                     position: 'fixed',
//                     height: '100vh',
//                     width: '100vw',
//                     transition: 'all 500ms',
//                 }}>
//             </div>
//             <div style=
//                 {{
//                     backgroundImage: 'repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, #ffe7a7),repeating-linear-gradient(45deg, #ffe7a7 25%, transparent 25%, transparent 75%, #ffe7a7 75%, rgb(167, 186, 255))',
//                     backgroundPosition: '0 0,40px 40px',
//                     backgroundSize: 'calc(2 * 40px) calc(2 * 40px)',
//                     height: '500vh',
//                 }}>
//             </div>   */}
//             <div style={{
//                 height: '30vh',
//                 right: '40vh',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '40vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '20vh',
//             }}>
//             </div>
//             <div style={{
//                 height: '30vh',
//                 right: '10vh',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '40vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '34vh',
//             }}>
//             </div>
//             <div style={{
//                 height: '40vh',
//                 right: 0,
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '60vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '10vh',
//             }}>
//             </div>
//             <div style={{
//                 height: '50vh',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '80vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '-5vh',
//             }}></div>
//             <div style={{
//                 height: '50vh',
//                 left: '40vw',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '80vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '-10vh',
//             }}></div>
//             <div style={{
//                 height: '50vh',
//                 left: '20vw',
//                 borderTopLeftRadius: '50%',
//                 borderTopRightRadius: '50%',
//                 width: '80vh',
//                 background: 'linear-gradient(beige, pink)',
//                 position: 'absolute',
//                 bottom: '-25vh',
//             }}></div>
            
//         </div>
//     )
// }