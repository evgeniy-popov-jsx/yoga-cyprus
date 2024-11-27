import styled from 'styled-components';

const Container = styled.section`
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
`;
const Inner = styled.div`
  max-width: 1712px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const Header = styled.div`
  font-size: var(--xxl);
  font-weight: 700;
`;

const SubHeader = styled.div`
  margin-bottom: 155px;
  font-size: var(--md);
  font-weight: 400;

  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

const Offline = styled.div`
  font-size: var(--lg);
  font-weight: 700;
  margin-bottom: 130px;
`;

const Online = styled.div`
  font-size: var(--lg);
  font-weight: 700;
`;

const Title = styled.div`
  font-size: var(--font-size-medium);
  font-weight: 700;
  margin-bottom: 38px;
`;

const Cards = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1625px) {
    flex-direction: column;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    padding-left: 0px;
  }
`;

const Card = styled.div<{ $background?: boolean }>`
  width: 605px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  align-content: center;
  flex: 1;
  font-size: 32px;
  font-weight: 400;
  padding: 28px;
  border: ${({ $background }) => ($background ? '' : '1px solid var(--text)')};
  border-radius: 10px;
  background: ${({ $background }) => ($background ? 'var(--accent)' : '')};

  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 560px) {
    width: 320px;
  }
  @media (max-width: 420px) {
    width: 240px;
  }
`;

const Price = styled.div<{ $main?: boolean; $margin?: number }>`
  display: flex;
  justify-content: space-between;
  flex: 1;
  font-size: ${({ $main }) => ($main ? 'var(--sm)' : 'var(--xss)')};
  margin-bottom: ${({ $margin }) => ($margin ? $margin : 0)}px;

  @media (max-width: 1440px) {
    font-size: ${({ $main }) => ($main ? 'var(--sm)' : 'var(--xss)')};
  }

  @media (max-width: 450px) {
    margin-bottom: ${({ $margin }) => ($margin ? 20 : 0)}px;
  }
`;

const ServiceName = styled.div`
  font-size: var(--md);
  margin-right: 20px;
`;

const Cost = styled.div`
  font-size: var(--md);
  align-content: center;
`;

export const Styled = {
  Container,
  Inner,
  Header,
  SubHeader,
  Offline,
  Online,
  Title,
  Cards,
  Card,
  Price,
  ServiceName,
  Cost,
};
