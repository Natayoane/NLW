import React , {Component} from "react";
export default class Label extends Component {

    render(){

        return (
            <>
            <label> {this.props.nome} </label>
            <h3> {this.props.idade}</h3>
            </>
        )
    }
}