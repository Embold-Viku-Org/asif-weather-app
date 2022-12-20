import styled from "styled-components";

export const CityPage = styled.div`

    background-color: ${(props) => (props.mode === "light" ? "white" : "#292929  ")};

    display: flex;

    .city-content{
        color:  ${(props) => (props.mode === "light" ? "black" : "white")};
        border: 2px solid rgb(237, 235, 235);
        height: 94vh;
        width: 30%;
        margin: 20px;
        box-shadow: 0px 0px 4px rgb(0 0 0 / 75%);

        .city-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;

            button{
                height: 30px;
                width: 30px;
            }
        }

        .city-init{
            padding: 10px;
            height: 90%;
            overflow-y: scroll;

            .city-selected{
                li{
                    list-style: none;
                    margin-top: 10px;
                    border: 1px solid rgb(195, 189, 189);
                    width: 100%;
                    height: 60px;
                    border-radius: 5px;
                    padding-left: 10px;
                    background-color: ${(props) => (props.mode === "light" ? "rgb(174, 217, 255)" : "gray")};   ;
                    color:  ${(props) => (props.mode === "light" ? "rgb(78, 75, 75)" : "white")}; 

                    &:hover{
                        background-color: ${(props) => (props.mode === "light" ? "rgb(206, 243, 97)" : "#B4B6B8 ")} ;
                        color: rgb(255, 255, 255);
                        cursor: pointer;
                        transition-duration: 0.3s;
                    }
                
                }
            }
        }
        
        .city-init::-webkit-scrollbar{
            display: none;
        }

        
    } 

    .city-desc{
        border: 2px solid rgb(237, 235, 235);
        height: 91vh;
        width: 60%;
        margin: 20px;
        box-shadow: 0px 0px 4px rgb(0 0 0 / 75%);

        .city-desc-header{
            color: ${(props) => (props.mode === "light" ? "black" : "white ")} ;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
        }

        input{
            margin-bottom: 30px;
        }

        .star {
            visibility:hidden;
            font-size:30px;
            cursor:pointer;
            
        }

        .city-desc-content{
            height: 90%;
            width: 100%;
            align-items: center;
            justify-content: center;
            display: flex;
            background-color: ${(props) => (props.mode === "light" ? "rgb(255, 221, 165)" : "#292929 ")} ; 

            .city-desc-content-inner{
                height: 35%;
                width: 40%;
                background-color: ${(props) => (props.mode === "light" ? "rgba(181, 209, 216,0.7)" : "gray")}  ;
                border-radius: 7px;
                text-align: center;

                #description{
                    margin-top: 20px;
                    font-size: 18px;
                    color:blueviolet;
                    font-weight: bold;
                }

                .inner-det span{
                    font-weight: bold;
                    color:  ${(props) => (props.mode === "light" ? "rgb(133, 189, 49)" : "white ")} ;   
                
                }
            }
        }

        @media screen and (max-height: 450px){
            .city-desc-content{
                display: block;
            }
            .city-desc-content-inner{
                margin: 0px auto;
            }
        
        }
        

        
    }

    @media screen and (max-width: 1550px){
        .city-desc{
            min-height: 94vh;
        }
    }

    @media screen and (max-width:730px){
        .city-desc-content-inner{
            min-height: 50%;
        }
        .city-desc{
            min-height: 94vh;
        }
    
    }

        
`;