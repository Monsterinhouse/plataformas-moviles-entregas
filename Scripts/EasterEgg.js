const easterEgg =
  "kaz";

const validKeys = [
  "k","a","z"
];

let currInput = "";

const checkEasterEgg = (ev) => {
  if (!validKeys.includes(ev.key)) return;
  currInput += (ev.key);

  if (currInput.includes(easterEgg)) {
    alert("Andas de curioso/a?");
    container.innerHTML +=
      "<div id='eeg'><iframe src='https://www.youtube.com/embed/cikFpGwIS6U?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><div>";
  }

  if (currInput.length >= easterEgg.length * 5) {
    currInput = "";
  }
};