'use strict';
/*-------------------------------------------------->
UTILITY FUNCTIONS
*optional
- Very handy for shortening functions
- Once you're used to them, they're hard to live without

<---------------------------------------------------*/

function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}

/*-------------------------------------------------->
ELEMENT DECLARATIONS
- These are the HTML elements linked to the js document
- The utility function keeps area organized and pretty
- The utility function was not working with the radioButtons
	element, I believe because of the [name="option"] portion

<---------------------------------------------------*/

const targetShape = select('.target-shape');
const toggle = select("#toggle");
const slider = select(".slider");
const sliderValue = select(".slider-value");
const radioButtons = document.querySelectorAll('input[name="option"]');

/*--------------------------------------------------->
EVENT OBSERVER - TOGGLE CONTROL
- Any time there is a change in the Toggle button JS runs this function
- This will add or remove the circle class accordingly 
	(established in CSS utils)

<---------------------------------------------------*/

listen("change", toggle, () => {
	if(toggle.checked) {
		targetShape.classList.add('circle');
	} else {
		targetShape.classList.remove('circle');
	}
});

/*-------------------------------------------------->
EVENT OBSERVER - RADIO CONTROL
- Recently learned (Thanks mr. GPT)
- The listen util function is applied anytime one of 
	the radio buttons is selected 
- switch case (But NEVER switch(true)!)
- The strings become the value for the CSS property
- The previously established Roots are quite handy

<---------------------------------------------------*/

radioButtons.forEach((radio) => {
  listen("change", radio, () => {
    switch (radio.value) {
      case "1":
        targetShape.style.backgroundColor = "var(--clr-blue)";
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

/*-------------------------------------------------->
EVENT OBSERVER - SLIDER CONTROL
- Basic HTML element
- Stylized with CSS to improve the UI
- Any movement along the slider will be counted as value
- The calculation is used to maintain a reasonable sizing
- The numerical display could make more sense - may fix later

<---------------------------------------------------*/

slider.addEventListener("input", () => {
  targetShape.style.width = `${500 * (slider.value / 100)}px`; 
	targetShape.style.height = `${500 * (slider.value / 100)}px`; 
  sliderValue.textContent = slider.value;  
});
