import styled from "styled-components";


const InputStyle = styled.input`
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    border: 2px solid #AAAAAA;
    border-radius: 4px;
    height: 36px;
    padding: 4px;
    width: ${(props) => props.width};
    margin: 0 0 52px 0;
`

const LabelStyle = styled.label`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #767676;
`

const InputWrap = styled.div`
    margin-top: 5%;
`

export {InputStyle, LabelStyle, InputWrap}