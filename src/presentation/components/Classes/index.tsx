import { Styled } from './styles';

export const Classes = () => {
  return (
    <Styled.Container id={'classes'} data-section>
      <Styled.Header>Our Classes</Styled.Header>
      <Styled.Classes>
        <Styled.Class>
          <Styled.Title>Ashtanga Yoga</Styled.Title>
          <Styled.Desc>
            Options are given for challenging asanas of the sequence of the
            primary Ashtanga yoga, and it is complemented with more detailed
            guidance on couple of postures or breathing exercises for each
            class.
          </Styled.Desc>
        </Styled.Class>
        <Styled.Class>
          <Styled.Title>Mysore yoga</Styled.Title>
          <Styled.Desc>
            It is way of practicing yoga where you develop your own practice
            that suits your body best. There is no need to follow the same
            sequence and pace as the teacher or other practitioners — it is a
            freestyle class.
          </Styled.Desc>
        </Styled.Class>
        <Styled.Class>
          <Styled.Title>Gentle Yoga</Styled.Title>
          <Styled.Desc>
            Such traditions of Vedic chant are often considered the oldest
            unbroken oral tradition in existence, the fixation of the Vedic
            texts (samhitas) as preserved dating to roughly the time of Homer.
          </Styled.Desc>
        </Styled.Class>
        <Styled.Class>
          <Styled.Title>Vedic chanting meditation</Styled.Title>
          <Styled.Desc>
            Such traditions of Vedic chant are often considered the oldest
            unbroken oral tradition in existence, the fixation of the Vedic
            texts (samhitas) as preserved dating to roughly the time of Homer.
          </Styled.Desc>
        </Styled.Class>
      </Styled.Classes>
    </Styled.Container>
  );
};
