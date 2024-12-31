

// Function to fetch latest news
function fetchNews() {
  const apiKey = 'fea5c86c05a148038d34002d7ab3cbf2'; // Replace with your News API key
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
      })
      .then(data => {
          const newsList = document.getElementById('news-list');
          newsList.innerHTML = '';
          data.articles.forEach(article => {
              const listItem = document.createElement('li');
              listItem.className = 'list-group-item';
              listItem.innerText = article.title;
              newsList.appendChild(listItem);
          });
      })
      .catch(error => console.error('Error fetching news:', error));
}


document.getElementById('news-button').addEventListener('click', fetchNews);


fetchNews();