import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 1712px;
  margin: 0 auto;
  padding: 150px 20px 30px 20px;
  gap: 40px;
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
  max-width: 800px;
  height: 600px;
  overflow: hidden;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
  color: transparent;
  user-select: none;
  object-fit: cover;
  transform: translate(-20px, -20px);
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
  max-width: 500px;
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
