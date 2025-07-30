const canvas = document.getElementById("stage");
const ctx = canvas.getContext("2d");
let elements = [];

function addCharacter() {
  const img = new Image();
  img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Iconic_image_of_a_cartoon_character.png/200px-Iconic_image_of_a_cartoon_character.png';
  img.onload = () => {
    const element = {
      type: 'image',
      img,
      x: 100,
      y: 100,
      width: 100,
      height: 100,
      dx: 1,
    };
    elements.push(element);
  };
}

function addSpeechBubble() {
  const text = {
    type: 'text',
    content: 'Hello!',
    x: 120,
    y: 90,
    font: '20px Comic Sans MS',
    color: 'black'
  };
  elements.push(text);
}

function playAnimation() {
  let frame = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    elements.forEach(el => {
      if (el.type === 'image') {
        el.x += el.dx;
        ctx.drawImage(el.img, el.x, el.y, el.width, el.height);
      } else if (el.type === 'text') {
        ctx.font = el.font;
        ctx.fillStyle = el.color;
        ctx.fillText(el.content, el.x, el.y);
      }
    });
    frame++;
    if (frame < 100) requestAnimationFrame(animate);
  }
  animate();
}
