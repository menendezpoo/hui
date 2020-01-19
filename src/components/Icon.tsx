import * as React from "react";

export type IconSize = 8 | 16 | 32;

export interface IconProps{
    name: string;
    size?: IconSize;
}

export const Icon = (props: IconProps) => {
    return <div className={"hui-icon size-" + (props.size || 16)} />
};