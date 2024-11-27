import styled from 'styled-components';

const Container = styled.section`
  max-width: 1712px;
  margin: 0 auto;
  padding: 100px 20px;
  color: var(--bg);
  min-height: 100vh;
`;
const Header = styled.div`
  font-size: var(--xxl);
  font-weight: 700px;
  margin-bottom: 120px;
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  padding: 10px 0;
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--md);
  font-weight: 700px;
`;

const Answer = styled.div`
  min-width: 200px;
  max-width: 700px;
  font-size: var(--xxs);
  font-weight: 500;
  margin-left: 50px;
`;

const Icon = styled.div<{ $isOpen: boolean }>`
  transform: rotate(${(props) => (props.$isOpen ? '0deg' : '-90deg')});
  transition: transform 0.3s ease;
  margin-right: 10px;
  color: var(--bg);
`;

const Link = styled.a``;

export const Styled = {
  Container,
  Header,
  Items,
  Item,
  Question,
  Answer,
  Icon,
  Link,
};
