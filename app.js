const openTab = (link, index) => {
  window.open(`${link}?authuser=${index}`, "_blank");
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const link = document.getElementById("link").value;
  const noOfUsers = +document.getElementById("noOfUsers").value;
  const participant = document.querySelector("select").value;

  event.preventDefault();
  if (participant === "Rishabh") {
    for (let i = 1; i <= noOfUsers + 1; i++) {
      if (i !== 2) {
        openTab(link, i);
      }
    }
  } else {
    for (let i = 1; i <= noOfUsers; i++) {
      openTab(link, i);
    }
  }
});
