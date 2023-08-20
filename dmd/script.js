var optionCount = 1;

function addOption() {
  optionCount++;

  var optionsContainer = document.getElementById("options-container");

  var inputContainer = document.createElement("div");
  inputContainer.className = "input-container";

  var label = document.createElement("label");
  label.htmlFor = "option" + optionCount;
  label.textContent = "選択肢:";

  var input = document.createElement("input");
  input.type = "text";
  input.className = "option-input";
  input.required = true;

  var removeButton = document.createElement("button");
  removeButton.className = "remove-button";
  removeButton.textContent = "×";
  removeButton.onclick = function () {
    removeOption(removeButton);
  };

  inputContainer.appendChild(label);
  inputContainer.appendChild(input);
  inputContainer.appendChild(removeButton);

  optionsContainer.appendChild(inputContainer);
}

function removeOption(button) {
  var inputContainer = button.parentNode;
  inputContainer.parentNode.removeChild(inputContainer);
}

function makeDecision() {
  var options = [];

  var optionInputs = document.getElementsByClassName("option-input");
  for (var i = 0; i < optionInputs.length; i++) {
    var option = optionInputs[i].value.trim();
    if (option !== "") {
      options.push(option);
    }
  }

  if (options.length < 2) {
    alert("少なくとも2つの選択肢を入力してください。");
    return;
  }

  var randomIndex = Math.floor(Math.random() * options.length);
  var result = options[randomIndex];

  var resultContainer = document.getElementsByClassName("result-container")[0];
  var resultText = document.getElementById("result");

  resultText.innerHTML = result;
  resultContainer.style.display = "block";
}

function useResult() {
  var result = document.getElementById("result").innerHTML;

  // You can perform further actions with the result here
  console.log("User used the result: " + result);
}
