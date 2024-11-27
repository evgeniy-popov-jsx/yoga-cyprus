import Insta from 'presentation/components/Footer/icons/instagram.svg?react';
import Telegram from 'presentation/components/Footer/icons/telegram.svg?react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1712px;
  margin: 0 auto;
  padding: 100px 20px;
  color: var(--bg);
  align-items: center;
`;

const Header = styled.div`
  font-size: var(--xxl);
  font-weight: 700;
`;
const Social = styled.div``;

const SocialLink = styled.a`
  cursor: pointer;
`;
const IconInstagram = styled(Insta)`
  width: 40px;
`;
const IconTelegram = styled(Telegram)`
  width: 40px;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Link = styled.a`
  display: block;
  width: 260px;
  padding: 15px 10px;
  color: var(--text);
  background-color: var(--accent);
  font-size: var(--xxs);
  border-radius: 8px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  @media (max-width: 1100px) {
    padding: 10px 5px;
  }

  &:hover {
    background-color: var(--bg);
  }
`;

export const Styled = {
  Container,
  Header,
  Social,
  IconInstagram,
  IconTelegram,
  Links,
  Link,
  SocialLink,
};
