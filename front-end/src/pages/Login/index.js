import React from 'react';
import { AreaLogin } from './styled';
import { BrowserRouter } from 'react-router-dom';

import { BtnDefaultIcons, BtnDefault } from '../../components/Styled';
import GoogleIcon from '@mui/icons-material/Google';

import Api from '../../Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onReceiveGoogle }) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googlelogar();

        if (result) {
            onReceiveGoogle(result.user);
        } else {
            alert('Erro ao fazer login');
        }
    }
    return (

        <BrowserRouter>

            <AreaLogin>

                <h1> Faça Login em sua conta</h1>

                <BtnDefaultIcons onClick={actionLoginGoogle}>

                    <GoogleIcon />
                    <div className='center'>
                        <label> Fazer login com o Google </label>
                    </div>
                </BtnDefaultIcons>

                <p>ou</p>

                <form>

                    <div className='form-input'>
                        <label>E-mail: </label>
                        <input type='email' />
                    </div>

                    <div className='form-input'>
                        <label>Senha: </label>
                        <input type='password' />
                    </div>

                    <BtnDefault >Entrar</BtnDefault>

                    {/* <div className="FooterLogin">
                        Não tem uma conta?
                        <Link to="/registrar"> Registre-se</Link>
                    </div> */}
                </form>
            </AreaLogin>
        </BrowserRouter>

    );
}
