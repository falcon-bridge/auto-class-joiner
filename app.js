const form = document.querySelector("form");

const openLink = (link, index) => {
  window.open(`${link}?authuser=${index}`, "_blank");
};

const openCode = (code, index) => {
  window.open(`http://meet.google.com/${code}?authuser=${index}`, "_blank");
};

const proceed = (participant, proceedFn, meetInfo, noOfUsers) => {
  if (participant === "Rishabh") {
    for (let i = 1; i <= noOfUsers + 1; i++) {
      if (i !== 2) {
        proceedFn(meetInfo, i);
      }
    }
  } else if (participant === "Aayush") {
    for (let i = 2; i <= noOfUsers + 1; i++) {
      proceedFn(meetInfo, i);
    }
  } else {
    for (let i = 1; i <= noOfUsers; i++) {
      proceedFn(meetInfo, i);
    }
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const participant = document.getElementById("participant").value;
  const option = document.getElementById("option").value;
  const meetInfo = document.getElementById("meetInfo").value;
  const noOfUsers = +document.getElementById("noOfUsers").value;

  if (option === "link") {
    proceed(participant, openLink, meetInfo, noOfUsers);
  } else {
    proceed(participant, openCode, meetInfo, noOfUsers);
  }
});
