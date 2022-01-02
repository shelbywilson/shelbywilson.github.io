import { scenes } from "./scenes";
import p5Types from "p5"; 

let t = 0;
let size = 400;
const NUM_ELEMENTS = 13;
// @ts-ignore
let sceneKey = Object.values(scenes)[Math.floor(Math.random() * (Object.values(scenes).length - 1) )];
let bg = 255;
let color = 0;
let phase = 0;
let width = 400;
let height = 400;

export const inTangent = (p5: p5Types, s: number, inverse: any, outline: any, w: number, h: number) => {
    width = w;
    height = h;

    if (inverse) {
      color = 255;
      bg = 0;
    } else {
      color = 0;
      bg = 255;
    }
    p5.background(bg);

    p5.stroke(color, outline ? 255 : 0)
    p5.fill(color, outline ? 0 : 40)

    size = s;
    t += 0.0015;
  
  switch(sceneKey) {
    case scenes.SQUAREWAVE:
      if (Math.sin(t) < 0) {
        sceneKey = scenes.SQUARE_TO_CIRCLE;
        phase = 0;
        t = 0;
      }
      break;
    case scenes.PYRAMID: 
      if (Math.sin(t) > 0 && phase === 1) {
        sceneKey = scenes.BACK_TO_SQUARE_WAVE;
        t = 0;
        phase = 0;
      }
      break;
    case scenes.BACK_TO_SQUARE_WAVE: 
      if(Math.cos(t/4) < 0) {
        sceneKey = scenes.SQUAREWAVE;
        t = 0;
      }
      break;
    case scenes.SQUARE_TO_CIRCLE:
      if (phase === 3 && Math.cos(t/2) > 0) {
        sceneKey = scenes.CIRCLE_TO_SQUARE;
        phase = 0;
        t = 0;
      }
      break;
    case scenes.CIRCLE_TO_SQUARE:
      if (phase === 3) {
        if(Math.sin(t/2) > 0) {
          sceneKey = scenes.PYRAMID;
          phase = 0;
          t = Math.PI;
        }
      }
      break;
    default:
      break;
  }
  
  switch(sceneKey) {
    case scenes.SQUAREWAVE:
      squareWave(p5, size, t);

      if (outline) {
        p5.stroke(color)
        p5.noFill()
        p5.rect(0, 0, size, size)
      }
      break;
    // case 'triangleDownRight':
    //   triangleDownRight(p5, size, t);
    //   break;
    // case 'triangleRight':
    //   triangleRight(p5, size, t);
    //   break;
    case scenes.PYRAMID:
      pyramid(p5, size, t);
      break;
    case scenes.BACK_TO_SQUARE_WAVE:
      backToSquareWave(p5, size, t);
      break;
    case scenes.SQUARE_TO_CIRCLE:
      squareToCircle(p5, size, t);
      break;
    case scenes.CIRCLE_TO_SQUARE:
      circleToSquare(p5, size, t);
      break;
    default:
      break;
  }
}

export function spacedSlot(p5: p5Types, size: any, t: number) {
  p5.translate(width/2, height/2)
  p5.rectMode(p5.CENTER);
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {    
      p5.push();
        p5.translate((i - NUM_ELEMENTS/2) * Math.cos(t - Math.PI/2) * 14, 0)
        p5.circle(0, 0, size)
      p5.pop();
  }
}

export function threshold(p5: p5Types, size: number, inverse: any, outline: any, w: number, h: number) {
  width = w;
  height = h;
  if (inverse) {
    color = 255;
    bg = 0;
  } else {
    color = 0;
    bg = 255;
  }
  p5.background(bg);
  p5.stroke(color, outline ? 255 : 0)
  p5.translate((width/2) - (size * 1.2), (height/2) - (size * 1.2))
  
  for (let j = 0; j < 9; j += 1) {
    p5.push();
      p5.translate(size * (j%3) * 1.2, size * Math.floor(j/3) * 1.2)
      const relT = p5.frameCount * ((9 - j) * 0.00015) + Math.PI;
      for (let i = 0; i < 10; i += 1) {
          p5.fill(color, outline ? 0 : 20 + (i * 7))
          p5.circle(0, 0, size - (i * (size / 9) + (i * -(size / 9) * Math.cos(relT))))
      }
    p5.pop()
  }
}

