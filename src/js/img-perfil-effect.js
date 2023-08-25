const imgeffect = document.getElementById('img-effect');
const texteffecthero = document.getElementById('text-hero-effect')


setTimeout(() => {
    
    imgeffect.classList.add('tilt-in-fwd-tr');
  }, 3000);

  setTimeout(() => {
    
    texteffecthero.classList.add('puff-in-center');
  }, 4000);