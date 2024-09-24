import React, { useState } from "react";
import './styles.css'
import euzinho from "../sobre/Eu mesmo.jpg"

const Sobre = () => {

    return (
        <div>
            <h1>Sobre Mim</h1>
            <br />
            <img src={euzinho} alt="eu" />
            <br />
            <ol>
                <li>
                    Nome: Murilo Thomaz Castilho
                </li>
                <br />
                <li>
                    Profissão: Estudante e <s>vagabundo</s> recem empregado
                </li>
                <br />
                <li>
                    Biografia: Sou nativo de Curiba e me mudei para Cascavel em 2008, tenho morado aqui desde então. Moro com meus pais,
                    minha irmã e meus cachorros. Estudo engenharia de software na FAG e estou no 6 período. Pretendo me mudar para Ponta
                    Grossa no começo do próximo ano com o objetivo de trabalhar na área em uma empresa de desenvolvimento de softwars de
                    controle e gestão de serviços de vigiliância, a IRISecurity.
                </li>
                <br />
                <li>
                    Link GitHub: <a href="https://github.com/Murilo-T-Castilho">O GitHub do homi</a>
                </li>
            </ol>
        </div>
    )
}

export default Sobre;