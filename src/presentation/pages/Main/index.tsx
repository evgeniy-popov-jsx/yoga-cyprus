import { Navigate } from 'presentation/components/Navigate';
import { Styled } from './styles';
import { Preview } from 'presentation/components/Preview';
import { Welcome } from 'presentation/components/Welcome';
import { Vibe } from 'presentation/components/Vibe';
import { Schedule } from 'presentation/components/Schedule';
import { Classes } from 'presentation/components/Classes';
import { Price } from 'presentation/components/Price';
import { Teachers } from 'presentation/components/Teachers';
import { Faq } from 'presentation/components/FAQ';
import { Place } from 'presentation/components/Place';
import { Footer } from 'presentation/components/Footer';

export const Main = () => {
  return (
    <Styled.Container id={'rootContainer'}>
      <Preview />
      <Navigate />
      <Welcome />
      <Vibe />
      <Schedule />
      <Classes />
      <Price />
      <Teachers />
      <Faq />
      <Place />
      <Footer />
    </Styled.Container>
  );
};
