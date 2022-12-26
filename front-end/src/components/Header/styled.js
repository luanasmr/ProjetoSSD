import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 80px;
    width: 100%;
    background-image: linear-gradient(to right, #fff, #00008b);
    color: #00008b;
    font-weight: bold;


    .container{
        padding: 5px 2px;
        display: flex;
        align-items: center;

        .logo{
            flex: 1;

            img{
                width: 165px;
            }
        }


        nav{
            display: flex;

            ul{
                display: flex;
            }

            li{
                list-style: none;
                margin-left: 10px; 
                margin-top :20px;

                a{
                    text-decoration: none;
                    color: #fff;
                    display: flex;
                    align-items: center;

                    &:hover{
                        color: #ff0;
                    }
                }
            }
            .avatar{
                display: flex;
                align-items: center;

                label{
                    font-size:14px;
                    color: #fff;
                    margin-left: 50px;

                }

                @media screen and(max-width:600px){
                    label{
                        display: none;
                    }
                }
            }

        }
    }
`;