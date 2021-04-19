import React, { Component } from 'react';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div id="logo"></div>
                    <input type="text" placeholder="O que você está procurando" />
                    <div id="signin">
                        <a className="itensHovered" href="">Entrar</a>
                    </div>
                </nav>
            </div>
        );
    }
}