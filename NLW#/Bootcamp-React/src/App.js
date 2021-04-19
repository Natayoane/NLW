import React , {Component} from "react";
import Home from  './pages/home/home';
import Step1 from './pages/cadastro/step1/step1'

import './template/assets/css/normalize.css';
import './template/assets/css/style.css';
import './template/assets/css/template.css';
export default class App extends Component {
    render(){
        return <Step1/>
    }
}