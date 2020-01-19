import * as React from "react";
import '../css/styles.css';
import {Icon, IconSize} from "./Icon";

export interface LabelProps {
    text: string;
    icon?: string;
    iconSize?: IconSize;
    description?: string;
}

export const Label = (props: LabelProps) => {

    if(!props.icon && !props.description) {
        return <div className="hui-label">{props.text}</div>;

    }else if(!props.icon && props.description) {
        return <div className="hui-label">
            <div className="text">{props.text}</div>
            <div className="desc">{props.description}</div>
        </div>;

    }else if(props.icon){
        if(props.description) {
            return <div className="hui-label with-icon">
                <Icon name={props.icon} size={props.iconSize} />
                <div className="text-side">
                    <div className="text">{props.text}</div>
                    <div className="desc">{props.description}</div>
                </div>
            </div>
        }else{
            return <div className="hui-label with-icon">
                <Icon name={props.icon} size={props.iconSize} />
                <div className="text">{props.text}</div>
            </div>
        }
    }else{
        throw "Undesired state";
    }


};