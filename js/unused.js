// Add button to the Google map.
// Returns the div object for which a
// click event listener must be created.
function addButton(dispText,buttonTitle) {
	// Create the div for the button.
	var buttonDiv = document.createElement("div");
	var att = document.createAttribute("class");
	att.value = "controls";
	buttonDiv.setAttributeNode(att);
	// Set CSS for the button border.
	var buttonUI = document.createElement("div");
	buttonUI.style.backgroundColor = "#fff";
	buttonUI.style.border = "2px solid #fff";
	buttonUI.style.borderRadius = "3px";
	buttonUI.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
	buttonUI.style.cursor = "pointer";
	buttonUI.style.marginBottom = "22px";
	buttonUI.style.textAlign = "center";
	buttonUI.title = buttonTitle;
	buttonDiv.appendChild(buttonUI);
	// Set CSS for the button interior
	var buttonText = document.createElement("div");
	buttonText.style.color = "rgb(25,25,25)";
	buttonText.style.fontFamily = "Roboto,Arial,sans-serif";
	buttonText.style.fontSize = "16px";
	buttonText.style.lineHeight = "38px";
	buttonText.style.paddingLeft = "5px";
	buttonText.style.paddingRight = "5px";
	buttonText.innerHTML = dispText;
	buttonUI.appendChild(buttonText);
	// Register the button.
	// Set the index of the button div amongst
	// its siblings in the HTML DOM tree.
//	buttonDiv.index = 1;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(buttonDiv);
	// Return the div of the buttonUI so a click
	// event listener can be created for it.
	return buttonUI;
}