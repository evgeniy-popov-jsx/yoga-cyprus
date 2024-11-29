import { Styled } from './styles';

export const Price = () => {
  return (
    <Styled.Container id={'prices'} data-section>
      <Styled.Inner>
        <Styled.Header>Pricing List</Styled.Header>
        <Styled.SubHeader>VAT is not included</Styled.SubHeader>
        <Styled.Offline>
          <Styled.Title>Offline Classes</Styled.Title>
          <Styled.Cards>
            <Styled.Card>
              <Styled.Price $main $margin={0}>
                <Styled.ServiceName>
                  Vedic Chanting Meditation
                </Styled.ServiceName>
                <Styled.Cost>FREE</Styled.Cost>
              </Styled.Price>
            </Styled.Card>
            <Styled.Card>
              <Styled.Price $main $margin={120}>
                <Styled.ServiceName>Any drop-in yoga class</Styled.ServiceName>
                <Styled.Cost>€ 24</Styled.Cost>
              </Styled.Price>
              <Styled.Price $margin={40}>
                <Styled.ServiceName>One Month Unlimited</Styled.ServiceName>
                <Styled.Cost>€ 159</Styled.Cost>
              </Styled.Price>
              <Styled.Price $margin={40}>
                <Styled.ServiceName>
                  Subscription for <br />8 classes
                </Styled.ServiceName>
                <Styled.Cost>€ 144</Styled.Cost>
              </Styled.Price>
            </Styled.Card>
            <Styled.Card $background>
              <Styled.Price $main $margin={120}>
                <Styled.ServiceName>Private, 1 hour</Styled.ServiceName>
              </Styled.Price>
              <Styled.Price $margin={40}>
                <Styled.ServiceName>Tala</Styled.ServiceName>
                <Styled.Cost>€ 70</Styled.Cost>
              </Styled.Price>
              <Styled.Price $margin={40}>
                <Styled.ServiceName>Paphos</Styled.ServiceName>
                <Styled.Cost>€ 120</Styled.Cost>
              </Styled.Price>
              <Styled.Price $margin={40}>
                <Styled.ServiceName>Limassol</Styled.ServiceName>
                <Styled.Cost>€ 150</Styled.Cost>
              </Styled.Price>
              <Styled.Price $margin={40}>
                <Styled.ServiceName>Larnaca, Nicosia</Styled.ServiceName>
                <Styled.Cost>€ 180</Styled.Cost>
              </Styled.Price>
            </Styled.Card>
          </Styled.Cards>
        </Styled.Offline>
        <Styled.Online>
          <Styled.Title>Online Classes</Styled.Title>
          <Styled.Cards>
            <Styled.Card>
              <Styled.Price $main $margin={0}>
                <Styled.ServiceName>Yoga Practice Intro</Styled.ServiceName>
                <Styled.Cost>FREE</Styled.Cost>
              </Styled.Price>
            </Styled.Card>
            <Styled.Card>
              <Styled.Price $main $margin={0}>
                <Styled.ServiceName>Two Weeks Onlines</Styled.ServiceName>
                <Styled.Cost>€ 34</Styled.Cost>
              </Styled.Price>
            </Styled.Card>
            <Styled.Card $background>
              <Styled.Price $main $margin={0}>
                <Styled.ServiceName>
                  Two privates, one hour each
                </Styled.ServiceName>
                <Styled.Cost>€ 70</Styled.Cost>
              </Styled.Price>
            </Styled.Card>
          </Styled.Cards>
        </Styled.Online>
      </Styled.Inner>
    </Styled.Container>
  );
};
