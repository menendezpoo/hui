import * as React from "react";
import {ChangeEvent} from "react";
import {Button} from "./Button";
import {RefObject} from "react";

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

    tRef: RefObject<HTMLInputElement>;

    constructor(props: TextBoxProps){
        super(props);
        this.tRef = React.createRef();
        this.state = {
            value: props.defaultValue || '',
            focused: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.clear = this.clear.bind(this);
    }

    clear(){
        this.setState({value: ''});
        if(this.tRef.current){
            this.tRef.current.focus();
        }
    }

    handleChange(event: ChangeEvent<HTMLInputElement>){
        this.setState({value: event.target.value});
        if(this.props.change) {
            this.props.change(event.target.value);
        }
    }

    render(){

        const input = <input ref={this.tRef} type={`text`} value={this.state.value} onChange={this.handleChange}/>;
        const clearButton = this.props.clearButton || false;
        const clearOn = clearButton === 'always' || (clearButton && !!this.state.value);
        const clear = <Button
            icon={clearOn ? `cross` : `empty`}
            classTag={`clear`}
            face={`never`}
            iconSize={8}
            onClick={this.clear}
            disabled={!clearOn}
        />;

        if(clearButton !== false) {
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