const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".arrow");

question.forEach((que, index) => {
  que.addEventListener("click", (e) => {
    const num = e.target;

    if (que.classList.contains("active")) {
      que.style.transition = ".4s ease";
      que.classList.remove("active");
      arrow.forEach((arr) => (arr.style.transform = "rotate(0deg)"));
      answer.forEach((a) => a.classList.remove("active"));
    } else {
      question.forEach((q) => {
        q.classList.remove("active");
      });
      que.classList.toggle("active");

      answer.forEach((a) => a.classList.remove("active"));
      answer[index].classList.toggle("active");

      arrow.forEach((arr) => (arr.style.transform = "rotate(0deg)"));
      arrow[index].style.transform = "rotate(180deg)";
    }
  });
});
