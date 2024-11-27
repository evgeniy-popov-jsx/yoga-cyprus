import { Styled } from './styles';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Header>Let’s practice yoga together</Styled.Header>
      <Styled.Social>
        <Styled.SocialLink href={''}>
          <Styled.IconInstagram />
        </Styled.SocialLink>
        <Styled.SocialLink href={''}>
          <Styled.IconTelegram />
        </Styled.SocialLink>
      </Styled.Social>
      <Styled.Links>
        <Styled.Link>jump to schedule</Styled.Link>
        <Styled.Link>contact shala</Styled.Link>
      </Styled.Links>
    </Styled.Container>
  );
};
