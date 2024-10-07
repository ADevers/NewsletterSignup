const submit = document.querySelector(`.subscribe`);
const hiddenDiv = document.querySelector(`.hidden`);
const mainDiv = document.querySelector(`.main`);
const disButton = document.querySelector(`.dismiss`);

function changeDiv() {
    hiddenDiv.classList.add(`open`);
    mainDiv.classList.add(`close`);
}

function goBack() {
    hiddenDiv.classList.remove(`open`);
    mainDiv.classList.remove(`close`);
}

submit.addEventListener(`click`, changeDiv);
disButton.addEventListener(`click`, goBack);
