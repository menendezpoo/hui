import * as React from "react";
import * as ReactDOM from "react-dom";
import {ClickableProps} from "./Clickable";
import {Label} from "./Label";
import {Icon} from "./Icon";
import {KeyboardEvent, RefObject} from "react";
import {MenuOverlay} from "../overlays/MenuOverlay";
import {FocusStackHandler} from "../../handlers/FocusStackHandler";
import {ClickDismiss} from "../../handlers/ClickDismiss";
import {Rectangle} from "../../helpers/Rectangle";
import {Callable} from "../../declarations";
import {Simulate} from "react-dom/test-utils";

export interface ButtonProps extends ClickableProps{
    children?: React.ReactNode;
    onClick?: Callable;
}

export interface ButtonState {
    isDisabled?: boolean;
    dropDownVisible?: boolean;
}

export class Button extends React.Component<ButtonProps, ButtonState>{

    buttonRef: RefObject<HTMLDivElement>;

    private escapeKeyDismissId = 0;
    private clickDismissId = 0;

    constructor(props: ButtonProps){
        super(props);
        this.buttonRef = React.createRef();
        this.state = {};
        this.activate = this.activate.bind(this);
        this.showDropDown = this.showDropDown.bind(this);
        this.hideDropDown = this.hideDropDown.bind(this);
        this.keyDownHide = this.keyDownHide.bind(this);
        this.keyDownShow = this.keyDownShow.bind(this);
        this.keyDownActivate = this.keyDownActivate.bind(this);
    }

    activate(){
        if(this.state.isDisabled !== true && this.props.onClick) {
            this.props.onClick();
        }
    }

    keyPass(e: KeyboardEvent<HTMLDivElement>, call: Callable){
        if(e.key === 'Enter' || e.key === ' ') {
            if(this.state.isDisabled !== true) {
                e.stopPropagation();
                e.preventDefault();
                call();
            }
        }
    }

    keyDownHide(e: KeyboardEvent<HTMLDivElement>){
        this.keyPass(e, () => this.hideDropDown());
    }

    keyDownShow(e: KeyboardEvent<HTMLDivElement>){
        this.keyPass(e, () => this.showDropDown());
    }

    keyDownActivate(e: KeyboardEvent<HTMLDivElement>){
        this.keyPass(e, () => this.activate());
    }

    hideDropDown(){
        this.setState({dropDownVisible: false});

        // Unregister for ESC key
        FocusStackHandler.dismiss.unregister(this.escapeKeyDismissId);

        // Unregister from body click
        ClickDismiss.mouseup.unregister(this.clickDismissId);
    }

    showDropDown(){
        this.setState({dropDownVisible: true});

        // Register for hiding when ESC key is pressed
        this.escapeKeyDismissId = FocusStackHandler.dismiss.register(() => { this.hideDropDown(); });

        // Register for hiding when body is clicked
        this.clickDismissId = ClickDismiss.mouseup.register(() => this.hideDropDown());
    }

    render(){

        if(this.props.children) {
            if(this.state.dropDownVisible) {
                const rect = Rectangle.fromDOMRect(this.buttonRef.current?.getBoundingClientRect() || new DOMRect());
                return (
                    <div className={`ui-button-wrap`}>
                        <div tabIndex={0}
                             ref={this.buttonRef}
                             className={"ui-clickable ui-button is-open"}
                             onKeyDown={this.keyDownHide}
                             onClick={this.showDropDown}>
                            <Label {...this.props} />
                            <Icon name={"chevron-down"} size={8}/>
                        </div>
                        <MenuOverlay
                            top={rect.top + rect.height}
                            left={rect.left}
                            refRect={rect}
                            onDismissSignal={this.hideDropDown}>
                            {this.props.children}
                        </MenuOverlay>
                    </div>
                )
            }else{
                return (
                    <div tabIndex={0}
                         ref={this.buttonRef}
                         className={"ui-clickable ui-button"}
                         onClick={this.showDropDown}
                         onKeyDown={this.keyDownShow}>
                        <Label {...this.props} />
                        <Icon name={"chevron-down"} size={8}/>
                    </div>
                )
            }
        }else{
            return (
                <div tabIndex={0}
                     ref={this.buttonRef}
                     className={"ui-clickable ui-button"}
                     onClick={this.activate}
                     onKeyDown={this.keyDownActivate}>
                    <Label {...this.props} />
                </div>
            )
        }
    }
}