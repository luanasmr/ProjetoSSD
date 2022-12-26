import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    width: 100%;
    background-image: linear-gradient(to right, #fff, #00008b);
    color: #00008b;
    font-weight: bold;


    .container{
        padding: 2px 20px;
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
                margin-left: 20px;

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
                    margin-left: 20px;

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