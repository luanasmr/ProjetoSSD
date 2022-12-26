import styled from 'styled-components';

export const BtnDefaultIcons = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline:none;
    font-size: 16px;
    font=weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    box-shadow: 0px 0px 1px #008000;


    &:hover{
        background-color:#ccc;
    }

    .center{
        text-align: center;
        width:100%;  
    }
`;

export const BtnDefault = styled(BtnDefaultIcons)`
    background-color: #00008b;
    color: #fff;
    display: inline;



    &:hover{
        // background-color:#fff;
    }
`;