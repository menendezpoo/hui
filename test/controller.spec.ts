
import 'mocha';
import {assert} from 'chai';
import {ViewController} from "../src/controllers/ViewController";
import {View} from "../src/views/View";

describe('Controller', () => {

    it('Should contain a view', function () {

        const e = document.createElement('div');

        const controller = new ViewController(new View(e));

        assert.equal(controller.view.element, e);

    })

});