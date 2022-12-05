import styled from "styled-components";


export const SiderWrapper= styled.div`

    background-color: ${(props) => (props.mode === "light" ? "rgb(102, 5, 182)" : "#252525")}; 
    width: 150px;
    height: 100vh;
    color: rgb(171, 131, 188);

    a{
        text-decoration: none;
    }

    .sider-content{
        font-size: 23px;
        text-align: center;
        padding: 10px;

        &:hover{
            cursor: pointer;
            transition-duration: 0.5s;
        }
    }

    .theme{
        height: 50px;
        width: 115px;
        text-align: center;
        position: absolute;
        bottom: 0px;
        padding: 5px;
        color: black;
        font-size: 20px; 
        font-weight: bold;

        &:hover{
            cursor: pointer;
            transition-duration: 0.3s;
            color: white;
            
        }
    }
`;