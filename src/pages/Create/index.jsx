import { Container, Form, Main} from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'

export function CreateMovies() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">
              <FiArrowLeft />
              Voltar
            </a>

            <p>Novo Filme</p>
          </header>

          <Main>
            <div>
              <Input placeholder="Título"/>
              <Input placeholder="Sua nota(de 0 a 5)"/>
            </div>

            <Textarea placeholder="Observações"/>
          </Main>

          <Section title="Marcadores">
            <div className='marcadores'>
              <MovieItem value="React"/>
              <MovieItem isNew placeholder="Novo marcador"/>
            </div>
          </Section>
          
          <div className="buttons">
            <Button value="Excluir filme"/>
            <Button isSaved value="Salvar alterações"/>
          </div>

        </Form>
      </main>
    </Container>
  )
}
