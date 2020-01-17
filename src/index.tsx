import * as React from "react";
import * as ReactDOM from "react-dom";
import {Label} from "./components/Label";

// ReactDOM.render(
//     <Hello compiler="me" framework="world" />,
//     document.getElementById("example")
// );

ReactDOM.render(
    <Label text="Helo World"/>,
    document.getElementById('root')
);