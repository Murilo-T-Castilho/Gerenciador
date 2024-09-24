import React, { useContext, useState } from "react";
import { TemaContext } from "../../context/TemaContext";
import './styles.css'


const Home = () => {

    const tema = useContext(TemaContext)
    return (
        <div>
            <h2>O que é o site e como ela funciona</h2>
            <p>
                O “Gerenciador de Orçamento Pessoal” é uma aplicação web que permite aos usuários gerenciar sua renda e despesas mensais.
                Os usuários podem adicionar, editar e excluir entradas de renda e despesas, e o aplicativo exibirá um resumo do total de renda,
                total de despesas e o saldo restante.
            </p>
        </div>
    );
}

export default Home;