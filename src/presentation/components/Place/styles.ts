import styled from 'styled-components';

const Container = styled.section`
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: 1712px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const Header = styled.div`
  margin-bottom: 40px;
  font-size: var(--xxl);
  font-weight: 700;
`;

const Content = styled.div`
  display: flex;
  gap: 42px;
  @media (max-width: 1440px) {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  color: transparent;
  user-select: none;
  object-fit: cover;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 440px;

  @media (max-width: 1440px) {
    max-width: 100%;
  }
`;

const Texts = styled.div``;

const P = styled.p`
  font-size: var(--md);
  margin: 0 0 35px 0;
`;

const Link = styled.a`
  display: block;
  width: 260px;
  padding: 15px 10px;
  color: var(--bg);
  background-color: var(--accent);
  font-size: var(--xxs);
  border-radius: 8px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: var(--text);
  }
`;

export const Styled = {
  Container,
  Inner,
  Header,
  Content,
  ImageContainer,
  Image,
  Description,
  Texts,
  P,
  Link,
};
