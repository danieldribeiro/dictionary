import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    width: 24px;
    height: 24px;
  }

  select{
    border: none;
    text-align: center;
    padding: 0 10px;
    cursor: pointer;
  }

  svg {
    font-size: 20px;
    cursor: pointer;
  }
`