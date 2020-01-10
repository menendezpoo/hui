define("views/View", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class View {
        constructor(element) {
            this.element = element;
            element.classList.add('this-is-a-view');
        }
    }
    exports.View = View;
});
define("controllers/ViewController", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ViewController {
        constructor(view) {
            this.view = view;
        }
    }
    exports.ViewController = ViewController;
});
define("index", ["require", "exports", "controllers/ViewController", "views/View"], function (require, exports, ViewController_1, View_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.main = function () {
        const div = document.createElement('div');
        div.innerText = "Hello World!";
        const controller = new ViewController_1.ViewController(new View_1.View(div));
        document.body.appendChild(controller.view.element);
    };
});
