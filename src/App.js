import React, { Component } from "react";
import Hello from "./Component/Hello";
import Form from "./Component/Form";

class App extends Component {

    constructor(props) {
        super();


    }

    render() {
        return 
            <Form></Form>
        
    }

}

/*
constructor() {
    super();
    this.obj = {
        name: "Ram",
        age: 20,
    };
}

render() {
    return (
        <div>
            <Hello obj={this.obj}></Hello>

        </div>
    );
}


}

*/

/*
import Form from "./Component/Form";

const App = () => {
    return (
        <div> 
            <div></div>
          <Form></Form>
            </div>
    );

};
*/

export default App;



