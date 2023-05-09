"use client";

import { MainBanner, MagazineMainText, Thumbnail, ThumbnailContainer, PaddingContainer, ThumbnailText, MainTextContainer } from "../styled";
import thumbnail0 from "../../public/thumbnail0.jpg";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { useState } from "react";
import magazineInfo from "./magazineInfo";

const Magazine = () => {
  const megazineTitle = ["달이 네 번 기울고 차는 것을 지구 반대편에서 바라보기", ];
  return (
    <>
      <PaddingContainer>
        <MagazineMainText>4</MagazineMainText>
      </PaddingContainer>
      <ThumbnailContainer>
        {magazineInfo.map((item, i) => {
          return (
            <Link href={`/magazine/${item.id}`} style={{ textDecoration: "none" }}>
              <Thumbnail>
                <MainTextContainer style={{ justifyContent: "flex-end" }}>
                  <ThumbnailText>{item.title}</ThumbnailText>
                </MainTextContainer>
                <Image src={item.thumbnail} alt="" fill></Image>
              </Thumbnail>
            </Link>
          );
        })}
      </ThumbnailContainer>
    </>
  );
};
export default Magazine;
