import * as React from "react";
import * as ReactDOM from "react-dom";
import {Label} from "./components/Label";
import {Panel} from "./components/Panel";

ReactDOM.render(
    <Panel>
        <Label text="Hello World"/>
        <Label text="Hello World" description="With Hello Description"/>
        <Label text="Hello World 16" icon="hello"/>
        <Label text="Hello World 16" description="With Hello Description" icon="hello"/>
        <Label text="Hello World 32" description="With Hello Description" icon="hello" iconSize={32}/>
    </Panel>,
    document.getElementById('root')
);