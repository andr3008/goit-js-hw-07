// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector("#validation-input");

const length = inputEl.getAttribute("data-length");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur() {
	if (inputEl.value.length == length) {
		inputEl.classList.remove("invalid");
		inputEl.classList.add("valid");
	} else {
		inputEl.classList.remove("valid");
		inputEl.classList.add("invalid");
	}
}
