import styled, { withTheme } from 'styled-components'



export const HeaderWrap = styled.div`
height: 75px;
width: calc(100vw - 130px);
align-items: center;
padding: 10px;
display: flex;
justify-content: space-between; 
color: ${(props) => (props.mode === "light" ? "black" : "white ")};
background-color: ${(props) => (props.mode === "light" ? "rgb(158, 177, 189)" : "#1B1C1C ")}; 
border-bottom: 2px solid rgb(131, 125, 125);
`;

export const ContentWrap = styled.div`

background-color: ${(props) => (props.mode === "light" ? "white" : "#1B1C1C ")};
    
.fav-list{
    height:  ${(props) => (props.mode === "light" ? "86vh" : "89vh")};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: 20px;
    overflow-y: scroll;

    .no-fav{
        color: ${(props) => (props.mode === "light" ? "black" : "white")};
        text-align: center;
        font-size: 17px;
        margin-top: 20px;
    }

    .fav-items{
        height: 18vh;
        width: 240px;
        display: grid;
        margin-left: 20px;
        margin-top: 20px;
        border-radius: 5px;
        box-shadow: 0px 0px 4px rgb(0 0 0 / 75%);
        background-color: ${(props) => (props.mode === "light" ? "rgb(201, 201, 201)" : "#505253")};  
        overflow-y: scroll;

        .fav-list-header{
            display: flex;
            justify-content: space-between;

            h4{
                margin: 10px 5px;
                font-size: 17px;
                text-shadow: 1px 1px 2px #000000;
                color: rgb(177, 3, 3);
            }

            .star {
                visibility:hidden;
                font-size:27px;
                cursor:pointer;
                margin-right: 10px;
                height: 30px;
                position: relative;
               
            }
            
        }

        .fav-item-cont{
            margin-left: 5px;
            font-size: 15px;
            color: rgb(76, 174, 2);
        }
        
        .fav-item-des{
            margin-left: 5px;
            font-size: 15px;
            color: ${(props) => (props.mode === "light" ? "black" : "white")};
            span{
                color: ${(props) => (props.mode === "light" ? "black" : "white")};
                font-weight: bold;
            }
        }
          
    }
    
    .fav-items::-webkit-scrollbar{
        display: none;
    }
}

.fav-list::-webkit-scrollbar{
    display: none;
}





`;