import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Paragrafo2 = styled(P)`
  margin-top: 24px;
  margin-bottom: 25px;
`
export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.cordefundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corprincipal};
  cursor: pointer;
  margin-left: 10px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`

export const Links = styled.div`
  display: inline-block;
  padding: 0 10px 10px 10px;
`
