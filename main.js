const allStories = [
  {
    thumbUrl: "https://xatimg.com/image/M48JcQNq7t4X.jpg",
    imageUrl: "https://xatimg.com/image/M48JcQNq7t4X.jpg",
    title: "Title No. 1",
  },

  {
    thumbUrl: "https://xatimg.com/image/CcTgwC5TtNSZ.jpg",
    imageUrl: "https://xatimg.com/image/CcTgwC5TtNSZ.jpg",
    title: "Title No. 2",
  },

  {
    thumbUrl: "https://xatimg.com/image/4HAdftStJmzh.jpg",
    imageUrl: "https://xatimg.com/image/4HAdftStJmzh.jpg",
    title: "Title No. 3",
  },

  {
    thumbUrl: "https://xatimg.com/image/J0pELz5jNujc.jpg",
    imageUrl: "https://xatimg.com/image/J0pELz5jNujc.jpg",
    title: "Title No. 4",
  },

];

const storiesContainer = document.querySelector(".stories-container");
const storyFull = document.querySelector(".story-full");
const storyFullImage = document.querySelector(".story-full img");
const storyFullTitle = document.querySelector(".story-full .title");
const closeBtn = document.querySelector(".story-full .close-btn");
const leftArrow = document.querySelector(".story-full .left-arrow");
const rightArrow = document.querySelector(".story-full .right-arrow");

let currentIndex = 0;
let timer;

allStories.forEach((s, i) => {
  const content = document.createElement("div");
  content.classList.add("content");

  const img = document.createElement("img");
  img.setAttribute("src", s.thumbUrl);

  storiesContainer.appendChild(content);
  content.appendChild(img);

  content.addEventListener("click", () => {
    currentIndex = i;
    storyFull.classList.add("active");
    storyFullImage.setAttribute("src", s.imageUrl);

    if (!s.title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = s.title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  });
});

closeBtn.addEventListener("click", () => {
  storyFull.classList.remove("active");
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }

    clearInterval(timer);
    timer = setInterval(nextStory, 5000);
  }
});

const nextStory = () => {
  if (currentIndex < allStories.length - 1) {
    currentIndex += 1;

    storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);

    if (!allStories[currentIndex].title) {
      storyFullTitle.style.display = "none";
    } else {
      storyFullTitle.style.display = "block";
      storyFullTitle.innerHTML = allStories[currentIndex].title;
    }
  }
};

rightArrow.addEventListener("click", () => {
  nextStory();
  clearInterval(timer);
  timer = setInterval(nextStory, 5000);
});
