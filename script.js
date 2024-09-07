let selectedRating = 0; // This will store the selected rating

// This function will update the selected rating when a rating is clicked
function selectRating(rating) {
  selectedRating = rating; // Store the clicked rating value
}

// This function will display the selected rating when the submit button is clicked
function submitRating() {
  let ratingText = document.getElementById("rating-text");

  if (selectedRating === 0) {
    // If no rating was selected, show an alert
    alert("Please select a rating before submitting!");
  } else {
    // Show the rating text and display the selected rating
    ratingText.style.display = "block";
    ratingText.innerHTML = `You selected ${selectedRating} out of 5`;
  }
}

function submit() {
  let title = document.getElementById("title");
  let description = document.getElementById("description");
  let rating = document.getElementById("rating");
  let star = document.getElementById("star");
  let submitBtn = document.getElementById("submitBtn");
  let starbackground = document.getElementById("star-background");
  let illustration = document.getElementById("illustration");
  let thanks = document.getElementById("thanks");
  let note = document.getElementById("note");
  let rating1 = document.getElementById("rating 1");

  //Onclick Hide Description, Title and Rating
  title.style.display = "none";
  description.style.display = "none";
  rating.style.display = "none";
  star.style.display = "none";
  submitBtn.style.display = "none";
  starbackground.style.display = "none";

  //Show Thank You Message
  illustration.style.display = "block";
  thanks.style.display = "block";
  note.style.display = "block";

  //Show Rating

  if (rating1.classList.contains("rating-1")) {
    rating1.classList.remove("rating-1");
  }
}
