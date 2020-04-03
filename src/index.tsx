import './css/styles.css';
import './css/theme.css';
import './css/index.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Button} from "./components/items/Button";
import {Clickable} from "./components/items/Clickable";
import {Label} from "./components/items/Label";
import {MenuItem} from "./components/items/MenuItem";
import {TextBox} from "./components/items/TextBox";
import {Separator} from "./components/items/Separator";
import {ItemGroup} from "./components/items/ItemGroup";
import {ToolbarView} from "./components/layouts/ToolbarView";
import {Panel} from "./components/layouts/Panel";
import {SplitView} from "./components/layouts/SplitView";
import {TabView} from "./components/layouts/TabView";
import {TreeView} from "./components/layouts/TreeView";
import {TreeItem} from "./components/items/TreeItem";

async function  withLatency<T>(r: T){
    return new Promise<T>(resolve => setTimeout(()=>resolve(r), 2000*Math.random()));
}

function _id(): string{
    return String(Math.round(Math.random() * 100000))  + '-' + String(Math.round(Math.random() * 1000000));
}

const thing = <SplitView sideView={(
    <TreeView>
        <TreeItem itemKey={_id()} icon={`file`} text={`Hello`}>
            <TreeItem itemKey={_id()} text={`Surprise item!`}/>
            <TreeItem itemKey={_id()} text={`Surprise item 2!`}/>
            <TreeItem itemKey={_id()} text={`Surprise item 3!`}>
                <TreeItem itemKey={_id()} text={`With more!`}/>
                <TreeItem itemKey={_id()} text={`And more!`} icon={`folder`}>
                    <TreeItem itemKey={_id()} text={`And a third level!`}/>
                </TreeItem>
            </TreeItem>
        </TreeItem>
        <TreeItem itemKey={_id()} text={`World`}>
            <TreeItem itemKey={_id()} text={`Some other item`} />
            <TreeItem itemKey={_id()} text={`Some other item as well`} />
            <TreeItem itemKey={_id()} text={`Some other item as well here`} />
        </TreeItem>
        <TreeItem itemKey={_id()} text={`Articles`}>
            <TreeItem itemKey={_id()} text={`Blog Posts`} />
            <TreeItem itemKey={_id()} text={`Catalog`} />
            <TreeItem itemKey={_id()} text={`Contact Us`} />
        </TreeItem>
        <TreeItem itemKey={_id()} text={`Im a single node`}/>
    </TreeView>
)}>
    <TabView
        tabs={[
            {key: `a`, text: `Hello`},
            {key: `b`, text: `World`},
        ]}
        selected={`a`}
    >
        <ToolbarView
            items={<>
                <Button icon={`file`} text={`New File`}/>
                <Button icon={`file`} text={`New File`}/>
                <Button icon={`file`} text={`New File`}/>
            </>}
            itemsFar={<>
                <Button text={`John Doe`}>
                    <MenuItem text={`Profile`}/>
                    <MenuItem text={`Settings`}/>
                    <Separator/>
                    <MenuItem text={`Log Out`}/>
                </Button>
            </>}
        >
            <Panel>
                <ItemGroup selectedIndex={0}>
                    <Button text={`Button A`}/>
                    <Button text={`Button B`}/>
                    <Button text={`Button C`}/>
                </ItemGroup>

                <ItemGroup selectedIndex={0}>
                    <Button text={`A`}/>
                    <Button text={`B`}/>
                    <Button text={`C`}/>
                </ItemGroup>
                <Separator />
                <TextBox
                    placeholder={`I have custom suggestions`}
                    suggestions={async t => withLatency(
                        "Hello World, This is me"
                            .split(",")
                            .map(a => ({key: a, text: t + ' - ' + a})))}
                    clearButton={true}
                />
                <TextBox placeholder={`I have suggestions`} clearButton={true} suggestions={async t => {
                    console.log(`searching ${t}`);
                    return withLatency([
                        {key:`a`, text: `${t} - Hello World`, description: `This is a description of the item`},
                        {key:`b`, text: `${t} - Here I am`, description: `This is a description of the item`},
                        {key:`c`, text: `${t} - This is me`, description: `This is a description of the item`},
                        {key:`d`, separator: true},
                        {key:`e`, text: `${t} - I came to this world`, description: `This is a description of the item`},
                        {key:`f`, text: `${t} - So wild and free`, description: `This is a description of the item`},
                    ]);
                }} />
                <TextBox placeholder={`I have ClearButton`} clearButton={true} change={t => console.log(`value: ${t}`)} />
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
            </Panel>
        </ToolbarView>
    </TabView>
</SplitView>;

ReactDOM.render(
    thing,
    document.getElementById('root')
);