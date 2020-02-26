import * as React from "react";
import {ReactNode} from "react";
import {Rectangle} from "../../helpers/Rectangle";
import {ClickableProps} from "../items/Clickable";

export interface SuggestionsOverlayProps {
    relativeElement: HTMLElement;
    children?: ReactNode;
}

interface SuggestionsOverlayState{

}

export class SuggestionsOverlay extends React.Component<SuggestionsOverlayProps, SuggestionsOverlayState>{

    constructor(props: SuggestionsOverlayProps){
        super(props);

        this.state = {};
    }

    render(){
        const rect = Rectangle.fromDOMRect(this.props.relativeElement.getBoundingClientRect());

        const st = {
            top: rect.bottom + 'px',
            left: rect.left + 'px',
            width: `auto`,
            height: `auto`,
        };

        return (
            <div className={`ui-overlay ui-suggestions-overlay`} style={st}>
                {this.props.children}
            </div>
        );
    }
}