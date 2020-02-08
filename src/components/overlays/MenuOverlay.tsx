import * as React from "react";
import {OverlayProps} from "./Overlay";
import {MenuItem, MenuItemProps} from "../items/MenuItem";
import {RefObject} from "react";
import {Rectangle} from "../../helpers/Rectangle";
import {Callable} from "../../declarations";

export interface MenuOverlayProps extends OverlayProps{
    refRect: Rectangle;
    onDismissSignal: Callable;
}

export interface MenuOverlayState{
    openItem?: number;
}

export class MenuOverlay extends React.Component<MenuOverlayProps, MenuOverlayState>{

    overlayRef: RefObject<HTMLDivElement> | undefined;

    constructor(props: MenuOverlayProps){
        super(props);
        this.overlayRef = React.createRef();
        this.state = {};
        this.setOpenItem = this.setOpenItem.bind(this);
    }

    correctPosition(){
        if(!(this.overlayRef && this.overlayRef.current)) {
            return;
        }

        const rect = Rectangle.fromDOMRect(this.overlayRef.current.getBoundingClientRect());
        const view = {width: window.innerWidth, height: window.innerHeight};
        const refRect = this.props.refRect;
        let newr = rect.clone();

        if(rect.right > view.width) {
            newr = newr.withRight(refRect.left);
        }

        if(rect.bottom > view.height) {
            newr = newr.withBottom(view.height);
        }

        if(!newr.equals(rect)) {
            this.overlayRef.current.style.left = newr.left + 'px';
            this.overlayRef.current.style.top  = newr.top  + 'px';
        }
    }

    setNoOpenItem(){
        this.setState({openItem: undefined});
    }

    setOpenItem(index: number){
        this.setState({openItem: index});
    }

    render(){
        const st = {
            top: this.props.top + 'px',
            left: this.props.left + 'px',
            width: `auto`,
            height: `auto`,
        };

        if("number" === typeof this.props.height) {
            st.height = this.props.height + 'px';
        }

        if("number" === typeof this.props.width) {
            st.width = this.props.width + 'px';
        }

        setTimeout(() => {
            this.correctPosition();
        });

        return <div ref={this.overlayRef} className={`ui-overlay ui-menu-overlay`} style={st}>
            {React.Children.map(this.props.children, (menuItem: React.ReactElement<MenuItemProps>, index) => {
                return React.cloneElement(menuItem, {
                    onOpen: () => this.setOpenItem(index),
                    onClose: () => this.setNoOpenItem(),
                    onDismissSignal: () => this.sendDismissSignal(),
                    isOpen: index === this.state.openItem
                });
            })}
        </div>;
    }

    sendDismissSignal(){
        if(this.props.onDismissSignal) {
            this.props.onDismissSignal();
        }
    }
}