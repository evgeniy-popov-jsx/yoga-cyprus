import { useState } from 'react';
import { Styled } from './styles';

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Styled.Container id={'faq'} data-section>
      <Styled.Header>Frequently Asked Questions</Styled.Header>
      <Styled.Items>
        <Styled.Item key={1}>
          <Styled.Question onClick={() => toggleAccordion(1)}>
            <Styled.Icon $isOpen={activeIndex === 1}>▼</Styled.Icon>
            What are the General Rules to follow in the Shala?
          </Styled.Question>
          {activeIndex === 1 && (
            <Styled.Answer>
              1. All classes require booking in advance.
              <br />
              2. You can bring your own mat. If you need one, we offer to use
              ours.
              <br />
              3. All classes are guided in the English language. Russian
              translation is provided on request.
              <br />
              4. We provide financial support for those who are struggling to
              pay by offering a payment delay or discount options up to 50%.
              Please{' '}
              <Styled.Link
                href={'https://futureofwellness.eu/get-in-touch/'}
                target='_blink'
              >
                contact us
              </Styled.Link>{' '}
              for details.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={2}>
          <Styled.Question onClick={() => toggleAccordion(2)}>
            <Styled.Icon $isOpen={activeIndex === 2}>▼</Styled.Icon>
            What is Shala Etiquette?
          </Styled.Question>
          {activeIndex === 2 && (
            <Styled.Answer>
              1. Yoga Shala is your sanctuary for worship and learning. Dress
              modestly and act kindly to create a welcoming atmosphere for
              everyone.
              <br />
              2. Take off your shoes before entering Shala. You can keep them in
              a changing room.
              <br />
              3. All classes are guided in the English language. Russian
              translation is provided on request. You can come to the studio
              10-15 minutes before your class starts.
              <br />
              4. We provide financial support for those who are struggling to
              pay by offering a payment delay or discount options. Please
              contact us for details.Please refrain from wearing strong
              perfumes, deodorants, or other cosmetics during practice as they
              might distract others.
              <br />
              5. Remember to turn off your phone upon entering the Shala.
              <br />
              6. To maintain the sanctity of the space, we allow photos or
              videos during practice by request only.
              <br />
              7. Keep the Shala peaceful by being quiet; avoid loud noises,
              running, or disturbing fellow students.
              <br />
              8. Set up your mat gently and use the changing rooms to prepare
              for your session.
              <br />
              9. After practice, please clean your rented mat for the next
              person. Please use the cleaning spray and paper towels provided by
              the Shala.
              <br />
              10. We also encourage the study of ancient texts and chanting
              along with asana practice. Check out our internal yoga library in
              the Shala to borrow books.
              <br />
              Some of our recommendations:
              <br />
              * One Simple Thing: A New Look at the Science of Yoga and How It
              Can Transform Your Life — Eddie Stern, 2019
              <br />
              * Hatha Yoga Pradipika — Svātmārāma
              <br />* Ashtanga Yoga: Yoga in the Tradition of Sri K. Pattabhi
              Jois : The Primary Series Practice Manual — Petri Räisänen, 2015
              We would love to hear your feedback about your reading experience.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={3}>
          <Styled.Question onClick={() => toggleAccordion(3)}>
            <Styled.Icon $isOpen={activeIndex === 3}>▼</Styled.Icon>
            I’m new to yoga, how can I practise?
          </Styled.Question>
          {activeIndex === 3 && (
            <Styled.Answer>
              In our school, students of all levels attend the same class, and
              if you’re a complete beginner, we’ll first tell you what, how, and
              why to do things, then show you and guide you individually through
              the whole class. With us, you will always be able to gain the
              necessary knowledge and support on your path.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={4}>
          <Styled.Question onClick={() => toggleAccordion(4)}>
            <Styled.Icon $isOpen={activeIndex === 4}>▼</Styled.Icon>I have back
            pain / other diseases. Can I still practise?
          </Styled.Question>
          {activeIndex === 4 && (
            <Styled.Answer>
              Before starting classes, we will talk with you and discuss the
              most comfortable practice option for you. We will show you
              variations of asanas (poses) that will not strain the problem
              areas, but help them recover.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={5}>
          <Styled.Question onClick={() => toggleAccordion(5)}>
            <Styled.Icon $isOpen={activeIndex === 5}>▼</Styled.Icon>
            What if none of the schedule options suit me?
          </Styled.Question>
          {activeIndex === 5 && (
            <Styled.Answer>
              Let’s discuss the possibility of private lessons. Moreover, if we
              see a lot of requests for a certain time, then we can set up new
              classes. So please share with us the time that is convenient for
              you.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={6}>
          <Styled.Question onClick={() => toggleAccordion(6)}>
            <Styled.Icon $isOpen={activeIndex === 6}>▼</Styled.Icon>
            Do you have online classes?
          </Styled.Question>
          {activeIndex === 6 && (
            <Styled.Answer>
              Yes, please contact +357 97448449. We believe that yoga should be
              available to everyone regardless of the location, though we still
              recommend practicing in the Shala, if possible. Please check the
              schedule to learn more.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={7}>
          <Styled.Question onClick={() => toggleAccordion(7)}>
            <Styled.Icon $isOpen={activeIndex === 7}>▼</Styled.Icon>
            Can I bring my kids to Shala to practise yoga with them?
          </Styled.Question>
          {activeIndex === 7 && (
            <Styled.Answer>
              Yes, you’re welcome to bring your kids to Shala for practising
              yoga together. We recommend bringing children who are 6 and above.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={8}>
          <Styled.Question onClick={() => toggleAccordion(8)}>
            <Styled.Icon $isOpen={activeIndex === 8}>▼</Styled.Icon>
            Can I bring my kids if I have no one to leave them with?
          </Styled.Question>
          {activeIndex === 8 && (
            <Styled.Answer>
              Yes, you can bring your kids if you have no one to leave them
              with. However, we kindly ask that you ensure they remain
              respectful and considerate of other practitioners’ focus during
              their yoga practice. We recommend bringing children who are 6 and
              above.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={9}>
          <Styled.Question onClick={() => toggleAccordion(9)}>
            <Styled.Icon $isOpen={activeIndex === 9}>▼</Styled.Icon>
            Do you have a shower that I can use after the practice?
          </Styled.Question>
          {activeIndex === 9 && (
            <Styled.Answer>
              Yes. We have a shower that you can use after your practice. It is
              available for free, and we also provide towels and all other
              bathroom essentials for your convenience, ensuring you have
              everything you need for a comfortable and refreshing post-practice
              experience.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={10}>
          <Styled.Question onClick={() => toggleAccordion(10)}>
            <Styled.Icon $isOpen={activeIndex === 10}>▼</Styled.Icon>
            Are there any other social networks I can follow you on?
          </Styled.Question>
          {activeIndex === 10 && (
            <Styled.Answer>
              Here are other pages of ours for you to explore:
              <br />
              <Styled.Link
                href={'https://t.me/yogashalaintala'}
                target='_blink'
              >
                Telegram
              </Styled.Link>
              <br />
              <Styled.Link
                href={'https://www.instagram.com/yogashala.tala/'}
                target='_blink'
              >
                Instagram
              </Styled.Link>
              <br />
              <Styled.Link
                href={'https://www.facebook.com/profile.php?id=61551788198476'}
                target='_blink'
              >
                Facebook
              </Styled.Link>
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={11}>
          <Styled.Question onClick={() => toggleAccordion(11)}>
            <Styled.Icon $isOpen={activeIndex === 11}>▼</Styled.Icon>
            Shala Pass Purchase Policy
          </Styled.Question>
          {activeIndex === 11 && (
            <Styled.Answer>
              All classes can be paid online or in cash before class starts.
              Please request for an electronic or paper receipt. Please mind
              that 8 classes pass and One Month Unlimited passes are valid for
              one month only.
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={12}>
          <Styled.Question onClick={() => toggleAccordion(12)}>
            <Styled.Icon $isOpen={activeIndex === 12}>▼</Styled.Icon>
            Cancellation & Refund Policy
          </Styled.Question>
          {activeIndex === 12 && (
            <Styled.Answer>
              Please be mindful when scheduling and respect the class and
              teacher by making every effort to come to class. Any reservations
              that are cancelled after 4 PM (Cyprus time zone) the day before
              the class start time are classed as a ‘late cancel’, and the pass
              will be used. Due to health conditions confirmed by your therapist
              or any other force major, missed classes can be refundable. Please
              contact us if those appear
            </Styled.Answer>
          )}
        </Styled.Item>
        <Styled.Item key={13}>
          <Styled.Question onClick={() => toggleAccordion(13)}>
            <Styled.Icon $isOpen={activeIndex === 13}>▼</Styled.Icon>
            Privacy Policy
          </Styled.Question>
          {activeIndex === 13 && (
            <Styled.Answer>
              Who Are We? Yoga Shala belongs to AS Future of Wellness LTD. Alena
              Shaidulina is the owner of AS Future of Wellness LTD.
              <br />
              Website:{' '}
              <Styled.Link href={'https://futureofwellness.eu'} target='_blank'>
                https://futureofwellness.eu
              </Styled.Link>
              <br />
              Email: futureofwellnessgroup@gmail.com
              <br />
              Who do we contact? AS Future of Wellness LTD will only contact
              individuals who specifically give us consent. Consent may be given
              by contacting us through our website or by purchasing or renting
              one of our products or services through email, messenger apps or
              via offline communication with one of AS Future of Wellness LTD
              representatives. What information do we collect and where is it
              stored? Your name and e-mail address as provided by you contacting
              us through the contact form at{' '}
              <Styled.Link href={'https://futureofwellness.eu'} target='_blank'>
                https://futureofwellness.eu
              </Styled.Link>
              , via futureofwellnessgroup@gmail.com or via contacting one of the
              AS Future of Wellness LTD representatives online and offline. Your
              information can only be accessed solely by the official
              representatives of AS Future of Wellness LTD.
            </Styled.Answer>
          )}
        </Styled.Item>
      </Styled.Items>
    </Styled.Container>
  );
};
