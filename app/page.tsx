"use client";
import Image from "next/image";


import { MainBanner, MainText, MainTextContainer } from "./styled";
import mainbg from "../public/Frame 7.png";
import SILogo from "../public/SILogo.png";



export default function Home() {
  return (
    <>
      <MainBanner>
        <MainTextContainer>
          <MainText><div style={{color:"#00B6FF"}}>N</div>amsan</MainText>
          <MainText><div style={{color:"#00B6FF"}}>T</div>ower</MainText>
          <MainText><div style={{color:"#00B6FF"}}>L</div>ightning</MainText>
          <MainText><div style={{color:"#00B6FF"}}>R</div>od</MainText>
        </MainTextContainer>
        <MainTextContainer>
          <Image src={SILogo} alt="" ></Image>
        </MainTextContainer>
        {/* <Image src={mainbg1} alt="" layout="fill" objectFit="cover" /> */}
      </MainBanner>
      
    </>
  );
}
