const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', event => {
  h1.innerHTML = `${event.clientX}, ${event.clientY}`;
  // h1.innerHTML = `${event.screenX}, ${event.screenY}`;
  // h1.textContent = `${event.pageX}, ${event.pageY}`;
  // h1.innerText = event.clientX + ", " + event.clientY;
})