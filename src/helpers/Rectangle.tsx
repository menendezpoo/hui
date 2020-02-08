export class Rectangle{

    static get empty(): Rectangle{
        return new Rectangle(0, 0, 0, 0);
    }

    static fromDOMRect(r: DOMRect): Rectangle{
        return new Rectangle(r.left, r.top, r.width, r.height);
    }

    constructor(readonly left: number, readonly top:number, readonly width: number, readonly height: number){

    }

    clone(): Rectangle{
        return new Rectangle(this.left, this.top, this.width, this.height);
    }

    equals(r: Rectangle): boolean{
        return r.left === this.left &&
            r.top === this.top &&
            r.width === this.width &&
            r.height === this.height;
    }

    round(): Rectangle{
        return new Rectangle(
            Math.round(this.left),
            Math.round(this.top),
            Math.round(this.width),
            Math.round(this.height),
        );
    }

    toString(){
        return `(Rect: ${this.left}, ${this.top}, ${this.width}, ${this.height})`;
    }

    withBottom(bottom: number){
        return new Rectangle(this.left, bottom - this.height, this.width, this.height);
    }

    withHeight(height: number){
        return new Rectangle(this.left, this.top, this.width, height);
    }

    withLeft(left: number){
        return new Rectangle(left, this.top, this.width, this.height);
    }

    withRight(right: number){
        return new Rectangle(right - this.width, this.top, this.width, this.height);
    }

    withTop(top: number){
        return new Rectangle(this.left, top, this.width, this.height);
    }

    withWidth(width: number){
        return new Rectangle(this.left, this.top, width, this.height);
    }

    get right(): number{
        return this.left + this.width;
    }

    get bottom(): number{
        return this.top + this.height;
    }
}