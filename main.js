const h1 = document.querySelector('h1');

document.body.addEventListener('mousemove', event => {
  h1.innerHTML = `${event.clientX}, ${event.clientY}`;
  // h1.innerHTML = `${event.screenX}, ${event.screenY}`;
  // h1.textContent = `${event.pageX}, ${event.pageY}`;
  // h1.innerText = event.clientX + ", " + event.clientY;
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
  console.log(change)
})