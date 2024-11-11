document.getElementById('newMemeBtn').addEventListener('click', fetchMeme);

function fetchMeme() {
    fetch('https://www.reddit.com/r/memes/random/.json')
        .then(response => response.json())
        .then(data => {
            const meme = data[0].data.children[0].data;
            const memeImageUrl = meme.url;
            const memeTitle = meme.title;
            
            // Set the image source and meme title
            document.getElementById('memeImage').src = memeImageUrl;
            document.getElementById('memeTitle').textContent = memeTitle;
        })
        .catch(error => {
            console.error('Error fetching meme:', error);
            alert('Error fetching meme. Please try again!');
        });
}

// Initial meme on load
fetchMeme();
