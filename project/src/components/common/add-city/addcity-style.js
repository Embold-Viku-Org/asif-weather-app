import styled from "styled-components";

export const AddCityWrap = styled.div`

    height: 400px;
    width: 400px; 
    background-color: ${(props) => (props.mode === "light" ? "white" : "#292929  ")};
    border-radius: 10px;
    color: ${(props) => (props.mode === "light" ? "black" : "white")};

    .add-city-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        background: ${(props) => (props.mode === "light" ? "orange" : "gray")};
        height: 50px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }  

    .addcity-input{
        border: 2px solid rgb(169, 162, 162);
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;

        input{
            height: 35px;
            width: 70%;
            border: 1px solid rgb(218, 213, 213);
            font-size: 15px;
            border-radius: 5px;
            background-color: ${(props) => (props.mode === "light" ? "white" : "#252525 ")};
            color: ${(props) => (props.mode === "light" ? "black" : "white")};

            &:hover{
                border: 2px solid rgb(54, 162, 224);
                transition-duration: 0.3s;
            }
        }

    }

    .cities-list{
        height: 275px;
        padding: 10px;
        justify-content: center;
        overflow-y: scroll;

        ul li{
            list-style: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px;
            border: 1px solid rgb(183, 178, 178);
            height: 50px;
            width: 95%;
            margin: 5px auto;
            font-weight: bold;
            border-radius: 5px;
        }

        ul li button{
            font-size: 20px;
            height: 30px;
            width: 25px;
        }
    }
    
    .cities-list::-webkit-scrollbar {
        display: none;
    }


`;