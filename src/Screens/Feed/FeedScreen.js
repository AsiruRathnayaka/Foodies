import { Grid } from "@mui/material";
import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import FeedIcon from "@mui/icons-material/FeedOutlined";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import FastfoodIcon from "@mui/icons-material/FastfoodOutlined";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import Post from "./Components/Post";
import FollowList from "./Components/FollowList";

import AddPost from "./Components/AddPost";

const FeedScreen = () => {
  return (
    <>
      <Header />
      <Grid container direction="row" justifyContent="space-between">
        <Grid
          item
          paddingRight="10px"
          padding="20px"
          xs={2}
          justifyContent="space-around"
          borderRadius="8px"
        >
          <SideBar label="Feed" icon={FeedIcon} />
          <SideBar label="Friends" icon={PeopleIcon} />
          <SideBar label="Foods" icon={FastfoodIcon} />
          <SideBar label="Photos" icon={PhotoSizeSelectActualIcon} />
        </Grid>

        <Grid
          container
          display="flex"
          paddingX="20px"
          paddingY="20px"
          justifyContent="space-around"
          xs={6}
          sx={{ background: "#F3F3F3" }}
          borderRadius="8px"
        >
          <AddPost />
          <Post />
        </Grid>

        <Grid
          justifyContent="space-evenly"
          display="flex"
          bgcolor="#F3F3F3"
          paddingX="20px"
          paddingY="20px"
          borderRadius="8px"
          item
          xs={2}
        >
          <FollowList />
        </Grid>
      </Grid>
    </>
  );
};

export default FeedScreen;
