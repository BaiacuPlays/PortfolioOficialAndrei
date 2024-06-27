import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'
import React from 'react'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Olá, me chamo Andrei Bonattto, tenho 19 anos e sou um desenvolvedor
      frontend, atualmente apenas estudando e começando no mercado de trabalho.
      Para contato, o número é 54 99677-7615, e o e-mail é
      andreibonatto8@gmail.com.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=BaiacuPlays&show_icons=true&theme=dracula&include_all_commits=true&count_private=false"
        style={{ paddingRight: 65 }}
      />

      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=BaiacuPlays&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
