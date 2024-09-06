let selectedRating = 0;

function selectRating(rating) {
  selectedRating = rating;
}

function submitRating() {
  let ratingText = document.getElementById("rating-text");

  // Display the selected rating text
  ratingText.style.display = "block";
  ratingText.innerHTML = `You selected ${selectedRating} out of 5`;
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
