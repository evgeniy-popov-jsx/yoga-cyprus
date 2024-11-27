import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1712px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 100px 20px 50px 20px;
  background-color: var(--text);
`;

const Header = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  color: var(--bg);
  font-size: var(--xxl);
  font-weight: 700;
`;

const Images = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media (max-width: 455px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: none;
  }
`;

const ImageContainer = styled.div<{ $grid: number }>`
  position: relative;

  ${({ $grid }) => {
    switch ($grid) {
      case 1:
        return `
          grid-area: 1 / 1 / 4 / 2;
        `;
      case 2:
        return `
          grid-area: 1 / 2 / 3 / 3;
        `;
      case 3:
        return `
          grid-area: 4 / 1 / 6 / 2;
        `;
      case 4:
        return `
          grid-area: 3 / 2 / 6 / 3;
        `;
      case 5:
        return `
          grid-area: 6 / 1 / 9 / 2;
        `;
      case 6:
        return `
          grid-area: 6 / 2 / 9 / 3;
        `;
      default:
        return `
          grid-area: auto;
        `;
    }
  }}
  @media (max-width: 455px) {
    ${({ $grid }) => {
      switch ($grid) {
        case 1:
          return `
          grid-area: auto; /* Автоматическая разметка в одноколоночной сетке */
        `;
        case 2:
          return `
          grid-area: auto;
        `;
        case 3:
          return `
          grid-area: auto;
        `;
        case 4:
          return `
          grid-area: auto;
        `;
        case 5:
          return `
          grid-area: auto;
        `;
        case 6:
          return `
          grid-area: auto;
        `;
        default:
          return `
          grid-area: auto;
        `;
      }
    }}
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  color: transparent;
  user-select: none;
  object-fit: cover;
`;

export const Styled = {
  Container,
  Header,
  Images,
  ImageContainer,
  Image,
};
