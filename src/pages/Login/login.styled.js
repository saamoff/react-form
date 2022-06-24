import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
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
  height: 50vh;
  padding: 2%;
  background-color: white;
  border-radius: 10px;
`

export {Title, Wrapper, MainWrap}