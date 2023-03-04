const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    question.forEach((a) => {
      a.style.fontWeight = "400";
    });
    question[i].style.fontWeight = "700";
    answer.forEach((a) => {
      a.classList.remove("active");
    });
    answer[i].classList.toggle("active");
  });
}

/* for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    answer.forEach((a) => {
      a.style.display = "none";
    });
    answer[i].style.display = "block";
  });
}
 */
