function setupRadioSwitch(primaryId, secondaryId) {
  const primary = document.getElementById(primaryId);
  const secondaryDivs = document.querySelectorAll(`#${secondaryId} div`);

  if (!primary) return;

  primary.addEventListener("click", function (e) {
    if (e.target.matches('input[type="radio"]')) {
      const radios = Array.from(
        primary.querySelectorAll('input[type="radio"]'),
      );
      const index = radios.indexOf(e.target);

      secondaryDivs.forEach((div) => {
        div.style.display = "none";
      });

      if (secondaryDivs[index]) {
        secondaryDivs[index].style.display = "block";
      }
    }
  });
}

setupRadioSwitch("primary", "secondary");
setupRadioSwitch("primary2", "secondary2");
setupRadioSwitch("primary3", "secondary3");
setupRadioSwitch("primary4", "secondary4");
