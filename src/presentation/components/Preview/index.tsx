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
              <Styled.Link
                href={
                  'https://www.google.com/maps/place/Yoga+Shala+in+Tala/@34.8361793,32.4288522,17z/data=!3m1!4b1!4m6!3m5!1s0x14e7097d4bb3bc4b:0x8f9a21b9420b0cf4!8m2!3d34.8361749!4d32.4314325!16s%2Fg%2F11v663n8pc?entry=tts'
                }
                no-referrer
                target='_blank'
              >
                find us on google maps
              </Styled.Link>
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
