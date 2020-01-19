import * as React from "react";
// TODO: Here I am

export type IconSize = 16 | 32;

export interface IconProps{
    name: string;
    size?: IconSize;
}

export const Icon = (props: IconProps) => {
    return <div className={"hui-icon size-" + (props.size || 16)} />
};