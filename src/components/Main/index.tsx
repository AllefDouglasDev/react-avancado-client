import * as S from './styles'

export const Main = ({
  title = 'Next Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e 'React Avançado' escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor em frente para uma tela com código."
    />
  </S.Wrapper>
)