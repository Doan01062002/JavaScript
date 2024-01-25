// Mảng chứa các câu Jokes
var jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Did you hear about the mathematician who’s afraid of negative numbers? He will stop at nothing to avoid them!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "I used to play piano by ear, but now I use my hands.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the bicycle fall over? Because it was two-tired!"
];

// Lấy tham chiếu đến các phần tử HTML
var jokeText = document.getElementById("jokeText");
var getJokeButton = document.getElementById("getJokeButton");

// Hàm lấy một số ngẫu nhiên trong khoảng từ min đến max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm thay đổi màu nền của body thành một màu ngẫu nhiên
function changeBackgroundColor() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

// Hàm hiển thị một câu Joke ngẫu nhiên và thay đổi màu nền
function getJoke() {
  var randomIndex = getRandomNumber(0, jokes.length - 1);
  var randomJoke = jokes[randomIndex];
  jokeText.textContent = randomJoke;
  changeBackgroundColor();
}

// Gán sự kiện click cho nút Get Another Joke
getJokeButton.addEventListener("click", getJoke);