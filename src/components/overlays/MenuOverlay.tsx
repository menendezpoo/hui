import * as React from "react";
import {Overlay, OverlayProps} from "./Overlay";

export interface MenuOverlayProps extends OverlayProps{
}

export class MenuOverlay extends React.Component<MenuOverlayProps>{
    render(){
        const st = {
            top: this.props.top + 'px',
            left: this.props.left + 'px',
            width: `auto`,
            height: `auto`
        };

        if("number" === typeof this.props.height) {
            st.height = this.props.height + 'px';
        }

        if("number" === typeof this.props.width) {
            st.width = this.props.width + 'px';
        }

        return <div className={`ui-overlay ui-menu-overlay`} style={st}>
            {this.props.children}
        </div>;
    }
}