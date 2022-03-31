const easterEgg =
  "monsterinhouse";

const validKeys = [
  "m","o","n","s","t","e","r","i","h","u"
];

let currInput = "";

const checkEasterEgg = (ev) => {
  if (!validKeys.includes(ev.key)) return;
  currInput += (ev.key);

  if (currInput === easterEgg) {
    alert("TODO HA CAMBIADO");
    container.innerHTML +=
      "<iframe src='https://www.youtube.com/embed/cikFpGwIS6U?autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  }

  if (currInput.length >= easterEgg.length) {
    currInput = "";
  }
};