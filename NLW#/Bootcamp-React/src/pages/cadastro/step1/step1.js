import React, { Component } from 'react';
import NavBar from '../../components/NavBar';

export default class Step1 extends Component {

    constructor(props) {
        super(props); 
            this.state = {
                date: '',
                cpf: 0,
                agree: 'off',
            }
    }

    handChange = (event) => {
        console.log(event.target.value);

        const state = Object.assign({}, this.state);

        let field = event.target.id;

        state[field] = event.target.value;

       this.setState(state);

    }

    render() {
        return (
            <div className="mainNoColor geral">

                <NavBar />

                <section id="formSection">

                    <div className="header">
                        <p>Você está em
                        Página inicial/Abertura de conta</p>
                        <p className="bold">Dados pessoais</p>
                    </div>

                    <div className="formContainer">
                        <form action="./step2.html">
                            <label className="cursorP" htmlFor="name">Nome</label>
                            <input onChange = {(e) => this.handChange(e)} id="name" type="text" placeholder="Roberto Silva" />
                            <label className="cursorP" htmlFor="date">Data de nascimento</label>
                            <input onChange = {(e)=> this.handChange(e)} id="date" type="text" placeholder="11/06/1993" />
                            <label className="cursorP" htmlFor="cpf">CPF</label>
                            <input onChange = {(e)=> this.handChange(e)} id="cpf" type="text" placeholder="444.444.444-90" />
                            <div>
                                <input onChange={(e)=> this.handChange(e)} id="agree" type="checkbox" />
                                <label className="cursorP" htmlFor="agree">Li e concordo com os termos.</label>
                                <button className="btnBlue itensHovered" type="submit" href="#">Continuar</button>
                            </div>
                        </form>
                    </div>

                </section>

                <section id="infoContainer">
                    <p>Primeiro precisamos te conhecer.</p>
                    <p className="boldBlue">Vamos lá?</p>
                </section>

            </div>
        );
    }
}