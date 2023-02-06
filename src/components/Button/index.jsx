import { Container } from './styles'

export function Button({value, isSaved, ...rest}){
  return(
    <Container isSaved={isSaved}>
      <button 
        type='button'
        {...rest}
        >
          {value}
      </button>
    </Container>
  )
}