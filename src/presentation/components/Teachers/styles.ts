import styled from 'styled-components';

const Container = styled.section`
  background: var(--accent);
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: 1712px;
  margin: 0 auto;
  padding: 100px 20px;
  color: var(--text);
`;

const Header = styled.div`
  font-size: var(--xxl);
  font-weight: 700;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    font-size: var(--lg);
  }
`;

const Bio = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 150px;

  @media (max-width: 1440px) {
    flex-wrap: wrap;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 841px;
  max-width: 841px;
  height: 841px;

  @media (max-width: 1440px) {
    min-width: 240px;
    height: 700px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  color: transparent;
  user-select: none;
  object-fit: cover;
`;

const Master = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Profile = styled.div``;

const Name = styled.div`
  font-size: var(--xxl);
  font-weight: 700;
  @media (max-width: 1024px) {
    font-size: var(--lg);
  }
`;

const Description = styled.div`
  font-size: var(--lg);
  font-weight: 400;

  @media (max-width: 1440px) {
    margin-bottom: 50px;
  }
`;
const Quote = styled.q`
  font-size: var(--xl);
  font-weight: 300;
`;
const History = styled.div`
  display: flex;
  gap: 70px;

  @media (max-width: 1440px) {
    flex-wrap: wrap;
    flex-flow: column-reverse;
  }
`;
const Texts = styled.div``;
const P = styled.p`
  margin: 0 0 20px 0;
  font-size: var(--md);
`;
const Hr = styled.hr`
  margin: 50px 0;
  border: 1px solid var(--text);
`;

export const Styled = {
  Container,
  Inner,
  Header,
  Bio,
  ImageContainer,
  Image,
  Master,
  Profile,
  Name,
  Description,
  Quote,
  History,
  Texts,
  P,
  Hr,
};
