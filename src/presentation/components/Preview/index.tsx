import { useWindowSize } from 'hooks/useWindowSize';
import { Styled } from './styles';

export const Preview = () => {
  const { height } = useWindowSize();

  return (
    <Styled.Container>
      <Styled.Preview $height={height}>
        <Styled.PreviewContent>
          <Styled.Logo>
            <Styled.Image src={'/logo.png'} />
          </Styled.Logo>
          <Styled.Content>
            <Styled.H1>Ashtanga Yoga School</Styled.H1>
            <Styled.H2>
              Reconnect, Restore, and Renew at Yoga Shala in Tala…
            </Styled.H2>
            <Styled.Links>
              <Styled.Link href={'#schedule'}>see shedule</Styled.Link>
              <Styled.Link href={''}>find us on google maps</Styled.Link>
            </Styled.Links>
          </Styled.Content>
        </Styled.PreviewContent>
        <Styled.ImageBlock>
          <Styled.Image src={'/preview.png'} />
        </Styled.ImageBlock>
      </Styled.Preview>
    </Styled.Container>
  );
};
