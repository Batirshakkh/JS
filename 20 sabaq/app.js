// break and  continue

const natijalar = [30, 43, 0, 100, 20, 11];

for (let i = 0; i < natijalar.length; i++) {
    
    if (natijalar[i] === 0) {        
        continue;
    }
    console.log('Sizning natijalaringiz:', natijalar[i]);
    if (natijalar[i] === 100) {
        console.log("siz eng yoqari ballni topladingiz");
        break;
    }
    }