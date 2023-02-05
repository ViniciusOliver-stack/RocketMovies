import { Container, Profile } from './styles'

import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquise pelo título" />

      <Profile>
        <div>
          <p>Vinicius Santos</p>
          <a href="#">Sair</a>
        </div>

        <img
          src="https://avatars.githubusercontent.com/u/81930401?v=4"
          alt="Imagem de perfil"
        />
      </Profile>
    </Container>
  )
}
