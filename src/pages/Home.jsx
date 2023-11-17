import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Container>
      <Card image={ 'https://i.ytimg.com/vi/qEVUtrk8_B4/maxresdefault.jpg'} />
      <Card image={'https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/4306/674306-h'}/>
      <Card image={'https://i0.wp.com/highoncinemaa.com/wp-content/uploads/2023/07/Mission-Impossible-7-Dead-Reckoning-Part-1-Full-Plot-Summary-Leaks-and-Spoilers.jpg?fit=1200%2C628&ssl=1'}/>
      <Card image={'https://filmyfool.com/wp-content/uploads/2019/04/avengersendgame-blogroll-2-1555518573008_1280w.jpg'}/>
      <Card image={'https://m.media-amazon.com/images/M/MV5BNTBhZGE4NzUtNDRhMi00MTlmLWIwY2UtODUwMzA4MWM3Nzc1XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL75_UX500_CR0,0,500,281_.jpg'}/>
      <Card image={'https://www.koimoi.com/wp-content/new-galleries/2022/01/kgf-chapter-2-is-releasing-on-its-original-date-001.jpg'}/>
      <Card image={'https://images.thedirect.com/media/article_full/ant-man-quantumania-genre-mcu-marvel.jpg'}/>
      <Card image={'https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg'}/>
      <Card image={'https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29.jpg'}/>
      <Card image={'https://i.ytimg.com/vi/L6P3nI6VnlY/maxresdefault.jpg'}/>
      <Card image={'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7791A92CA30EF9F51223B11EF62661ED67689005008D16B1876A97AE80964444/scale?width=1200&aspectRatio=1.78&format=jpeg'}/>
      <Card image={'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/06/Captain-America-the-first-Avenger.jpeg'}/>
    </Container>
  );
};

export default Home;
