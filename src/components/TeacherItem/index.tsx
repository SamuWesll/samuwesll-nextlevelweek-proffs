import React from 'react';

import './style.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/47816511?s=460&u=7b51046cf06cbf8ffee42546e04a10e71bee3e58&v=4" alt="Samuel Weslley" />
                <div>
                    <strong>Samuel Weslley</strong>
                    <span>Quimica</span>
                </div>
            </header>

            <p>
                Entusiasta das melhoresx tecnologias de quimica avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratorios e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;