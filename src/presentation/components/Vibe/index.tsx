import { Styled } from './styles';

export const Vibe = () => {
  return (
    <Styled.Container id={'vibe'} data-section>
      <Styled.Header>Feel Our Vibe</Styled.Header>
      <Styled.Images>
        <Styled.ImageContainer $grid={1}>
          <Styled.Image src={'/vibe1.png'} />
        </Styled.ImageContainer>
        <Styled.ImageContainer $grid={2}>
          <Styled.Image src={'/vibe2.png'} />
        </Styled.ImageContainer>
        <Styled.ImageContainer $grid={3}>
          <Styled.Image src={'/vibe3.png'} />
        </Styled.ImageContainer>
        <Styled.ImageContainer $grid={4}>
          <Styled.Image src={'/vibe4.png'} />
        </Styled.ImageContainer>
        <Styled.ImageContainer $grid={5}>
          <Styled.Image src={'/vibe5.png'} />
        </Styled.ImageContainer>
        <Styled.ImageContainer $grid={6}>
          <Styled.Image src={'/vibe6.png'} />
        </Styled.ImageContainer>
      </Styled.Images>
    </Styled.Container>
  );
};
