import styled from "styled-components";


const MainButton = styled.button`
    font-size: 36px;
    height: 177px;
    width: 269px;
    color: white;
    cursor: pointer;
    background-color: #0DBDBD;
    border-radius: 10px;
    border: 0;
    transition: 200ms;
    :hover {
        background-color: #91eded
    }
`

const ButtonWrap = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30%;
`

export {MainButton, ButtonWrap}