import * as React from "react";
import * as ReactDOM from "react-dom";
import {ClickableProps} from "./Clickable";
import {Label} from "./Label";
import {Icon} from "./Icon";
import {Ref, RefObject} from "react";
import {MenuOverlay} from "../overlays/MenuOverlay";

export interface ButtonProps extends ClickableProps{
    children?: React.ReactNode;
}

export interface ButtonState {
    dropDownVisible?: boolean
}

export class Button extends React.Component<ButtonProps, ButtonState>{

    buttonRef: RefObject<HTMLDivElement>;

    constructor(props: ButtonProps){
        super(props);
        this.buttonRef = React.createRef();
        this.state = {};
        this.showDropDown = this.showDropDown.bind(this);
    }

    showDropDown(){
        this.setState({dropDownVisible: true});
    }

    render(){

        if(this.props.children) {

            if(this.state.dropDownVisible) {
                const rect = this.buttonRef.current?.getBoundingClientRect() || new DOMRect();

                return <div className={`ui-button-wrap`}>
                    <div ref={this.buttonRef} className={"ui-clickable ui-button"} onClick={this.showDropDown}>
                        <Label {...this.props} />
                        <Icon name={"chevron-down"} size={8}/>
                    </div>
                    <MenuOverlay top={rect.top + rect.height} left={rect.left}>
                        {this.props.children}
                    </MenuOverlay>
                </div>;

            }else{
                return <div ref={this.buttonRef} className={"ui-clickable ui-button"} onClick={this.showDropDown}>
                    <Label {...this.props} />
                    <Icon name={"chevron-down"} size={8}/>
                </div>;
            }
        }else{
            return <div ref={this.buttonRef} className={"ui-clickable ui-button"}>
                <Label {...this.props} />
            </div>;
        }
    }
}