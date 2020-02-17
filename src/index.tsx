import * as React from "react";
import * as ReactDOM from "react-dom";
import {Panel} from "./components/Panel";
import './css/styles.css';
import './css/theme.css';
import './css/index.scss';
import {Button} from "./components/items/Button";
import {Clickable} from "./components/items/Clickable";
import {Label} from "./components/items/Label";
import {MenuItem} from "./components/items/MenuItem";
import {TextBox} from "./components/items/TextBox";
import {Separator} from "./components/items/Separator";

ReactDOM.render(
    <Panel>
        <TextBox placeholder={`Box with clearButton`} clearButton={true} change={t => console.log(`value: ${t}`)} />
        <TextBox placeholder={`A text box`} change={t => console.log(`value: ${t}`)} />
        <Separator/>
        <Button icon={"file"} iconSize={16} text={`I have split items`} split={true} onClick={() =>alert("Click on the button side!")}>
            <MenuItem text={`Hello`}/>
            <MenuItem text={`World`} icon={`floppy`}/>
            <Separator/>
            <MenuItem text={`It's me`}/>
        </Button>
        <Button icon={"file"} iconSize={16} text={`I have items`}>
            <MenuItem text={`Hello`}/>
            <MenuItem text={`World`} icon={`floppy`}/>
            <Separator/>
            <MenuItem text={`Here I am`}>
                <MenuItem text={`This is a sub Item`} onActivate={() => console.log(`Activated!`)}/>
                <MenuItem text={`This as well`}>
                    <MenuItem text={`Well well well`}/>
                    <MenuItem text={`Little Maui is having trouble`}/>
                    <MenuItem text={`With his hook.`} onActivate={() => console.log(`Hook!`)}/>
                </MenuItem>
                <MenuItem text={`Here comes more`}>
                    <MenuItem text={`Well well well`}/>
                    <MenuItem text={`Little Maui is having trouble`}>
                        <MenuItem text={`You poor semi`}/>
                        <MenuItem text={`demi-mini god`}/>
                        <MenuItem text={`You don't swing like`}>
                            <MenuItem text={`You used to man`}/>
                            <MenuItem text={`You're welcome`}>
                                <MenuItem text={`Well well`}/>
                                <MenuItem text={`I see what's happening`}/>
                                <MenuItem text={`Yeah. You're face to face`}/>
                                <MenuItem text={`With Greatness and it's strange`}/>
                                <MenuItem text={`You don't even know how you`}/>
                                <MenuItem text={`Feel. It's adorable.`}>
                                    <MenuItem text={`Well it's nice to see`}/>
                                    <MenuItem text={`That humans never change.`}/>
                                    <MenuItem text={`Open your eyes, let's`}/>
                                    <MenuItem text={`Begin. Yes it's really me`}/>
                                    <MenuItem text={`It's Maui, breath it in.`}/>
                                </MenuItem>
                            </MenuItem>
                        </MenuItem>
                    </MenuItem>
                    <MenuItem text={`With his hook.`}/>
                </MenuItem>
                <MenuItem text={`And how about this one`}/>
            </MenuItem>
            <MenuItem text={`This is me`}/>
        </Button>
        <Button icon={"file"} iconSize={32}>
            <MenuItem text={`Hello`}/>
            <MenuItem text={`World`}/>
            <MenuItem text={`Here I am`}/>
        </Button>
        <Button icon={"file"} iconSize={32}/>
        <Button text={`Im just a button`} onClick={() => alert('Clickity')}/>
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