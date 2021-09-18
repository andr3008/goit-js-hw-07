// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//     подставляет его текущее значение в span#name - output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const refs = {
	input: document.querySelector("#name-input"),
	nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
	refs.input.value === ""
		? (refs.nameLabel.innerHTML = "незнакомец")
		: (refs.nameLabel.textContent = event.currentTarget.value);
}
