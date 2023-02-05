import { Container, Form, Section} from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

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

          <Section>
            <div>
              <Input placeholder="Título"/>
              <Input placeholder="Sua nota(de 0 a 5)"/>
            </div>

            <Textarea placeholder="Observações"/>
        </Section>
        </Form>

      </main>
    </Container>
  )
}
