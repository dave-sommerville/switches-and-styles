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
  statusText.textContent = toggle.checked ? "CIRCLE" : "SQUARE";
	if(toggle.checked) {
		targetShape.classList.add('circle');
	} else {
		targetShape.classList.remove('circle');
	}
});



slider.addEventListener("input", () => {
  targetShape.style.width = `${500 * (slider.value / 100)}px`; 
	targetShape.style.height = `${500 * (slider.value / 100)}px`; 
  sliderValue.textContent = slider.value;  
});
