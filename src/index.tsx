import * as React from "react";
import * as ReactDOM from "react-dom";
import {Panel} from "./components/Panel";
import './css/styles.css';
import './css/index.scss';
import {Button} from "./components/items/Button";
import {Clickable} from "./components/items/Clickable";
import {Label} from "./components/items/Label";
import {MenuItem} from "./components/items/MenuItem";

ReactDOM.render(
    <Panel>

        <Button icon={"file"} iconSize={16} text={`I have items`}>
            <MenuItem text={`Hello`}/>
            <MenuItem text={`World`}/>
            <MenuItem text={`Here I am`}/>
        </Button>
        <Button icon={"file"} iconSize={32}>
            <MenuItem text={`Hello`}/>
            <MenuItem text={`World`}/>
            <MenuItem text={`Here I am`}/>
        </Button>
        <Button icon={"file"} iconSize={32}/>
        <Button text={`Im just a button`}/>
        <Clickable icon={"floppy"}/>
        <Clickable text={"Click me"} description={"Right here"}/>
        <Clickable text={"Click me"} description={"Right here"} icon={"floppy"} iconSize={32}/>
        <Label text="Hello World"/>
        <Label text="Hello World" description="With Hello Description"/>
        <Label text="Hello World 16" icon="floppy"/>
        <Label text="Hello World 16" description="With Hello Description" icon="file"/>
        <Label text="Hello World 32" icon="folder" iconSize={32}/>
        <Label text="Hello World 32" description="With Hello Description" icon="floppy" iconSize={32}/>
    </Panel>,
    document.getElementById('root')
);