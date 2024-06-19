import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  .part-of-speech{
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    i{
      font-weight: 500;
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.GRAY_700};
    }

    hr{
      width: 100%;
      height: 1px;
      background-color: ${({theme}) => theme.COLORS.GRAY_400};
    }

  } 

  ul {
  list-style: none;
  padding-left: 0;
  margin: 24px 0;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 10px;

    }

    li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }

    li::before {
      background-color: ${({theme}) => theme.COLORS.PURPLE};
    }
  }

  .synonyms{
    margin-top: 25px;
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.GRAY_700};

    span{
      color: ${({theme}) => theme.COLORS.PURPLE};
    }
  }

  .verbs {
    p{
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_400};
      margin-bottom: 10px;
    }

    .synonyms{
      margin-top: 25px;
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.GRAY_700};

      span{
        color: ${({theme}) => theme.COLORS.PURPLE};
      }
    }
  }

`