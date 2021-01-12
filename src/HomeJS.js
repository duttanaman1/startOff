function random(min, max) {
  let num = Math.random() * (max - min) + min;
  return Math.round(num);
}

function rotate(arr, count) {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
}

function createShadowCardLists() {
  /*
  create a bunch of ratios that would fit nicely next to each other

  rotate the array around itself by a random shift

  create the shadow lists with the shadow cards
  */
  var ratios = [
    0.23,
    0.19,
    0.32,
    0.26,
    0.3,
    0.12,
    0.21,
    0.25,
    0.16,
    0.09,
    0.12,
    0.22,
    0.14,
    0.31,
    0.18,
  ];

  ratios = rotate(ratios, random(0, ratios.length));

  var cardList = document.querySelector(".card-list");
  var shadowBackground = document.querySelector(".shadow-background");

  var leftsUntilNow = 0;
  while (leftsUntilNow < window.innerWidth) {
    for (var i = 0; i < ratios.length; i++) {
      if (leftsUntilNow > window.innerWidth) return;

      var shadowList = cardList.cloneNode(true);
      shadowList.className = "shadow-list";
      shadowList.style.transform = "scale(" + ratios[i] + ")";
      shadowList.style.zIndex = ratios[i] * 100;
      shadowList.style.left = leftsUntilNow + "px";
      leftsUntilNow += 1024 * ratios[i] - random(60, 140);

      shadowBackground.appendChild(shadowList);
    }
  }
}

function getCardTitlesMargins(card) {
  var title = card.querySelector(".title");
  console.log(title);
  var style = title.currentStyle || window.getComputedStyle(title);

  return (
    parseInt(style.marginTop) +
    parseInt(style.marginBottom) +
    title.offsetHeight
  );
}

function pushCardTitleDown(card, measure) {
  var title = card.querySelector(".title");
  title.style.transform = "translateY(" + measure + "px)";
}

function cardParallax(card) {
  /*
    card parallax effect for the card
  
  for the parallax, we want the title and the card to take the same amount of scorlling time
  but we know, Speed = Distance / Time
  
  they will be sharing the same time
  
  instead of incrementing/decrementing based on the speed, we will always know where the distance should be, and accurately set that instead
  
  initially, we know that time to cross the card = time to cross the window

  this means that to find "the distance crossed in the card", we'll need to evaluate "(the distance crossed in the window * the speed of scrolling in the window) / the speed of scrolling in the card"

  we will assume that the speed of scrolling in the window is 1 because we get a scroll event for every scroll that is made there
  so that leaves us with the speed of the scrolling in the card, which we don't know yet

  but the speed of scrolling in the card = (the distance scrolled in the card / the distance scrolled in the window)

  so we substitute and we get, the distance crossed in the card = the distance crossed in the window / (the distance scrolled in the card / the distance scrolled in the window)

  so distance scrolled in the card = distance scrolled in the window
  */
  var windowHeight = window.innerHeight;
  var cardHeight = card.offsetHeight - getCardTitlesMargins(card);
  var cardStartPosition = card.offsetTop;
  var distanceTraveledInWindow =
    window.scrollY + windowHeight - cardStartPosition;

  if (distanceTraveledInWindow > windowHeight) return;

  pushCardTitleDown(
    card,
    (distanceTraveledInWindow * cardHeight) / windowHeight
  );
}

function cardIsInView(card) {
  /*
  checks if the view (which is scrollY position + window height) is at the start of a card
  
  also checks if the card endpoint (its starting point + height) is still under the scrollY position (meaning if we still haven't scrolled past it)
  */
  var scrollDistance = window.scrollY;
  var windowHeight = window.innerHeight;
  var cardHeight = card.offsetHeight;
  var cardCheckpoint = card.offsetTop;

  return (
    scrollDistance + windowHeight >= cardCheckpoint &&
    scrollDistance < cardCheckpoint + cardHeight
  );
}

function manageScrolling() {
  /*
  go over each card in the page
  and if they are in view, start the parallax effect
  */
  var allCards = document.querySelectorAll(".card");
  allCards.forEach(function (card) {
    if (cardIsInView(card)) {
      cardParallax(card);
    }
  });
}

window.addEventListener("scroll", manageScrolling);

window.addEventListener("load", manageScrolling);

window.addEventListener("load", createShadowCardLists);
