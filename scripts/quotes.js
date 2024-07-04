fetch('../data/quotes.json')
  .then(response => response.json())
  .then(data => {
    const quote = data[Math.floor(Math.random() * data.length)];
    document.getElementById('quote-text').textContent = quote.text;
    document.getElementById('quote-author').textContent = `- ${quote.author}`;
  })
  .catch(error => console.error('Error fetching quotes:', error));
