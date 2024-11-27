import { Styled } from './styles';

export const Navigate = () => {
  return (
    <Styled.Container>
      <Styled.Menu>
        <Styled.Link href='#vibe'>Vibe</Styled.Link>
        <Styled.Link href='#schedule'>Schedule</Styled.Link>
        <Styled.Link href='#classes'>Classes</Styled.Link>
        <Styled.Link href='#prices'>Prices</Styled.Link>
        <Styled.Link href='#our'>Our</Styled.Link>
        <Styled.Link href='#faq'>FAQ</Styled.Link>
      </Styled.Menu>
    </Styled.Container>
  );
};
