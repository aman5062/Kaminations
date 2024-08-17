// Kanimations.js

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

  // Rotate animation
  function rotate(element, duration = 1000) {
    element.style.animation = `rotate ${duration}ms linear`;
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }

  // Scale animation
  function scale(element, scale = 1.5, duration = 1000) {
    element.style.transition = `transform ${duration}ms`;
    setTimeout(() => {
      element.style.transform = `scale(${scale})`;
    }, 10);
  }

  // Slide In from Right
  function slideInRight(element, duration = 400) {
    const width = element.offsetWidth;
    setStyles(element, {
      transform: `translateX(${width}px)`,
      opacity: 0,
      display: 'block',
      transition: `transform ${duration}ms, opacity ${duration}ms`,
    });
    setTimeout(() => {
      setStyles(element, {
        transform: 'translateX(0)',
        opacity: 1,
      });
    }, 10);
  }

  // Slide Out to Right
  function slideOutRight(element, duration = 400, callback) {
    const width = element.offsetWidth;
    setStyles(element, {
      transform: 'translateX(0)',
      opacity: 1,
      transition: `transform ${duration}ms, opacity ${duration}ms`,
    });
    setTimeout(() => {
      setStyles(element, {
        transform: `translateX(${width}px)`,
        opacity: 0,
      });
      setTimeout(() => {
        element.style.display = 'none';
        if (callback) callback();
      }, duration);
    }, 10);
  }

  // Slide In from Bottom
  function slideInBottom(element, duration = 400) {
    const height = element.offsetHeight;
    setStyles(element, {
      transform: `translateY(${height}px)`,
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

  // Slide Out to Bottom
  function slideOutBottom(element, duration = 400, callback) {
    const height = element.offsetHeight;
    setStyles(element, {
      transform: 'translateY(0)',
      opacity: 1,
      transition: `transform ${duration}ms, opacity ${duration}ms`,
    });
    setTimeout(() => {
      setStyles(element, {
        transform: `translateY(${height}px)`,
        opacity: 0,
      });
      setTimeout(() => {
        element.style.display = 'none';
        if (callback) callback();
      }, duration);
    }, 10);
  }

  // Flip animation
  function flip(element, duration = 1000) {
    element.style.transition = `transform ${duration}ms`;
    element.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      element.style.transform = 'rotateY(0deg)';
    }, 10);
  }

  // Shake animation
  function shake(element, duration = 1000) {
    element.style.animation = `shake ${duration}ms`;
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }

  // Pulse animation
  function pulse(element, duration = 1000) {
    element.style.animation = `pulse ${duration}ms infinite`;
    setTimeout(() => {
      element.style.animation = '';
    }, duration);
  }

  // Zoom In animation
  function zoomIn(element, duration = 1000) {
    element.style.transform = 'scale(0.5)';
    element.style.transition = `transform ${duration}ms`;
    setTimeout(() => {
      element.style.transform = 'scale(1)';
    }, 10);
  }

  // Zoom Out animation
  function zoomOut(element, duration = 1000) {
    element.style.transform = 'scale(1)';
    element.style.transition = `transform ${duration}ms`;
    setTimeout(() => {
      element.style.transform = 'scale(0.5)';
    }, 10);
  }

  // Keyframes for animations
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
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes shake {
      0% { transform: translateX(0); }
      25% { transform: translateX(-10px); }
      50% { transform: translateX(10px); }
      75% { transform: translateX(-10px); }
      100% { transform: translateX(0); }
    }
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;
  document.head.appendChild(styleSheet);

  // Expose the library to the global object
  global.Kanimations = {
    fadeIn,
    fadeOut,
    slideInTop,
    slideOutTop,
    slideInRight,
    slideOutRight,
    slideInBottom,
    slideOutBottom,
    bounce,
    rotate,
    scale,
    flip,
    shake,
    pulse,
    zoomIn,
    zoomOut,
  };
})(window);
