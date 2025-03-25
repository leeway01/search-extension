// public/renderSidebarCall.js
(function() {
    if (typeof window.renderSidebar === 'function') {
      const container = document.getElementById('custom-sidebar');
      if (container) {
        window.renderSidebar(container);
      } else {
        console.error("Sidebar container not found in page context.");
      }
    } else {
      console.error("window.renderSidebar is not defined in page context.");
      const container = document.getElementById('custom-sidebar');
      if (container) {
        container.innerHTML = "<p style='color:red'>Sidebar render function not found.</p>";
      }
    }
  })();
  