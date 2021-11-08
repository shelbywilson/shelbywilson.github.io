let t = 0; 
let size = 400;
const NUM_ELEMENTS = 13;
const scenes = ['squareWave', 'pyramid', 'circleSquare', 'backToSquareWave', 'squareToCircle', 'circleToSquare', 'spacedSlot'];
let sceneKey = 'circleToSquare';
let bg = 255;
let color = 0;
let phase = 0;

export const inTangent = (p5, s, inverse) => {
    if (inverse) {
      color = 255;
      bg = 0;
    } else {
      color = 0;
      bg = 255;
    }
    p5.background(bg);
    p5.stroke(color, 0)
    p5.fill(color,color,color,40)

    size = s;
    t += 0.0015;
  
  switch(sceneKey) {
    case 'squareWave':
      if (Math.sin(t) < 0) {
        sceneKey = 'squareToCircle';
        phase = 0;
        t = 0;
      }
      break;
    case 'pyramid': 
      if (Math.sin(t) > 0 && phase === 1) {
        sceneKey = 'backToSquareWave';
        t = 0;
        phase = 0;
      }
      break;
    case 'backToSquareWave': 
      if(Math.cos(t/4) < 0) {
        sceneKey = 'squareWave';
        t = 0;
      }
      break;
    case 'squareToCircle':
      if (phase === 3 && Math.cos(t/2) > 0) {
        sceneKey = 'circleToSquare';
        phase = 0;
        t = 0;
      }
      break;
    case 'circleToSquare':
      if (phase === 3) {
        if(Math.sin(t/2) > 0) {
          sceneKey = 'pyramid';
          phase = 0;
          t = Math.PI;
        }
      }
      break;
    default:
      break;
  }
  
  switch(sceneKey) {
    case 'squareWave':
      squareWave(p5, size, t);
      break;
    case 'triangleDownRight':
      triangleDownRight(p5, size, t);
      break;
    case 'triangleRight':
      triangleRight(p5, size, t);
      break;
    case 'pyramid':
      pyramid(p5, size, t);
      break;
    case 'backToSquareWave':
      backToSquareWave(p5, size, t);
      break;
    case 'squareToCircle':
      squareToCircle(p5, size, t);
      break;
    case 'circleToSquare':
      circleToSquare(p5, size, t);
      break;
    default:
      break;
  }
}

export function spacedSlot(p5, size, t) {
  p5.translate(window.innerWidth/2, window.innerHeight/2)
  p5.rectMode(p5.CENTER);
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {    
      p5.push();
        p5.translate((i - NUM_ELEMENTS/2) * Math.cos(t - Math.PI/2) * 14, 0)
        p5.circle(0, 0, size)
      p5.pop();
  }
}

export function threshold(p5, size, inverse) {
  if (inverse) {
    color = 255;
    bg = 0;
  } else {
    color = 0;
    bg = 255;
  }
  p5.background(bg);
  p5.stroke(color, 0)
  p5.translate((window.innerWidth/2) - (size * 1.2), (window.innerHeight/2) - (size * 1.2))
  
  for (let j = 0; j < 9; j += 1) {
    p5.push();
      p5.translate(size * (j%3) * 1.2, size * Math.floor(j/3) * 1.2)
      let relT = p5.frameCount * ((9 - j) * 0.00015) + Math.PI;
      for (let i = 0; i < 10; i += 1) {
          p5.fill(color, 20 + (i * 7))
          p5.circle(0, 0, size - (i * (size / 9) + (i * -(size / 9) * Math.cos(relT))))
      }
    p5.pop()
  }
}

export function squareToCircle(p5, size, t) {
  p5.translate(window.innerWidth/2, window.innerHeight/2)
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
        p5.rect(0,0,side)
      p5.pop()
    }
  }
}

