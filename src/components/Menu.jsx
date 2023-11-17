import React from "react";
import styled from "styled-components";
import YouTube from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import WhatshotTwoToneIcon from '@mui/icons-material/WhatshotTwoTone';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import { Link } from "react-router-dom";
const Container = styled.div`
  flex: 1 1 6%;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 6px 15px;
  background-color: transparent;
  border: 1px solid #30363D;
  color: #3ea6ff;
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={YouTube} />
             YouTube
          </Logo>
        </Link>
        <Item>
          <HomeIcon />
          Home
        </Item>
        <Item>
          <SlowMotionVideoIcon />
          Shorts
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          You
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>Explore</Title>

        <Item>
          <WhatshotTwoToneIcon />
          Trending
        </Item>
        <Item>
          <LocalMallOutlinedIcon />
          Shopping
        </Item>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <LightbulbOutlinedIcon />
          Learning
        </Item>
        <Item>
          <DiamondOutlinedIcon />
          Fashion & Beauty
        </Item>
        <Item>
          <PodcastsOutlinedIcon />
          Podcasts
        </Item>
        <Hr />
        <Title>Browse Channels</Title>
        <Hr />
        <Title>More from YouTube</Title>
        <Item>
          <HelpOutlineOutlinedIcon />
          YouTube Premium
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          YouTube Music
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          YouTube Kids
        </Item>
        <Hr/>
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report history
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Send Feedback
        </Item>
        <Hr/>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
