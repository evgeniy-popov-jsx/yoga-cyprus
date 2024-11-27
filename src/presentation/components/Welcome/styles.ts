import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 1712px;
  margin: 0 auto;
  padding: 150px 20px 30px 20px;
  gap: 8px;
  background-color: var(--text);

  @media (max-width: 1024px) {
    padding: 50px 20px 0px 20px;
  }
`;

const WelcomeContent = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    padding: 50px 20px 0px 20px;
  }
`;

const WelcomeImage = styled.div`
  position: relative;
  flex: 1;
  width: 40%;
  height: 100vh;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  inset: 0px;
  color: transparent;
  user-select: none;
  object-fit: cover;
`;

const H3 = styled.h3`
  max-width: 612px;
  margin-bottom: 98px;
  color: var(--bg);
  font-size: var(--xxl);
  font-weight: 700;

  @media (max-width: 1024px) {
    margin-bottom: 48px;
  }
  @media (max-width: 1024px) {
    font-size: var(--lg);
  }
`;

const P = styled.p`
  max-width: 773px;
  margin-bottom: 30px;
  color: var(--bg);
  font-size: var(--md);
  font-weight: 400;

  @media (max-width: 1440px) {
    font-size: var(--xs);
  }
  @media (max-width: 1024px) {
    font-size: var(--xxs);
  }
`;

export const Styled = {
  Container,
  WelcomeContent,
  WelcomeImage,
  Image,
  H3,
  P,
};
