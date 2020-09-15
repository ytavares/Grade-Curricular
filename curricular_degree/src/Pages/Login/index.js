import React from 'react';
import './styles.css'
import { GiNinjaHead } from "react-icons/gi";

export default function Login() {
    return (

        <div className="content">
            <div className="main-login">
                <GiNinjaHead size={100} />

                <form >
                    <div className="form-inputs">
                        <input
                            type="text"

                            placeholder="E-mail"

                        ></input>
                        <input
                            type="password"

                            placeholder="Senha"

                        ></input>
                    </div>
                    <button>ACESSAR</button>
                </form>
            </div>
        </div>

    )
}