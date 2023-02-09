import { Container } from './styles'

export function Button({icon: Icon, value, isSaved, ...rest}){
  return(
    <Container isSaved={isSaved}>

      {Icon && <Icon size={20}/>}

      <button 
        type='button'
        {...rest}
        >
          {value}
      </button>
    </Container>
  )
}