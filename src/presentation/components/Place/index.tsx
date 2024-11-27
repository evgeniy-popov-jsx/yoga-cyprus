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
            <Styled.Link>see on maps</Styled.Link>
          </Styled.Description>
        </Styled.Content>
      </Styled.Inner>
    </Styled.Container>
  );
};
