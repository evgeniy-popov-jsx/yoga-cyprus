import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--text);
`;

const Preview = styled.div.attrs<{ $height: number }>((props) => ({
  style: {
    height: `${props.$height}px`,
  },
}))`
  display: flex;
  width: 100%;
  background-color: var(--bg);
`;

const ImageBlock = styled.div`
  position: relative;
  flex: 1;

  @media (max-width: 1200px) {
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

const PreviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 847px;
  padding: 20px 40px 130px 100px;

  @media (max-width: 775px) {
    padding: 20px 40px 130px 54px;
  }

  @media (max-width: 375px) {
    padding: 10px 15px 100px 15px;
  }
`;

const Logo = styled.div`
  position: relative;
  width: 194px;
  height: 262px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1560px) {
    gap: 20px;
  }
  @media (max-width: 1100px) {
    gap: 20px;
  }
`;

const H1 = styled.h1`
  margin: 0;
  line-height: 85px;
  color: var(--text);
  font-size: var(--xxl);
  font-weight: 700;

  @media (max-width: 505px) {
    line-height: 45px;
  }
`;
const H2 = styled.h2`
  margin: 0;
  color: var(--text);
  font-size: var(--xs);
  font-weight: 400;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 709px) {
    gap: 10px;
  }
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

  @media (max-width: 1100px) {
    padding: 10px 5px;
  }

  &:hover {
    background-color: var(--text);
  }
`;

export const Styled = {
  Container,
  Preview,
  ImageBlock,
  PreviewContent,
  Content,
  Image,
  Logo,
  H1,
  H2,
  Links,
  Link,
};
