import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  text-align: center;
`

const MainWrap = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

const Wrapper = styled.section`
  width: ${(props) => props.width};
  height: 80vh;
  padding: 2%;
  background-color: white;
  border-radius: 10px;
`

const FlexWrap = styled.div`
    display: flex;
    justify-content: space-between;
`

const MainImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;
`

export {Title, Wrapper, MainWrap, FlexWrap, MainImg}