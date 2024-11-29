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
            Ashtanga Yoga consists of a series of body-move coordinated asanas
            and vinyasas, and Mysore practice offers a personalized and
            progressive approach to yoga, designed to help you establish a
            consistent routine. Our teachers will support you in learning the
            foundational postures and overall awareness in your yoga practice.
          </Styled.Desc>
        </Styled.Class>
        <Styled.Class>
          <Styled.Title>Gentle Yoga</Styled.Title>
          <Styled.Desc>
            The one-hour session blends a gentle, intentional flow of asanas
            inspired by the Ashtanga primary series, where each movement is
            seamlessly synchronized with the breath. The focus is on cultivating
            presence and awareness throughout the practice. Suitable for
            seniors, pregnant women and postpartum moms.
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
