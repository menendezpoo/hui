

export class View implements IView{
    constructor(readonly element: HTMLElement){
        element.classList.add('this-is-a-view')
    }
}