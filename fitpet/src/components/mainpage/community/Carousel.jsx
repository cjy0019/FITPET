import React from 'react';
import styled from 'styled-components';

const Carousel = () => {
  return (
    <CardWrapper>
      <CommunityCard>
        <ImgWrapper src='img/dog1.jpg'></ImgWrapper>
        <h3>Hva er Lorem Ipsum?</h3>
        <p>
          I motsättning till vad många tror, är inte Lorem Ipsum slumpvisa ord.
          Det har sina rötter i ett stycke klassiskt litteratur på latin från 45
          år före år 0, och är alltså över 2000 år gammalt. Richard McClintock,
          en professor i latin på Hampden-Sydney College i Virginia, översatte
          ett av de mer ovanliga orden, consectetur, från ett stycke Lorem Ipsum
        </p>
        <span>by.민정</span>
      </CommunityCard>

      <CommunityCard>
        <ImgWrapper src='/img/dog2.jpg'></ImgWrapper>
        <h3>Where can I get some?</h3>
        <p>
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>
        <span>by.민정</span>
      </CommunityCard>
      <CommunityCard>
        <ImgWrapper src='/img/dog3.jpg'></ImgWrapper>
        <h3>Where does it come from?</h3>
        <p>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisc
        </p>
        <span>by.민정</span>
      </CommunityCard>
      <CommunityCard>
        <ImgWrapper src='/img/dog4.jpg'></ImgWrapper>
        <h3>Where can I get some?</h3>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <span>by.민정</span>
      </CommunityCard>
      <CommunityCard>
        <ImgWrapper src='/img/start.jpg'></ImgWrapper>
        <h3>hello world</h3>
        <p>
          he majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable. If you
          are going to use a passage of Lorem Ipsum, you need to be sure there
          isn't anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum g
        </p>
        <span>by.민정</span>
      </CommunityCard>
      <CommunityCard>
        <ImgWrapper src='/img/finish.jpg'></ImgWrapper>
        <h3>Ipsum</h3>
        <p>
          redefined chunks as necessary, making this the first true generator on
          the Internet. It uses a dictionary of over 200 Latin words, combined
          with a handful of model sentence structures, to generate Lorem Ipsum
          which looks reasonable. The generated Lorem Ipsum is therefore always
          free from repetition, injected humour, or non-characteristic words
          etc.
        </p>
        <span>by.민정</span>
      </CommunityCard>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  transform: translateX(25.4rem);
  overflow: hidden;
`;

const CommunityCard = styled.div`
  width: 25.4rem;
  margin-right: 2.2rem;
  color: #979797;

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.17;
    letter-spacing: -0.36;
    margin-top: 2rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.14;
    margin-top: 1.4rem;
    margin-bottom: 2.4rem;
    letter-spacing: -0.28px;
  }

  span {
    font-size: 1.6rem;
    letter-spacing: -0.28px;
  }
`;

const ImgWrapper = styled.img`
  width: 25.4rem;
  height: 25rem;
  background-color: #979797;
`;

export default Carousel;
