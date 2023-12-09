// query selector variables go here 👇
var posterImgClass = document.querySelector(".poster-img");
var posterTitleClass = document.querySelector(".poster-title");
var posterQuoteClass = document.querySelector(".poster-quote");
var showRandomButton = document.querySelector(".show-random");
var mainToFormButton = document.querySelector(".show-form");
var formToMainButton = document.querySelector(".show-main");
var mainToSavedButton = document.querySelector(".show-saved")
var savedToMainButton = document.querySelector(".back-to-main")
var showMyPosterButton = document.querySelector(".make-poster")
var savePosterButton = document.querySelector(".save-poster")
var mainPage = document.querySelector(".main-poster");
var formPage = document.querySelector(".poster-form");
var savedPage = document.querySelector(".saved-posters");
var urlField = document.querySelector("#poster-image-url")
var titleField = document.querySelector("#poster-title")
var quoteField = document.querySelector("#poster-quote")
var posterGrid = document.querySelector(".saved-posters-grid")


// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇
showRandomButton.addEventListener("click", newRandomPoster);
//showFormButton.addEventListener("click", switchFromMainToForm);
mainToFormButton.addEventListener("click", () => {
  togglePages(mainPage, formPage)
})
formToMainButton.addEventListener("click", () => {
  togglePages(formPage, mainPage)
})
savedToMainButton.addEventListener("click", () => {
  togglePages(savedPage, mainPage)
})
mainToSavedButton.addEventListener("click", () => {
  togglePages(mainPage, savedPage)
})
showMyPosterButton.addEventListener("click", displayCustomPoster)

savePosterButton.addEventListener("click", savePoster)



// function switchFromMainToForm(){
//   mainPage.classList.add('hidden');
//   formPage.classList.remove('hidden');
// }

// function switchFromFormToMain(){

// }

// function switchFromSavedToMain(){

// }

// function switchFromMainToSaved(){

// }


// functions and event handlers go here 👇
// (we've provided two to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
}

function newRandomPoster () {
  var randomImage = images[getRandomIndex(images)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomQuote = quotes[getRandomIndex(quotes)]
  var newPoster = createPoster(randomImage, randomTitle, randomQuote)
  currentPoster = newPoster
  posterImgClass.src = currentPoster.imageURL
  posterTitleClass.innerText = currentPoster.title
  posterQuoteClass.innerText = currentPoster.quote
  return currentPoster
  }

  //hide page 1 and unhide page 2
function togglePages(page1, page2){
  page1.classList.toggle('hidden');
  page2.classList.toggle('hidden');
}


/* We need to write a function that will use the user entered data to 
create a new poster that is displayed when the button is clicked.
1. we need to get/define vars there will be 4
    -show my poster button
    -img url box
    -title box
    -quote box
2. write a function that creates and displays a new poster using our variables
3. the function should also save the new var into a data array 
*/


function displayCustomPoster(event) {
      var customPoster = createPoster(urlField.value, titleField.value, quoteField.value)
      currentPoster = customPoster
      togglePages(formPage, mainPage)
      posterImgClass.src = currentPoster.imageURL
      posterTitleClass.innerText = currentPoster.title
      posterQuoteClass.innerText = currentPoster.quote
      event.preventDefault()
      images.push(currentPoster.imageURL)
      titles.push(currentPoster.title)
      quotes.push(currentPoster.quote)
  }



// When "Save this poster" is clicked, current poster 
// (an object) added to savedPoster array.
// If clicked more than once, only one poster added.
// When "show saved posters" clicked, show saved posters view
// savedPoster array displayed in saved posters grid section.
// querySelector variables:
//    "Save this poster" button
//    "Show saved posters" button 
//    "saved-posters-grid"?? (MIGHT BE SOME GOOGLING)
// Write function that adds current poster to the savedPoster array.
// Will require savedPosters.push
// Will require for loop and
// if statement to check to see if a poster is already there.

function savePoster() {
  if (!savedPosters.includes(currentPoster)){
    savedPosters.push(currentPoster)
    posterGrid.insertAdjacentHTML('afterbegin', 
    `<div class="mini-poster">
      <img src="${currentPoster.imageURL}" alt="motivational poster">
      <h2>${currentPoster.title}</h2>
      <h4>${currentPoster.quote}<h4>
    </div>`)
  }
}



 newRandomPoster();




//  <img src="./assets/bees.jpg" class="mini-poster img" alt="Image 1">

