const openTab = (link, index) => {
  window.open(`${link}?authuser=${index}`, "_blank");
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const link = document.getElementById("link").value;
  const noOfUsers = +document.getElementById("noOfUsers").value;

  event.preventDefault();
  console.log(link);
  for (let i = 1; i <= noOfUsers; i++) {
    openTab(link, i);
  }
});
