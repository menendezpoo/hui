import * as React from "react";
import {ClickableProps} from "./Clickable";
import {Label} from "./Label";
import {Icon} from "./Icon";
import {KeyboardEvent, RefObject} from "react";
import {MenuOverlay} from "../overlays/MenuOverlay";
import {FocusStackHandler} from "../../handlers/FocusStackHandler";
import {ClickDismiss} from "../../handlers/ClickDismiss";
import {Rectangle} from "../../helpers/Rectangle";
import {Callable} from "../../declarations";

export interface ButtonProps extends ClickableProps{
    children?: React.ReactNode;
    onClick?: Callable;
    split?: boolean;
    face?: "hover" | "always" | "never";
    classTag?: string;
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
        const rect = Rectangle.fromDOMRect(this.buttonRef.current?.getBoundingClientRect() || new DOMRect());
        const chevron = () => <Icon name={"chevron-down"} size={8}/>;
        const label = () => <Label {...this.props} />;
        const menu = () => (
            <MenuOverlay
                top={rect.top + rect.height}
                left={rect.left}
                refRect={rect}
                onDismissSignal={this.hideDropDown}>
                {this.props.children}
            </MenuOverlay>
        );
        const tags = `face-${this.props.face || 'hover'} ${this.props.classTag}`;
        if(this.props.children) {
            if(this.props.split) {
                if(this.state.dropDownVisible) {
                    return (
                        <div className={`ui-button-wrap split ${tags}`}>
                            <div tabIndex={0}
                                 ref={this.buttonRef}
                                 className={"ui-clickable ui-button is-open"}
                                 onClick={this.activate}>
                                {label()}
                            </div>
                            <div tabIndex={0}
                                 className={`ui-clickable ui-button split-part`}
                                 onClick={this.showDropDown}
                                 onKeyDown={this.keyDownShow}>
                                {chevron()}
                                {menu()}
                            </div>
                        </div>
                    )
                }else{
                    return (
                        <div className={`ui-button-wrap split ${tags}`}>
                            <div tabIndex={0}
                                 ref={this.buttonRef}
                                 className={"ui-clickable ui-button"}
                                 onClick={this.activate}>
                                {label()}
                            </div>
                            <div tabIndex={0}
                                 className={`ui-clickable ui-button split-part`}
                                 onClick={this.showDropDown}
                                 onKeyDown={this.keyDownShow}>
                                {chevron()}
                            </div>
                        </div>
                    )
                }

            }else if(this.state.dropDownVisible) {
                return (
                    <div className={`ui-button-wrap`}>
                        <div tabIndex={0}
                             ref={this.buttonRef}
                             className={`ui-clickable ui-button is-open ${tags}`}
                             onKeyDown={this.keyDownHide}
                             onClick={this.showDropDown}>
                            {label()}
                            {chevron()}
                        </div>
                        {menu()}
                    </div>
                )
            }else{
                return (
                    <div className={`ui-button-wrap`}>
                        <div tabIndex={0}
                             ref={this.buttonRef}
                             className={`ui-clickable ui-button ${tags}`}
                             onClick={this.showDropDown}
                             onKeyDown={this.keyDownShow}>
                            {label()}
                            {chevron()}
                        </div>
                    </div>
                )
            }
        }else{
            return (
                <div tabIndex={0}
                     ref={this.buttonRef}
                     className={`ui-clickable ui-button ${tags}`}
                     onClick={this.activate}
                     onKeyDown={this.keyDownActivate}>
                    {label()}
                </div>
            )
        }
    }
}