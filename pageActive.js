// 1. Get the current page filename (e.g., /events.html)
  const currentPage = window.location.pathname;

  // 2. Select all links in your nav
  const links = document.querySelectorAll('.nav-links a');

  // 3. Loop through each link
  links.forEach(link => {
    // Check if the link's href matches the current page
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }
  }); 

