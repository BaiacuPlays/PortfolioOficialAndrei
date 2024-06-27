import styled from 'styled-components'

export const Card = styled.div`
  position: relative;
  border: 2px solid ${(props) => props.theme.corborda};
  padding: 16px;
  border-radius: 10px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  background-color: ${(props) => props.theme.cordefundo};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
  }
`

export const LinkBotao = styled.a`
  color: ${(props) => props.theme.cordefundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corfundobotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 5px;
`
