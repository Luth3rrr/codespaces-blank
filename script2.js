document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get the values of the name, review, and rating fields
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;
  
    // Create a new review element
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
      <h2>${name}</h2>
      <p>${review}</p>
      <p class="rating">Rating: ${rating}/5</p>
    `;
  
    // Append the new review element to the reviews container
    document.getElementById('reviews-container').appendChild(newReview);
  });
  