export function squareToCircle(p5: p5Types, size: number, t: number) {
  p5.translate(width/2, height/2)
  p5.rectMode(p5.CENTER);
  let side = size * Math.cos(t);
  
  if (side <= 0 && phase === 0) {
    phase = 1;
  } else if (phase === 1 && Math.sin(t) < 0) {
    phase = 2
  } else if (phase === 2 && p5.cos(t/2 + Math.PI/2) > 0) {
    phase = 3;
  }
  
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
    if (phase === 1) {
      side = Math.abs(side);
      p5.circle(0, 0, Math.max(0, side - (i * (size/NUM_ELEMENTS - 1))))
    } else if (phase === 2 || phase === 3 ) {
      side = phase === 3 ? size : size - (i * (size/NUM_ELEMENTS - 1) + p5.map(p5.cos(t), -1, 1, 0, i * -(size/NUM_ELEMENTS - 1)))
      p5.push();
        p5.translate((i - NUM_ELEMENTS/2) * p5.cos(t/2) * 14, 0)
        p5.circle(0,0, side)
      p5.pop();
    } else {
      p5.push();
        // p5.rotate(p5.map(cos(t), 1, -1, 0, p5.map(i, 0, NUM_ELEMENTS + 1, Math.PI * 2, 0))) 
        p5.rect(0,0,side, side)
      p5.pop()
    }
  }
}

export function circleToSquare(p5: p5Types, size: number, t: number) {
  p5.translate(width/2, height/2)
  p5.rectMode(p5.CENTER);
  
    if (phase === 0 && p5.cos(t/2) < 0) {
       phase = 1;
     } else if (phase === 1 && p5.sin(t) > 0) {
      phase = 2;
    } else if (phase === 2 && p5.cos(t/2) > 0) {
      phase = 3;
    }

   for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
      p5.push();
          const maxRotation = p5.map(i, 0, NUM_ELEMENTS + 1, Math.PI, 0);
           if (phase === 0) {
              p5.rotate(p5.map(p5.cos(t/2), -1, 1, 0, maxRotation))
              p5.rect(0, 0, size, size, ((p5.cos(t) + 1)/2 * size/2))
           } else if (phase === 1) {
              p5.rotate(p5.map(p5.cos(t/2), -1, 1, 0, maxRotation))
             p5.rect(0,0,size, size)
           } else if (phase === 2 || phase === 3) {
            p5.translate((i - NUM_ELEMENTS/2) * p5.cos(t/2 - Math.PI/2) * size/25, 0)
             if (phase === 2) {
               p5.rotate(p5.map(p5.cos(t), 1, -1, 0, -Math.PI/4))
             } else {
               p5.rotate(-Math.PI/4)
             }
             p5.rect(0,0,size, size)
           }
      p5.pop();
  }
}

export function circleSquare(p5: p5Types, size: number, t: number) {
    p5.translate(width/2, height/2)
    p5.rectMode(p5.CENTER);
    
     for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
        p5.push();
            const maxRotation = p5.map(i, 0, NUM_ELEMENTS + 1, Math.PI, 0);
            p5.rotate(p5.map(p5.cos(t/2), -1, 1, 0, maxRotation))
            p5.rect(0, 0, size, size, ((p5.cos(t) + 1)/2 * size/2))
        p5.pop();
    }
  }



function backToSquareWave(p5: p5Types, size: number, t: number) {
  p5.translate(width/2, height/2)
  p5.rectMode(p5.CENTER);
  
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
      const side = size - (i * (size/NUM_ELEMENTS - 1)) * (Math.cos(t/2) + 1)/2;
      p5.push()
        p5.rotate(i * Math.abs(Math.sin(t/2))/7)
        p5.rect(0, 0, side, side)
      p5.pop();
  }
}

export function pyramid(p5: p5Types, size: number, t: number) {
  p5.translate(width/2, height/2)
  p5.rectMode(p5.CENTER);
  if (Math.sin(t) > 0) {
    phase = 1;
  }
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
      p5.push()
        const side = size - ((i * (size/NUM_ELEMENTS - 1)) * (Math.cos(t) + 1)/2);
        p5.rotate(p5.map(Math.cos(t), 1, -1, 0, -Math.PI/4))
        p5.rect(0, 0, side, side)
      p5.pop();
  }
}

function w(i: number) {
  return size - (i * NUM_ELEMENTS * (Math.cos(t) + 1))
}

export function triangleDownRight(p5: p5Types) {
  p5.rectMode(p5.CENTER);
  p5.translate(width/2, height/2)
  
  p5.rotate(Math.PI)
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
    p5.push();
    
    p5.translate(-size/2, -size/2)
    p5.rect(
        ((w(0) - w(i))/2 * (-p5.cos(t/2) + 1)/2) + w(i)/2,
        ((w(0) - w(i))/2 * (p5.cos(t/2) + 1)/2) + w(i)/2, 
        w(i), 
        w(i)
     )
    p5.pop();
  }
}

export function squareWave(p5: p5Types, size: number, t: number) {
    p5.rectMode(p5.CORNER);
    p5.translate((width - size)/2, (height - size)/2)
    p5.push();
      for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
        p5.rotate(Math.abs(-i * Math.sin(t) * Math.PI/210) * -1)
        p5.rect(0, 0, size, size)
      }
    p5.pop()
  
    mask(p5, size);
}

function mask(p5: p5Types, size: number) {
    p5.stroke(255, 0)
    p5.fill(bg)
    p5.rect(0, -size, width, size)
  
    p5.rect(0, size, width, size)

    p5.rect(size, 0, size, height)

    p5.rect(-size, 0, size, height)
}