// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector("#validation-input");

const length = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	const inputText = event.target.value;
	inputText.length === length
		? addClass("valid", "invalid")
		: addClass("invalid", "valid");
}
const addClass = (valid, invalid) => {
	inputEl.classList.add(valid);
	inputEl.classList.remove(invalid);
};
