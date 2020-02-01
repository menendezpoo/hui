import * as React from "react";
import {ReactNode} from "react";

export interface ToolbarProps{
    orientation?: "vertical" | "horizontal";
    items: ReactNode;
}

export const Toolbar = (props: ToolbarProps) => {
    return <div className={"toolbar"}>
        {props.items}
    </div>;
};