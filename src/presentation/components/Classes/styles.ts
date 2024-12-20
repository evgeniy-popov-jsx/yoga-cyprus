import styled from 'styled-components';

const Container = styled.section`
  max-width: 1712px;
  margin: 0 auto;
  padding: 110px 20px 110px 20px;
`;

const Header = styled.div`
  margin-bottom: 40px;
  font-size: var(--xxl);
  font-weight: 700;
  color: var(--bg);
`;

const Classes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
const Class = styled.div`
  flex: 1;
  min-width: 650px;

  @media (max-width: 1440px) {
    min-width: 500px;
  }
  @media (max-width: 600px) {
    min-width: 290px;
  }
`;

const Title = styled.div`
  font-size: var(--lg);
  font-weight: 700;
  color: var(--bg);
`;
const Desc = styled.div`
  font-size: var(--md);
  color: var(--bg);
  width: 500px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Styled = {
  Container,
  Header,
  Classes,
  Class,
  Title,
  Desc,
};
