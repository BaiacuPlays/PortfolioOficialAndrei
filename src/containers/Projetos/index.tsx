import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import React from 'react'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          url="https://projeto-efood-beta.vercel.app"
          nome="Projeto Efood"
          descricao="Projeto de um site de restaurantes, contendo cardápios para cada um e sistema de carrinho."
        />
      </li>
      <li>
        <Projeto
          url="https://calculadora-basica-eta.vercel.app"
          nome="Calculadora Basica"
          descricao="Uma simples calculadora feita em HTML, CSS e JavaScript."
        />
      </li>
      <li>
        <Projeto
          url="https://gcs-jquery-galeria-fotos-nine.vercel.app"
          nome="Galeria de fotos"
          descricao="Uma galeria para salvar fotos usando o url delas."
        />
      </li>

      <li>
        <Projeto
          url="https://andrei-projeto-calculadora-medias.vercel.app"
          nome="Calculadora de Medias"
          descricao="Calculadora de médias ou notas escolares."
        />
      </li>
      <li>
        <Projeto
          url="https://responsive-results-summary-card.vercel.app"
          nome="Sumario de resultados responsivo"
          descricao="Um card basico com informações de resultado e responsive ao mobile"
        />
      </li>
      <li>
        <Projeto
          url="https://projeto-bento-grid.vercel.app"
          nome="Bento Grid"
          descricao="Website simples sem interações feito para treino de css e propriedades grid"
        />
      </li>
      <li>
        <Projeto
          url="https://agendadecontatos-pearl.vercel.app"
          nome="Agenda de tarefas"
          descricao="Um sistema para gerenciar tarefas contendo suas informações."
        />
      </li>
      <li>
        <Projeto
          url="https://projeto-player-musica.vercel.app"
          nome="Player de Musica"
          descricao="Um player de música que necessita de assets locais para funcionar"
        />
      </li>
      <li>
        <Projeto
          url="https://acordionfaq.vercel.app"
          nome="Faq acordeão"
          descricao="Sistema de faq em acordeão feito com html, css e javascript"
        />
      </li>
      <li>
        <Projeto
          url="https://projetosociallinks.vercel.app"
          nome="Card social links"
          descricao="Um cartão de apresentação simples com links para midias da pessoa"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
