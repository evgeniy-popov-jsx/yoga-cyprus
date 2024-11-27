import { Styled } from './styles';

export const Schedule = () => {
  return (
    <Styled.Container id={'schedule'} data-section>
      <Styled.Inner>
        <Styled.Info>
          <Styled.Header>Our Schedule</Styled.Header>
          <Styled.Desc>
            <Styled.P>Want to practice?</Styled.P>
            <Styled.P>
              Hit “Book a Spot” and send us a WhatsApp message.{' '}
            </Styled.P>
            <Styled.P> Or call directly +35799304534</Styled.P>
          </Styled.Desc>
        </Styled.Info>
        <Styled.Schedule>
          <Styled.Day>
            <Styled.Title>Sunday</Styled.Title>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>
                Vedic Chanting Meditation
              </Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>9:15</Styled.ScheduleStart>
                <Styled.ScheduleTime>40 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Ashtanga Yoga Led</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>10:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>90 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
          </Styled.Day>
          <Styled.Day>
            <Styled.Title>Tuesday</Styled.Title>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Mysore Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>7:45</Styled.ScheduleStart>
                <Styled.ScheduleTime>2 h 30 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Yoga Therapy</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>8:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>45 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Gentle Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>9:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>45 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
          </Styled.Day>
          <Styled.Day>
            <Styled.Title>Wednesday</Styled.Title>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Ashtanga Yoga Led</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>8:45</Styled.ScheduleStart>
                <Styled.ScheduleTime>80 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
          </Styled.Day>
          <Styled.Day>
            <Styled.Title>Thursday</Styled.Title>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Mysore Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>7:45</Styled.ScheduleStart>
                <Styled.ScheduleTime>2 h 30 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Yoga Therapy</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>8:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>45 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Gentle Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>9:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>45 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
          </Styled.Day>
          <Styled.Day>
            <Styled.Title>Friday</Styled.Title>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Gentle Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>8:45</Styled.ScheduleStart>
                <Styled.ScheduleTime>1 h</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer>
              <Styled.ScheduleName>Yoga Practice Intro</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>10:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>20 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
          </Styled.Day>
          <Styled.Day></Styled.Day>
        </Styled.Schedule>
      </Styled.Inner>
    </Styled.Container>
  );
};