export function circleToSquare(p5, size, t) {
  p5.translate(window.innerWidth/2, window.innerHeight/2)
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
          let maxRotation = p5.map(i, 0, NUM_ELEMENTS + 1, Math.PI, 0);
           if (phase === 0) {
              p5.rotate(p5.map(p5.cos(t/2), -1, 1, 0, maxRotation))
              p5.rect(0, 0, size, size, ((p5.cos(t) + 1)/2 * size/2))
           } else if (phase === 1) {
              p5.rotate(p5.map(p5.cos(t/2), -1, 1, 0, maxRotation))
             p5.rect(0,0,size)
           } else if (phase === 2 || phase === 3) {
            p5.translate((i - NUM_ELEMENTS/2) * p5.cos(t/2 - Math.PI/2) * size/25, 0)
             if (phase === 2) {
               p5.rotate(p5.map(p5.cos(t), 1, -1, 0, -Math.PI/4))
             } else {
               p5.rotate(-Math.PI/4)
             }
             p5.rect(0,0,size)
           }
      p5.pop();
  }
}

export function circleSquare(p5, size, t) {
    p5.translate(window.innerWidth/2, window.innerHeight/2)
    p5.rectMode(p5.CENTER);
    
  
     for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
        p5.push();
            let maxRotation = p5.map(i, 0, NUM_ELEMENTS + 1, Math.PI, 0);
            p5.rotate(p5.map(p5.cos(t/2), -1, 1, 0, maxRotation))
            p5.rect(0, 0, size, size, ((p5.cos(t) + 1)/2 * size/2))
        p5.pop();
    }
  }



function backToSquareWave(p5) {
   p5.translate(window.innerWidth/2, window.innerHeight/2)
  p5.rectMode(p5.CENTER);
  
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
      let side = size - (i * (size/NUM_ELEMENTS - 1)) * (Math.cos(t/2) + 1)/2;
      p5.push()
        p5.rotate(i * Math.abs(Math.sin(t/2))/7)
        p5.rect(0, 0, side, side)
      p5.pop();
  }
}

export function pyramid(p5, size, t) {
  p5.translate(window.innerWidth/2, window.innerHeight/2)
  p5.rectMode(p5.CENTER);
  if (Math.sin(t) > 0) {
    phase = 1;
  }
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
      p5.push()
        let side = size - ((i * (size/NUM_ELEMENTS - 1)) * (Math.cos(t) + 1)/2); ;
        p5.rotate(p5.map(Math.cos(t), 1, -1, 0, -Math.PI/4))
        p5.rect(0, 0, side, side)
      p5.pop();
  }
}

function w(i) {
  return size - (i * NUM_ELEMENTS * (Math.cos(t) + 1))
}


function triangleDownRight(p5) {
  p5.rectMode(p5.CENTER);
  p5.translate(window.innerWidth/2, window.innerHeight/2)
  
  p5.rotate(Math.PI)
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
    p5.push();
    
    p5.translate(-size/2, -size/2)
    p5.rect(
        ((w(0) - w(i))/2 * (-cos(t/2) + 1)/2) + w(i)/2,
        ((w(0) - w(i))/2 * (cos(t/2) + 1)/2) + w(i)/2, 
        w(i), 
        w(i)
     )
    p5.pop();
  }

}

export function squareWave(p5, size, t) {
    p5.rectMode(p5.CORNER);
    p5.translate((window.innerWidth - size)/2, (window.innerHeight - size)/2)
    p5.push();
      for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
        p5.rotate(Math.abs(-i * Math.sin(t) * Math.PI/210) * -1)
        p5.rect(0, 0, size, size)
      }
    p5.pop()
  
    mask(p5);
}

function mask(p5) {
    p5.fill(bg)
    p5.rect(0, -size, window.innerWidth, size)
  
    p5.rect(0, size, window.innerWidth, size)

    p5.rect(size, 0, size, window.innerHeight)

    p5.rect(-size, 0, size, window.innerHeight)
}