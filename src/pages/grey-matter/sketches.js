let t = 0; 
let size = 400;
const NUM_ELEMENTS = 13;
const scenes = ['squareWave', 'pyramid', 'circleSquare', 'backToSquareWave', 'squareToCircle', 'circleToSquare', 'spacedSlot'];
let sceneKey = 'squareToCircle';
let bg = 0;
let color = 255;
let phase = 0;

export const inTangent = (p5, s) => {
    p5.background(bg);
    p5.stroke(255, 255,255,0)
    p5.fill(color,color,color,40)

    size = s;
  
   t += 0.001;
  
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
      squareWave(p5);
      break;
    case 'triangleDownRight':
      triangleDownRight(p5);
      break;
    case 'triangleRight':
      triangleRight(p5);
      break;
    case 'pyramid':
      pyramid(p5);
      break;
    case 'backToSquareWave':
      backToSquareWave(p5);
      break;
    case 'squareToCircle':
      squareToCircle(p5);
      break;
    case 'circleToSquare':
      circleToSquare(p5);
      break;
    default:
      break;
  }
}

// function spacedSlot() {
//   translate(window.innerWidth/2, window.innerHeight/2)
//   p5.rectMode(p5.CENTER);
//   for (let i = 0; i <= NUM_ELEMENTS; i += 1) {    
//       p5.push();
//         translate((i - NUM_ELEMENTS/2) * cos(t - Math.PI/2) * 14, 0)
//         p5.circle(0, 0, size)
//       p5.pop();
//   }
// }

function squareToCircle(p5) {
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

function circleToSquare(p5) {
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
            p5.translate((i - NUM_ELEMENTS/2) * p5.cos(t/2 - Math.PI/2) * 16, 0)
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

function rectSide(i) {
 return size - ((i * (size/NUM_ELEMENTS - 1)) * (Math.cos(t) + 1)/2); 
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

function pyramid(p5) {
  p5.translate(window.innerWidth/2, window.innerHeight/2)
  p5.rectMode(p5.CENTER);
  if (Math.sin(t) > 0) {
    phase = 1;
  }
  for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
      p5.push()
        let side = rectSide(i);
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

function squareWave(p5) {
  p5.rectMode(p5.CORNER);
    translate((window.innerWidth - size)/2, (window.innerHeight - size)/2)
    p5.push();
      for (let i = 0; i <= NUM_ELEMENTS; i += 1) {
        p5.rotate(Math.abs(-i * Math.sin(t) * Math.PI/210) * -1)
        p5.rect(0, 0, size, size)
      }
    p5.pop()
  
    mask(p5);
}

function mask(p5) {
    fill(bg)
    p5.rect(0, -size, window.innerWidth, size)
  
    p5.rect(0, size, window.innerWidth, size)

    p5.rect(size, 0, size, window.innerHeight)

    p5.rect(-size, 0, size, window.innerHeight)
}