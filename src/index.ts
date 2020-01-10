import {ViewController} from "./controllers/ViewController";
import {View} from "./views/View";

export const main = function () {

    // Create test element
    const div = document.createElement('div');

    // Hello world!
    div.innerText = "Hello World!";

    // Creates a view controller
    const controller = new ViewController(new View(div));

    // Appends to body
    document.body.appendChild(controller.view.element);

};