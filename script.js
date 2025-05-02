document.onkeydown = function(e) {
  if (e.keyCode == 123) { // F12 Key
    return false;
  } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // Ctrl + Shift + I
    return false;
  } else if (e.ctrlKey && e.keyCode == 85) { // Ctrl + U
    return false;
  }
}

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));