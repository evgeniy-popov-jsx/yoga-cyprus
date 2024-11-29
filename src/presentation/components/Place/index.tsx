import { Styled } from './styles';

export const Place = () => {
  return (
    <Styled.Container id={'place'}>
      <Styled.Inner>
        <Styled.Header>Visit our place</Styled.Header>
        <Styled.Content>
          <Styled.ImageContainer>
            <Styled.Image src={'/place.png'} />
          </Styled.ImageContainer>
          <Styled.Description>
            <Styled.Texts>
              <Styled.P>
                Yoga Shala in Tala offers a serene space surrounded by
                breathtaking views where every session invites you to find
                balance and harmony in a nurturing yoga school environment.
              </Styled.P>
              <Styled.P>
                Free car parking alongside streets near Tala village central
                square.
              </Styled.P>
            </Styled.Texts>
            <Styled.Link
              href={
                'https://www.google.com/maps/place/Yoga+Shala+in+Tala/@34.8356136,32.4308528,18.78z/data=!4m6!3m5!1s0x14e7097d4bb3bc4b:0x8f9a21b9420b0cf4!8m2!3d34.8361749!4d32.4314325!16s%2Fg%2F11v663n8pc?hl=en-CY&entry=tts'
              }
              target='_blank'
            >
              see on maps
            </Styled.Link>
          </Styled.Description>
        </Styled.Content>
      </Styled.Inner>
    </Styled.Container>
  );
};
