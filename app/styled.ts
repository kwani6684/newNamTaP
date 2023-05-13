"use client";

import styled from "styled-components";
import Image from "next/image";
import mainbg from "./assets/mainbg.jpg";

export const Container = styled.div`
  padding-top: 80px;
`;

export const MainLogo = styled(Image)`
  object-fit: cover;
  @media screen and (max-width: 500px) {
    width:30;
}
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 120px;
  gap: 48px;
  z-index:1;
  position: fixed;
  width: auto;
  height: 60px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: #000000;
  @media screen and (max-width: 500px) {
    padding:10px
    
  }
`;
export const RightNav = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  justify-content: flex-end;
  align-items: center;
  width: 573px;
  gap: 24px;
  @media screen and (max-width: 500px) {
    width:100px;
    
  }
`;
export const LeftNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  @media screen and (max-width: 500px) {
    scale:0.8;
    gap:0;
    padding:0;
  }
`;
export const IconText = styled.button`
  all: unset;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 28px;

  /* identical to box height */

  display: flex;
  align-items: center;

  color: #ffffff;
  &:hover {
    color: #00b6ff;
  }
  @media screen and (max-width: 500px) {
    font-size:15px;
  }
`;
//메인배너 스타일링
export const MainBanner = styled.div`
  display: flex;
  z-index:0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 350px;
  padding-left: 120px;
  padding-right: 150px;
  left: 0px;
  right: 0px;
  background-color: #000000;
  @media screen and (max-width: 500px) {
    padding-left:0px;
    padding-right:0px;
  }
`;
export const MainTextContainer = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  @media screen and (max-width: 500px) {
    scale:0.7
  }
`;
export const MainText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 63px;
  line-height: 76px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;
//좌우 여백주는 패딩콘테이너
export const PaddingContainer = styled.div`
  padding-left: 120px;
  padding-right: 120px;
  text-align: center;
  margin: auto;
`;
export const MagazineMainText = styled(MainText)`
  display: block;
  padding: 30px;
  margin-bottom: 20px;
  font-size: 90px;
`;
export const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;

  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  flex-wrap: wrap;
  position: relative;
  left: 0px;
  right: 0px;
`;
export const Thumbnail = styled.div`
  display: flex;
  width: 40vw;
  height: 350px;

  position: relative;
  background-color: #00b6ff;

  &:hover img {
    filter: brightness(70%);
    transition: all 1s;
  }
  &:hover div {
    background-color: unset;
    transition: all 1s;
  }
  @media screen and (max-width: 500px) {
    width:80vw;
    margin-top:20px;
  }
`;
export const ThumbnailText = styled(MainText)`
  font-weight: 500;
  font-size: 35px;
  line-height: 45px;
  padding: 20px;
  background-color: rgb(0, 0, 0, 0.6);
`;
export const Dark = styled.div`
  filter: brightness(70%);
`;
//magazine
export const MagazinePadding = styled(PaddingContainer)`
  padding-left: 15vw;
  padding-right: 15vw;
  padding-top: 50px;
  text-align:left;
  margin-bottom:300px;
  @media screen and (max-width: 700px) {
    
   padding:10px;
  }
  
`;
export const MagazineTitle = styled(MainText)`
  color: black;
  border-bottom: 3px solid black;
  margin-bottom:40px;
`;
export const MagazineEditor = styled(MainText)`
  font-size: 30px;
  margin-left:10px;
  font-weight: 400;
  color: black;
`;
export const MagazineContent = styled(MainText)`
font-size:20px;
font-weight:500;
color:black;
line-height:30px;
margin-bottom:20px;
margin-top:20px;
`
export const MagazineImage = styled.div`
align-items:center;
justify-content:center;
display:flex;
margin-bottom:10px;
@media screen and (max-width: 500px) {
  scale:0.7
}
`
export const MagazineAnnotation = styled.div`
align-items:center;
justify-content:center;
display:flex;
font-size:15px;
color:gray;
`
export const MagazineSmallTitle = styled(MagazineTitle)`
border-bottom:0 solid black;
border-top:1px solid black;
margin-bottom:20px;
font-size:40;
padding-top:20px;


`
