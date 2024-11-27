import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  margin-top: 127px;
  padding-top: 10px;
  background-color: var(--text);
  z-index: 99;

  @media (max-width: 565px) {
    margin-top: 70px;
  }

  @media (max-width: 455px) {
    margin-top: 40px;
  }
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  gap: 115px;
  padding: 20px;
  border-top: 1px solid var(--bg);

  @media (max-width: 1024px) {
    gap: 40px;
  }
  @media (max-width: 768px) {
    gap: 30px;
  }
  @media (max-width: 565px) {
    gap: 8px;
  }
`;

const Link = styled.a`
  position: relative;
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: var(--sm);
  font-weight: 700;
  color: var(--bg);
  transition: color 0.3s ease;

  @media (max-width: 493px) {
    font-size: var(--tiny);
  }

  &:hover {
    color: var(--accent);
  }

  &.active {
    color: var(--accent);
  }
`;

export const Styled = {
  Container,
  Link,
  Menu,
};
