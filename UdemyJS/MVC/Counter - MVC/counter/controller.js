import Model from './model.js';
import View from './view.js';

const model = new Model()
const view = new View(model.counter)

view.elements.btnPlus.addEventListener('click', () => {
    model.increase();
    view.updateCounter(model.counter);
});

view.elements.btnMinus.addEventListener('click', () => {
    model.decrease();
    view.updateCounter(model.counter);
});

view.elements.btnReset.addEventListener('click', () => {
    model.reset();
    view.updateCounter(model.counter);
});