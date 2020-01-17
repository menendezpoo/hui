import * as React from "react";
import '../css/styles.css';

export interface LabelProps {
    text: string;
}

export const Label = (props: LabelProps) => <div className="label">{props.text}</div>;