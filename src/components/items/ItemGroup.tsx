import * as React from "react";

export class ItemGroup extends React.Component{

    render(){
        return (
            <div className={`ui-item-group`}>
                {this.props.children}
            </div>
        );
    }

}