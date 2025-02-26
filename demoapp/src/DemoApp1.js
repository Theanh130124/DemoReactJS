import React from "react";

//CLASS COMPONENT


//render thì add vào trong index.js
class DemoApp1 extends React.Component {
    constructor(props){
        super(props)// ;luôn có super nó truyền props

        this.state = {
            "firstName":"TheAnh",
            "lastName":"Tran"
        }
    }

    changeFn = () => {
        this.setState({"firstName":"TheAnhDaThayDoi"})
    }

    changeLn = () => {
        this.setState({"lastName":"TranDaThayDoi"})
    }

    render()
    {
        return (
            <React.Fragment>
        <h1>WELCOME {this.props.firstName} {this.props.lastName} TO REACT JS</h1>
        <h2>2 ELEMENT PHẢI BỌC div hoặc React.Fragment</h2>
        <h4>State chào {this.state.firstName} {this.state.lastName}</h4>
        <input type="button" value="Change First Name" onClick={this.changeFn}></input>
        <input type="button" value="Change Last name" onClick={this.changeLn}></input>
        </React.Fragment>)
    }


}
export default DemoApp1;