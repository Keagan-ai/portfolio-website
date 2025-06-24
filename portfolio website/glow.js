function newStyle() {
  let glowRange = '';
  let x = Math.floor(Math.random()*5)
  switch (x){
    case 0:
      glowRange = '0px 0px 40px 5px rgba(45,255,196,0.9)';
      break;
    case 1:
      glowRange = '0px 0px 50px 5px rgba(45,255,196,0.9)';
      break;
    case 2:
      glowRange = '0px 0px 60px 5px rgba(45,255,196,0.9)';
      break;
    case 3:
      glowRange = '0px 0px 10px 5px rgba(45,255,196,0.9)';
      break;
    case 4:
      glowRange = '0px 0px 5px 5px rgba(45,255,196,0.9)';
      break;
  }
  var elem = document.getElementById('profile-pic')
  elem.style.boxShadow = glowRange;
}