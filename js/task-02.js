// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// 	после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement()

const ingredientsElements = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
	const createTag = document.createElement("li");
	createTag.textContent = el;

	return createTag;
});
console.log(ingredients);

ingredientsElements.append(...elements);
