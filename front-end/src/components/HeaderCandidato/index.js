import React from 'react';
import {AreaHeader} from './styled'
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import VagaIcon from '@mui/icons-material/EmojiPeople';
import SairIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';



function Header(props) {

    return (
        <AreaHeader> 
            <div className="container">
            <MenuIcon/>
                <div className="logo">
                    <img src="../../../logo.png" alt="logo" />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/"><HomeIcon/>Início</Link></li>
                        <li><Link to="/Vagas"><VagaIcon/> Minhas Vagas</Link></li>
                        <li><Link to="/logout"><SairIcon/>Sair</Link></li>
                    </ul>

                    <div className='avatar'>
                        <label>{props.user.name} </label>
                    </div>
                </nav>
            </div>
        </AreaHeader>
    )
}

export default Header;