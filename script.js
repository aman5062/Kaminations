// animationLibrary.js

(function(global) {
  // Utility function to set CSS styles
  function setStyles(element, styles) {
    Object.assign(element.style, styles);
  }

  // Fade In animation
  function fadeIn(element, duration = 400) {
    element.style.opacity = 0;
    element.style.display = 'block';
    element.style.transition = `opacity ${duration}ms`;
    setTimeout(() => {
      element.style.opacity = 1;
    }, 10);
  }

  // Fade Out animation
  function fadeOut(element, duration = 400, callback) {
    element.style.opacity = 1;
    element.style.transition = `opacity ${duration}ms`;
    setTimeout(() => {
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.display = 'none';
        if (callback) callback();
      }, duration);
    }, 10);
  }

  // Slide In from Top
  function slideInTop(element, duration = 400) {
    const height = element.offsetHeight;
    setStyles(element, {
      transform: `translateY(-${height}px)`,
      opacity: 0,
      display: 'block',
      transition: `transform ${duration}ms, opacity ${duration}ms`,
    });
    setTimeout(() => {
      setStyles(element, {
        transform: 'translateY(0)',
        opacity: 1,
      });
    }, 10);
  }

  // Slide Out to Top
  function slideOutTop(element, duration = 400, callback) {
    const height = element.offsetHeight;
    setStyles(element, {
      transform: 'translateY(0)',
      opacity: 1,
      transition: `transform ${duration}ms, opacity ${duration}ms`,
    });
    setTimeout(() => {
      setStyles(element, {
        transform: `translateY(-${height}px)`,
        opacity: 0,
      });
      setTimeout(() => {
        element.style.display = 'none';
        if (callback) callback();
      }, duration);
    }, 10);
  }

  // Bounce animation
  function bounce(element, duration = 1000) {
    element.style.animation = `bounce ${duration}ms`;
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }

  // Keyframes for bounce
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  // Expose the library to the global object
  global.animations = {
    fadeIn,
    fadeOut,
    slideInTop,
    slideOutTop,
    bounce,
  };
})(window);
