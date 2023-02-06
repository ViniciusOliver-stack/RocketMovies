import { Container, Section } from './styles'
import { FiArrowLeft, FiStar, FiClock } from 'react-icons/fi'

import { Header } from '../../components/Header'

export function MoviePreview() {
  return (
    <Container>
      <Header />

      <main>
        <Section>
          <header>
            <a href="/">
              <FiArrowLeft />
              Voltar
            </a>

            <div className="rateMovie">
              <p>Interestellar</p>
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
            </div>

            <div className="rateUser">
              <div className="user">
                <img
                  src="https://avatars.githubusercontent.com/u/81930401?v=4"
                  alt="Imagem de perfil"
                />
                <p>Por Vinicius Santos</p>
              </div>

              <div className="date">
                <FiClock />
                <p>06/02/2023 às 08:00</p>
              </div>
            </div>
          </header>
        </Section>
      </main>
    </Container>
  )
}
