import * as React from "react";
import {Label, LabelProps} from "./Label";

export interface MenuItemProps  extends LabelProps{

}

export class MenuItem extends React.Component<MenuItemProps>{
    render(){
        return <div className={`ui-clickable ui-menuitem`}>
            <Label {...this.props} />
        </div>
    }
}