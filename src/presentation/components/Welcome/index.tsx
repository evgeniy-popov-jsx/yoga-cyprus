import { Styled } from './styles';

export const Welcome = () => {
  return (
    <Styled.Container>
      <Styled.WelcomeContent>
        <Styled.H3>Welcome to our cozy yoga hub!</Styled.H3>
        <Styled.P>
          With 15+ years experience of mentoring yogis of all levels and ages,
          we landed in Cyprus to nurture local community with practices that
          strengthen the body, calm the mind, and uplift the spirit. At Yoga
          Shala we are following the principles of yoga teaching tradition by
          Sharath Jois, a legendary yoga master and director at Yoga Institute
          in Mysore, India.
        </Styled.P>
        <Styled.P>Join us to embark on a transformative journey.</Styled.P>
      </Styled.WelcomeContent>
      <Styled.WelcomeImage>
        <Styled.Image src={'/welcome.png'} />
      </Styled.WelcomeImage>
    </Styled.Container>
  );
};
