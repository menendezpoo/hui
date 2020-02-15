import * as React from "react";
import {ChangeEvent} from "react";
import {Button} from "./Button";

export interface TextBoxProps {
    defaultValue?: string;
    clearButton?: boolean | 'always';
    change?: (text: string) => void;
    placeholder?: string;
}

interface TextBoxState{
    value: string;
    focused: boolean;
}

export class TextBox extends React.Component<TextBoxProps, TextBoxState>{

    constructor(props: TextBoxProps){
        super(props);

        this.state = {
            value: props.defaultValue || '',
            focused: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({value: event.target.value});
        if(this.props.change) {
            this.props.change(event.target.value);
        }
    }

    render(){

        const input = <input type={`text`} defaultValue={this.props.defaultValue} onChange={this.handleChange}/>;
        const clearOn = this.props.clearButton === 'always' || ( this.props.clearButton === true && !!this.state.value);
        const clear = <Button icon={clearOn ? `cross` : `empty`} classTag={`clear`} face={`never`} iconSize={8}/>;

        if(this.props.clearButton !== false) {
            return (
                <div className={`ui-textbox`} placeholder={this.props.placeholder}>
                    {input}
                    {clear}
                </div>
            );
        }else{
            return (
                <div className={`ui-textbox`} placeholder={this.props.placeholder}>
                    {input}
                </div>
            );
        }
    }
}