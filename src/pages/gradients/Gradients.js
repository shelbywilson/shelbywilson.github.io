import React from 'react';

import schemes from './schemes';

const rgba = (rgb, a) => 'rgba(' + rgb + ',' + a + ')'

class Gradients extends React.Component {
	constructor(props) {
		super(props);

		//this.enabled = true; // Vue.config.productionTip;
		this.animation = null;
		this.numBalls = 25;
		this.ctx = null;
		this.tmpCanvas = null;
		this.tmpCanvasCtx = null;
		this.gCanvas1 = null;
		this.gCtx1 = null;
		this.gCanvas2 = null;
		this.gCtx2 = null;
		this.scale = 0.75;
		this.widthF = null;
		this.heightF = null;
		this.diameter = null;
		this.radius = null;
		this.balls = [];

		this.popularity = 903; //(Math.random() * 2000) - 1000;
		this.temp = -25; //(Math.random() * 2000) - 1000;

		this.heightFactor = 1;
		this.scale = 1.1;

		const popl = schemes.getSchemeBy('popularity', this.popularity)
		const temp = schemes.getSchemeBy('temp', this.temp)
		this.gradients = [popl, temp]

	}
	componentDidMount() {
		this.setup()
		this.init()
	}
	play = () => {
		//if (!this.enabled) return false
		// console.log('play')
		this.animation = requestAnimationFrame(this.animate)
	}
	pause = () => {
		// console.log('pause')
		cancelAnimationFrame(this.animation)
	}
	setup = () => {

	this.width = window.innerWidth;
	this.height = window.innerHeight;

		// canvases
		this.ctx = this.refs.canvas.getContext('2d')
		// offscreen canvas
		this.tmpCanvas = document.createElement('canvas')
		this.tmpCanvasCtx = this.tmpCanvas.getContext('2d')
		// gradient canvases (off-screen)
		this.gCanvas1 = document.createElement('canvas')
		this.gCtx1 = this.gCanvas1.getContext('2d')
		this.gCanvas2 = document.createElement('canvas')
		this.gCtx2 = this.gCanvas2.getContext('2d')
		// sizes
		this.height = this.height * this.heightFactor
		this.widthF = this.width * this.scale
		this.heightF = this.height * this.scale
		this.diameter = parseInt(this.width / 2)
		this.radius = parseInt(this.diameter / 2)
		// apply sizes
		this.refs.canvas.width = this.width;
		this.refs.canvas.height = this.height;
		this.tmpCanvas.width = this.widthF
		this.tmpCanvas.height = this.heightF
		this.gCanvas1.width = this.gCanvas1.height = this.diameter
		this.gCanvas2.width = this.gCanvas2.height = this.diameter
		// disable smoothing
		this.ctx.webkitImageSmoothingEnabled = false
		this.ctx.mozImageSmoothingEnabled = false
		this.ctx.msImageSmoothingEnabled = false
		this.ctx.oImageSmoothingEnabled = false
		this.ctx.imageSmoothingEnabled = false
	}
	init = () => {
		console.log('init')
		if (this.gradients && this.balls.length === 0) {
			this.createGradients()
			this.generateBalls()
			this.animate(false) // setup first frame
			// if (!this.paused) return 

			this.play()
		}
	}
	createGradients = () => {
		// create instances of gradients that we will use as source for balls
		if (!this.gradients) return false
		const add = (ctx, rgb1, rgb2) => {
			const r = this.radius
			const grad = ctx.createRadialGradient(r, r, 1, r, r, r)
			grad.addColorStop(0, rgba(rgb1, 0.75))
			grad.addColorStop(1, rgba(rgb2, 0))
			ctx.fillStyle = grad
			ctx.arc(r, r, r, 0, Math.PI * 2)
			ctx.fill()
		}
		add(this.gCtx1, this.gradients[0][0], this.gradients[0][1])
		add(this.gCtx2, this.gradients[1][0], this.gradients[1][1])
	}
	generateBalls = () => {
		if (!this.gradients) return false
		const newBalls = []
		for (let i = 0; i < this.numBalls; i++) {
			const x = -this.widthF * 0.5 + Math.random() * this.widthF
			const y = -this.heightF * 0.5 + Math.random() * this.heightF
			const randVector = () => Math.round((Math.random() * 8) - 4) * 0.2
			const size = this.widthF > this.heightF ? this.widthF : this.heightF
			const gradient = Math.random() >= 0.5 ? this.gCanvas1 : this.gCanvas2
			// cache this variant as canvas
			const c = document.createElement('canvas')
			const cCtx = c.getContext('2d')
			// scale and draw the metaball
			c.width = c.height = size
			cCtx.drawImage(gradient, 0, 0, size, size)
			// add
			newBalls.push({
				x: parseInt(x),
				y: parseInt(y),
				vx: randVector(),
				vy: randVector(),
				size: size,
				maxX: this.widthF, // + size,
				maxY: this.heightF, // + size,
				img: c
			})
		}

		this.balls = newBalls
	}
	animate = (progress = true) => {
		let i = this.balls.length
		let ball
		this.tmpCanvasCtx.clearRect(0, 0, this.width, this.height)
		while (i--) {
			ball = this.balls[i]
			ball.x += ball.vx
			ball.y += ball.vy
			// x
			if (ball.x > ball.maxX) {
				ball.x = -ball.size
			} else if (ball.x < -ball.size) {
				ball.x = ball.maxX
			}
			// y
			if (ball.y > ball.maxY) {
				ball.y = -ball.size
			} else if (ball.y < -ball.size) {
				ball.y = ball.maxY
			}
			// draw cached ball onto off-screen canvas
			this.tmpCanvasCtx.drawImage(ball.img, ball.x, ball.y, ball.size, ball.size)
		}
		// trigger levels
		this.metabalize()
		// prevent animation ?
		if (this.paused || !progress) return
		// low-level loop
		this.animation = requestAnimationFrame(this.animate)
	}
	metabalize = () => {
		const imageData = this.tmpCanvasCtx.getImageData(0, 0, this.widthF, this.heightF)
		// put back data, clear frame and update scaled
		this.tmpCanvasCtx.putImageData(imageData, 0, 0)
		this.ctx.clearRect(0, 0, this.width, this.height)
		this.ctx.drawImage(this.tmpCanvas, 0, 0, this.width, this.height)

		this.balls.forEach(ball => {


		})
	}
	/*

			{[[41, 50, '255,160,75', '180,220,150'], [51, 60, '5,115,145', '255,125,110'],[61, 70, '170,76,35', '255,80,110']].map((gradient, j) => {
				const r = 300;
				const x = 100;;
				const y = j * (r) + 50;
				const br = 0;

				console.log(`radial-gradient(at left top, rgb(${gradient[2]}), transparent), radial-gradient(at center bottom, rgb(${gradient[3]}), transparent);`)
				return (
					<div key={`$${j}`} style={{position: 'absolute', top: y, left: x, height: r, width: r, borderRadius: `${br * 100}%`, background: `radial-gradient(at left top, rgb(${gradient[2]}), transparent), radial-gradient(at center bottom, rgb(${gradient[3]}), transparent)`}}></div>
				)
			})}
*/
	render() {
		return (
			<div style={{position: 'absolute', zIndex: -1, top: 0, left: 0}}>
				<canvas ref='canvas' />
			</div>
		)
	}
}

export default Gradients;