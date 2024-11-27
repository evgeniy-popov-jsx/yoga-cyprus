import styled from 'styled-components';
import Arrow from 'presentation/components/Schedule/arrow.svg?react';

const Container = styled.section`
  background-color: var(--accent);
  min-height: 100vh;
`;

const IconArrow = styled(Arrow)`
  width: 40px;
  fill: var(--text);
  transition: fill 0.3s ease;

  @media (max-width: 320px) {
    display: none;
  }
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1712px;
  margin: 0 auto;
  padding: 100px 20px;
  gap: 200px;

  @media (max-width: 1024px) {
    gap: 30px;
  }
`;

const Info = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const Header = styled.div`
  margin-right: 100px;
  color: var(--text);
  font-size: var(--xxl);
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: var(--lg);
  }
`;

const P = styled.p`
  margin: 0;
`;

const Desc = styled.div`
  margin-top: 30px;
  text-align: start;
  color: var(--text);
  font-size: var(--md);
  font-weight: 400;

  @media (max-width: 1440px) {
    font-size: var(--sm);
  }
  @media (max-width: 1024px) {
    margin-top: 0px;
  }
`;

const Schedule = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Day = styled.div`
  flex: 1;
  min-width: 500px;
  margin-bottom: 100px;

  @media (max-width: 1440px) {
    margin-bottom: 0px;
    min-width: 350px;
    margin-bottom: 20px;
  }

  @media (max-width: 535px) {
    min-width: 350px;
  }
  @media (max-width: 375px) {
    min-width: 250px;
  }
`;

const Title = styled.div`
  margin-bottom: 20px;
  color: var(--text);
  font-size: var(--lg);
  font-weight: 700;
`;
const Online = styled.div`
  position: absolute;
  top: -16px;
  left: 25px;
  background: var(--accent);
  padding: 0 5px;
  transition:
    opacity 0.3s ease,
    visibility 0s 0.24s;
  visibility: visible;
`;

const ScheduleContainer = styled.div`
  position: relative;
  display: flex;
  max-width: 605px;
  gap: 20px;
  padding: 8px 10px;
  margin-bottom: 35px;
  border: 1px solid var(--text);
  border-radius: 10px;
  align-items: center;
  color: var(--text);
  transition: background-color 0.3s ease;
  cursor: pointer;

  @media (max-width: 1440px) {
    padding: 8px 10px;
    max-width: 605px;
  }

  @media (max-width: 1069px) {
    max-width: 350px;
  }
  @media (max-width: 500px) {
    max-width: 350px;
  }

  &:hover {
    background-color: var(--text);
    color: var(--bg);

    ${IconArrow} {
      fill: var(--bg);
    }
    ${Online} {
      opacity: 0;
      visibility: hidden;
      transition:
        opacity 0.1s ease,
        visibility 0s;
    }
  }
`;

const ScheduleName = styled.div`
  font-size: var(--md);
  font-weight: 400;
  flex: 1;
  @media (max-width: 1440px) {
    font-size: var(--sm);
  }
`;

const ScheduleBlock = styled.div`
  width: 80px;
`;

const ScheduleStart = styled.div`
  font-size: var(--md);
  font-weight: 400;
`;

const ScheduleTime = styled.div`
  margin-top: -5px;
  font-size: var(--tiny);
  font-weight: 400;
`;

export const Styled = {
  Container,
  Inner,
  Info,
  Schedule,
  Header,
  Desc,
  P,
  Day,
  Title,
  ScheduleBlock,
  ScheduleName,
  ScheduleContainer,
  ScheduleStart,
  ScheduleTime,
  IconArrow,
  Online,
};
