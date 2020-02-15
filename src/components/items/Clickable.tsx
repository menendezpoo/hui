import * as React from "react";
import {Label, LabelProps} from "./Label";

export interface ClickableProps extends LabelProps{
}

export const Clickable = (props: ClickableProps) => {
    return (
        <div className={"ui-clickable"}>
            <Label {...props} />
        </div>
    );
};