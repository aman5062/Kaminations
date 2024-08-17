// alertLibrary.js

(function(global) {
  // Create an alert container
  function createAlertContainer() {
    const container = document.createElement('div');
    container.id = 'custom-alert-container';
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.right = '10px';
    container.style.zIndex = '1000';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'flex-end';
    document.body.appendChild(container);
    return container;
  }

  // Create an alert element
  function createAlert(message) {
    const alert = document.createElement('div');
    alert.className = 'custom-alert';
    alert.style.backgroundColor = '#f44336';
    alert.style.color = '#fff';
    alert.style.padding = '15px';
    alert.style.marginBottom = '10px';
    alert.style.borderRadius = '3px';
    alert.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
    alert.style.cursor = 'pointer';
    alert.textContent = message;
    alert.onclick = function() {
      this.style.opacity = '0';
      setTimeout(() => this.remove(), 300);
    };
    return alert;
  }

  // Main function to show alert
  function showAlert(message) {
    let container = document.getElementById('custom-alert-container');
    if (!container) {
      container = createAlertContainer();
    }
    const alert = createAlert(message);
    container.appendChild(alert);
    setTimeout(() => {
      alert.style.opacity = '1';
    }, 10);
  }

  // Expose the library to the global object
  global.customAlert = {
    show: showAlert
  };
})(window);
