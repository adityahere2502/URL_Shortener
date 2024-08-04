async function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;
  
    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl }),
      });
  
      if (response.ok) {
        const result = await response.json();
        document.getElementById('shortUrl').innerHTML = `Short URL: <a href="/${result.shortUrl}" target="_blank">${result.shortUrl}</a>`;
      } else {
        const error = await response.json();
        alert(`Error: ${error.error}`);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  }
  