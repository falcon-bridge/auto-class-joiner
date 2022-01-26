const openTab = (link, index) => {
  window.open(`${link}?authuser=${index}`, "_blank");
};

const openCodeTab = (code, index) => {
  window.open(`http://meet.google.com/${code}?authuser=${index}`, "_blank");
};

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const link = document.getElementById("link").value;
  const noOfUsers = +document.getElementById("noOfUsers").value;
  const participant = document.querySelector("select").value;
  const code = document.getElementById("code").value;

  event.preventDefault();
  if (participant === "Rishabh") {
    for (let i = 1; i <= noOfUsers + 1; i++) {
      if (i !== 2) {
        if (link.trim.length !== 0) {
          openTab(link, i);
        } else {
          openCodeTab(code, i);
        }
      }
    }
  } else if (link.trim.length !== 0) {
    for (let i = 1; i <= noOfUsers; i++) {
      openTab(link, i);
    }
  } else {
    for (let i = 1; i <= noOfUsers; i++) {
      openCodeTab(code, i);
    }
  }
});
