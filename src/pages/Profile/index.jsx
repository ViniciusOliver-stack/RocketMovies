import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft/>
          Voltar
        </a>
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/viniciusoliver-stack.png" alt="Foto de perfil" />

          <label htmlFor="avatar">
            <FiCamera/>
            <input type="file" id='avatar'/>
          </label>
        </Avatar>

        <Input type="text" placeholder="Nome"  icon={FiUser}/>
        <Input type="email" placeholder="E-mail" icon={FiMail}/>

        <Input type="password" placeholder="Senha atual" icon={FiLock}/>
        <Input type="password" placeholder="Nova senha" icon={FiLock}/>

        <Button isSaved value="Salvar"/>
      </Form>
    </Container>
  )
}