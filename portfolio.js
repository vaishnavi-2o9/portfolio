const portfolios = [
      {
        name: "Vaishnavi Shukla",
        role: "UI/UX Designer",
        description: "Specializes in React and UX design.",
        url: "vaishnavi-shukla-portfolio.html"
      },
      {
        name: "Bob Smith",
        role: "Backend Engineer",
        description: "Experienced in Node.js, databases, and APIs.",
        url: "https://bobsmith.io"
      },
      {
        name: "Cathy Brown",
        role: "Full-stack Developer",
        description: "Works with MERN stack and cloud deployment.",
        url: "https://cathybrown.com"
      },
      {
        name: "David Lee",
        role: "Data Scientist",
        description: "Focus on machine learning and data visualization.",
        url: "https://davidlee.ai"
      }
    ];
     const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const message = document.getElementById('message');
    function searchPortfolios() {
      const query = searchInput.value.trim().toLowerCase();
      message.innerHTML = '';
      if (!query) {
        message.textContent = "Please enter a search query.";
        return;
      }
      const results = portfolios.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.role.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
      if (results.length > 0) {
        const first = results[0];
        // Compose message with scrolling portfolio name
        message.innerHTML =
          '<span class="static-text">Opening portfolio of</span> ' +
          '<span class="scrolling-name">' + first.name + ' (' + first.role + ')</span>...';
        // Open portfolio in new tab
        window.open(first.url, '_blank', 'noopener');
      } else {
        message.textContent = "No portfolios match your search.";
      }
    }
    // Event listeners
    searchBtn.addEventListener('click', searchPortfolios);
    searchInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        searchPortfolios();
      }
    });