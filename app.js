const openTab = (link, index) => {
  window.open(`${link}?authuser=${index}`, "_blank");
};

const form = document.querySelector("form");
const inp = document.querySelector("input");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const link = inp.value;
  console.log(typeof link);
  console.log(link);
  for (let i = 1; i <= 5; i++) {
    openTab(link, i);
  }
  //   window.open("https://meet.google.com/jmf-tynd-ino?authuser=1", "_blank");
  //   window.open("https://meet.google.com/jmf-tynd-ino?authuser=2", "_blank");
  //   window.open("https://meet.google.com/jmf-tynd-ino?authuser=3", "_blank");
  //   window.open("https://meet.google.com/jmf-tynd-ino?authuser=4", "_blank");
  //   window.open("https://meet.google.com/jmf-tynd-ino?authuser=5", "_blank");
});
