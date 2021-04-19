import React from 'react'; 
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/42386726?s=460&u=6e29adb407f86c95087b3a1acd2b99db3e56585e&v=4" alt="Natalia Tayoane" />

                        <div>
                            <strong>Natalia Tayoane</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sapien erat, viverra in iaculis sed,
                    ultricies vitae urna. Nulla elementum purus sit amet metus faucibus ultrices.
                    </p>

                    <footer>
                        <p>Preço por hora:</p>
                        <strong>R$ 40,00</strong>

                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;
