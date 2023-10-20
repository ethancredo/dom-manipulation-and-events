const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const header3 = document.createElement("h3");
header3.style.color = "blue";
header3.textContent = "I'm a blue h3!";
container.appendChild(header3);

const divPink = document.createElement("div");
divPink.style.border = "1px solid black";
divPink.style.backgroundColor = "pink";
container.appendChild(divPink);

const header1 = document.createElement("h1");
header1.textContent = "I'm in a div!";
divPink.appendChild(header1);

const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";
divPink.appendChild(paragraph2);


const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//     alert("Hallo World!");
// });

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
// btn.addEventListener("click", alertFunction);

function alertFunction() {
    alert("YEHEY!");
}

btn.addEventListener("click", function(e) {
    e.target.style.background = "blue";
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    })
})