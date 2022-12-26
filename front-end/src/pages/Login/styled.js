import styled from 'styled-components';

export const AreaLogin = styled.div`
    background-color: #fff;
    padding: 10px;
    max-width: 300px;
    margin: auto;
    margin-top:80px;
    text-align: center;
    border-radius:2px;
    box-shadow: 0px 0px 10px #00008b;
    

    h1{
        font-size: 24px;
        font-weight: bold;
    }

    .form-input{
        text-align: left;

        label{
            display: block;
            font-weight: bold;
        }

        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:houver{
                border: 2px solid #00008b;
            }
                .FooterLogin{
                    font-size:13px;

                a{
                    font-weight: bold;
                    cursor: pointer;
                    
                    &:houver{
                        color: #00008b;
                }
        }

        }

    }
`;

export const AreaMeio = styled.h1`
background-color: #fff;
max-width: 400px;
margin: auto;
margin-top:250px;
.logo{
    flex:1;
    img{
        position:absolute;
        left:515px;
        top:-15px;
        width:300px;
    }
`;