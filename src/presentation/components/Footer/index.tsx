import { Styled } from './styles';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Header>Let’s practice yoga together</Styled.Header>
      <Styled.Social>
        <Styled.SocialLink
          href={
            'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fyogashala.tala%2F&is_from_rle'
          }
          target='_blank'
        >
          <Styled.IconInstagram />
        </Styled.SocialLink>
        <Styled.SocialLink
          href={'https://t.me/yogashalaintala'}
          target='_blank'
        >
          <Styled.IconTelegram />
        </Styled.SocialLink>
      </Styled.Social>
      <Styled.Links>
        <Styled.Link href={'#schedule'}>jump to schedule</Styled.Link>
        <Styled.Link
          href={'https://api.whatsapp.com/send?phone=375291103054'}
          target='_blank'
        >
          contact shala
        </Styled.Link>
      </Styled.Links>
    </Styled.Container>
  );
};
