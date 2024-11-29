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
            <Styled.P>
              {' '}
              Or call directly{' '}
              <Styled.LinkNumber
                href={
                  'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Thank%20you!'
                }
                target='_blank'
              >
                +35799304534
              </Styled.LinkNumber>
            </Styled.P>
          </Styled.Desc>
        </Styled.Info>
        <Styled.Schedule>
          <Styled.Day>
            <Styled.Title>Sunday</Styled.Title>
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Sunday,%209:15%20%E2%80%94%20Vedic%20Chanting%20Meditation.%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.ScheduleName>
                Vedic Chanting Meditation
              </Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>9:15</Styled.ScheduleStart>
                <Styled.ScheduleTime>40 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Sunday,%2010:00%20%E2%80%94%20Ashtanga%20Yoga%20Led.%20Thank%20you!'
              }
              target='_blank'
            >
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
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Tuesday,%207:45%20%E2%80%94%20Mysore%20Yoga.%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.ScheduleName>Mysore Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>7:45</Styled.ScheduleStart>
                <Styled.ScheduleTime>2 h 30 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Tuesday,%208:00%20%E2%80%94%20Yoga%20Therapy%20(Online).%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.Online>Online</Styled.Online>
              <Styled.ScheduleName>Yoga Therapy</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>8:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>45 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Tuesday,%209:00%20%E2%80%94%20Gentle%20Yoga%20(Online).%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.Online>Online</Styled.Online>
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
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Wednesday,%208:45%20%E2%80%94%20Ashtanga%20Yoga%20Led.%20Thank%20you!'
              }
              target='_blank'
            >
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
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Thursday,%207:45%20%E2%80%94%20Mysore%20Yoga.%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.ScheduleName>Mysore Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>7:45</Styled.ScheduleStart>
                <Styled.ScheduleTime>2 h 30 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Thursday,%208:00%20%E2%80%94%20Yoga%20Therapy%20(Online).%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.Online>Online</Styled.Online>
              <Styled.ScheduleName>Yoga Therapy</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>8:00</Styled.ScheduleStart>
                <Styled.ScheduleTime>45 min</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Thursday,%209:00%20%E2%80%94%20Gentle%20Yoga%20(Online).%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.Online>Online</Styled.Online>
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
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Friday,%208:45%20%E2%80%94%20Gentle%20Yoga.%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.ScheduleName>Gentle Yoga</Styled.ScheduleName>
              <Styled.ScheduleBlock>
                <Styled.ScheduleStart>8:45</Styled.ScheduleStart>
                <Styled.ScheduleTime>1 h</Styled.ScheduleTime>
              </Styled.ScheduleBlock>
              <Styled.IconArrow></Styled.IconArrow>
            </Styled.ScheduleContainer>
            <Styled.ScheduleContainer
              href={
                'https://wa.me/35799304534?text=Hi%20I%20would%20like%20to%20book%20a%20class%20at%20Yoga%20Shala.%20Friday,%2010:00%20%E2%80%94%20Yoga%20Practice%20Intro%20(Online).%20Thank%20you!'
              }
              target='_blank'
            >
              <Styled.Online>Online</Styled.Online>
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
