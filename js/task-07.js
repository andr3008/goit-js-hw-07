// Напиши скрипт, который реагирует на изменение значения
//  input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер
// текста.

const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.addEventListener("input", changeFontSize);
function changeFontSize() {
	text.style.fontSize = fontSize.value + "px";
}
