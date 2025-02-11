const wrapper = document.querySelector(".review");
const stars = document.querySelectorAll(".fa-star");
const button = document.querySelector("button");
console.log(button.style);

const clearActive = () => {
  //remove active class from all stars
  stars.forEach((star) => {
    star.classList.remove("active");
  });
};

const addActive = (star, index) => {
  //add active class to current star
  star.classList.add("active");
  let count = index;

  //add active class to previous star from current start
  while (count > 0) {
    document.getElementById(`star-${count}`).classList.add("active");
    count--;
  }
};


//handle star ratings
stars.forEach((star, index) =>
  star.addEventListener("click", () => {
    clearActive();
    addActive(star, index);
  })
);


const modal = document.getElementById("thank-you-modal");
const closeModal = document.getElementById("close-modal");
const textarea = document.querySelector("textarea");

const onSubmit = () => {
  modal.classList.remove("hidden");
};

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");

  // Reset the stars to their default state
  clearActive();

  textarea.value = "";
});
