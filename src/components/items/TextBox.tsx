import * as React from "react";
import {ChangeEvent, ReactNode} from "react";
import {Button} from "./Button";
import {RefObject} from "react";
import {SuggestionsOverlay} from "../overlays/SuggestionsOverlay";
import {Separator} from "./Separator";
import {Loader} from "./Loader";
import {LabelProps} from "./Label";
import {Callable} from "../../declarations";
import {Clickable} from "./Clickable";

export interface SuggestionsOptions {
    getSuggestions: (text: string) => Promise<Suggestion[]>;
    showLoader?: boolean;
    charsToTrigger?: number;
}

export interface Suggestion extends LabelProps{
    key: string;
    separator?: boolean;
    onClick?: Callable;
}

export interface TextBoxProps {
    defaultValue?: string;
    clearButton?: boolean | 'always';
    change?: (text: string) => void;
    placeholder?: string;
    suggestions?: (text: string) => Promise<Suggestion[]> | SuggestionsOptions;
}

interface TextBoxState{
    value: string;
    focused: boolean;
    suggestions?: Suggestion[];
    loadingSuggestions?: boolean;
    selectedSuggestion?: number;
}

export class TextBox extends React.Component<TextBoxProps, TextBoxState>{

    wRef: RefObject<HTMLDivElement>;
    tRef: RefObject<HTMLInputElement>;
    triggeredWhileLoading = false;

    constructor(props: TextBoxProps){
        super(props);
        this.tRef = React.createRef();
        this.wRef = React.createRef();

        this.state = {
            value: props.defaultValue || '',
            focused: false,
        };

        this.clear = this.clear.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    clear(){
        this.setState({value: ''});
        if(this.tRef.current){
            this.tRef.current.focus();
        }
    }

    getSuggestionsOptions(): SuggestionsOptions | undefined{

        if(!this.props.suggestions) {
            return;
        }

        if(typeof this.props.suggestions === 'function') {
            return {getSuggestions: this.props.suggestions as any}
        }else{
            return this.props.suggestions;
        }
    }

    handleChange(event: ChangeEvent<HTMLInputElement>){

        this.setState({
            value: event.target.value
        });

        if(this.props.change) {
            this.props.change(event.target.value);
        }

        // Load suggestions on next tick
        setTimeout(() => this.loadSuggestions());
    }

    handleKeyDown(e: React.KeyboardEvent){

        let stop = true;

        if(e.key === 'ArrowUp') {
            this.selectPreviousSuggestion();

        }else if(e.key === 'ArrowDown') {
            this.selectNextSuggestion()

        }else{
            stop = false;
        }

        if(stop) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    async loadSuggestions(){

        const opts = this.getSuggestionsOptions();

        if(
            !opts ||                                                    // No options
            !opts.getSuggestions ||                                     // Options, but no suggestions loader
            this.state.value.length < (opts.charsToTrigger || 3))       // Enough chars to start searching
        {
            this.triggeredWhileLoading = false;
            this.setState({loadingSuggestions: false, suggestions: undefined});
            return;
        }

        if(this.state.loadingSuggestions) {                             // Already loading, ignore
            this.triggeredWhileLoading = true;                          // Tag as triggeredWhileLoading
            return;
        }

        this.setState({loadingSuggestions: true});

        const pieces = await opts.getSuggestions(this.state.value);

        setTimeout(() => {this.setState({suggestions: pieces, loadingSuggestions: false});
            if(this.triggeredWhileLoading) {
                this.triggeredWhileLoading = false;
                setTimeout(() => this.loadSuggestions());
            }
        });
    }

    render(){

        const input = <input
            ref={this.tRef}
            placeholder={this.props.placeholder}
            type={`text`}
            value={this.state.value}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
        />;
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
        let suggestionOpts = this.getSuggestionsOptions();
        let suggestions = undefined;

        if(
            suggestionOpts &&                                                   // Has suggestions configured
            (this.state.loadingSuggestions || this.state.suggestions) &&        // Is Loading or has suggestions
            this.state.value.length >= (suggestionOpts.charsToTrigger || 3) &&  // Min chars reached
            this.wRef.current                                                   // There is a reference element
        ) {

            const contents = this.state.suggestions?.map(
                (sug, index) => {
                    return sug.separator === true ?
                        <Separator key={sug.key}/> :
                        <Clickable isSelected={this.state.selectedSuggestion === index} {...sug} />
                }
            );
            const loader = <Loader text={`Loading`}/>;

            suggestions = (
                <SuggestionsOverlay relativeElement={this.wRef.current}>
                    {contents}
                    {contents && this.state.loadingSuggestions ? <Separator/> : undefined}
                    {this.state.loadingSuggestions ? loader : undefined}
                </SuggestionsOverlay>
            );
        }

        if(clearButton !== false) {
            return (
                <div ref={this.wRef} className={`ui-textbox`}>
                    {input}
                    {clear}
                    {suggestions}
                </div>
            );
        }else{
            return (
                <div ref={this.wRef} className={`ui-textbox`}>
                    {input}
                    {suggestions}
                </div>
            );
        }
    }

    selectNextSuggestion(){
        const current = typeof this.state.selectedSuggestion === 'number' ? this.state.selectedSuggestion : -1;
        let next = current + 1;

        if(next) {
            // Is separator: jump one
        }

        if(next) {
            // is overflow, restrict to last one
        }

        console.log(`Next: ${next}`);
        this.setState({selectedSuggestion: next});
    }

    selectPreviousSuggestion(){

    }
}