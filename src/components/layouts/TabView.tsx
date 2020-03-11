import * as React from "react";
import {ToolbarView, ToolbarViewProps} from "./ToolbarView";
import {ReactNode} from "react";

export interface TabViewProps extends ToolbarViewProps{
    tabs?: ReactNode;
}

export class TabView extends React.Component<TabViewProps>{
    render(){

        /*HERE:! IMPLEMENTING THIS*/

        return (
            <ToolbarView
                {...this.props}

                itemsCenter={this.props.tabs}
            >
                {this.props.children}
            </ToolbarView>
        );
    }
}