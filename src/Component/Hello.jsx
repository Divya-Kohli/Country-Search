import React, { Component } from "react";


class Hello extends Component {
    constructor(props) {
        super()
        console.log(props);
    }

    render() {
        return
        <div>
            Hello world
            {this.props.name}
            {this.props.obj.map(value => {
                return (
                    <Hello value={value.name} key={value.age}>
                        {value}
                    </Hello>
                );

            })}

        </div>
    }
}
export default Hello;

