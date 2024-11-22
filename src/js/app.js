'use strict';

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}
const targetShape = select('.target-shape');
const toggle = select("#toggle");
const statusText = select(".status");
const slider = select(".slider");
const sliderValue = select(".slider-value");


listen("change", toggle, () => {
	if(toggle.checked) {
		targetShape.classList.add('circle');
	} else {
		targetShape.classList.remove('circle');
	}
});

const radioButtons = document.querySelectorAll('input[name="option"]');

/* Found with ChatGPT, but altered for my purposes */

radioButtons.forEach((radio) => {
  listen("change", radio, () => {
    // Change the targetShape color based on the selected radio button
    switch (radio.value) {
      case "1":
        targetShape.style.backgroundColor = "var(--clr-pink)";
        break;
      case "2":
        targetShape.style.backgroundColor = "var(--clr-orange)";
        break;
      case "3":
        targetShape.style.backgroundColor = "var(--clr-green)";
        break;
      default:
        targetShape.style.backgroundColor = "transparent"; 
    }
  });
});


slider.addEventListener("input", () => {
  targetShape.style.width = `${500 * (slider.value / 100)}px`; 
	targetShape.style.height = `${500 * (slider.value / 100)}px`; 
  sliderValue.textContent = slider.value;  
});
