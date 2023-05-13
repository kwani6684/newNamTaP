"use client";
import Image from "next/image";
import YouTube from "react-youtube";
import jinwoo1 from "../../../public/jinwoo1.png";
import jinwoo2 from "../../../public/jinwoo2.jpg";
import jinwoo3 from "../../../public/jinwoo3.png";
import jinwoo4 from "../../../public/jinwoo4.png";

import jinwoo6 from "../../../public/jinwoo6.png";
import jinwoo7 from "../../../public/jinwoo7.png";
import jinwoo8 from "../../../public/jinwoo8.png";

import {
  MainBanner,
  MainText,
  MainTextContainer,
  Dark,
  PaddingContainer,
  MagazineTitle,
  MagazineEditor,
  MagazinePadding,
  MagazineContent,
  MagazineImage,
  MagazineAnnotation,
  MagazineSmallTitle,
} from "../../styled";
import magazineInfo from "../magazineInfo";

export default function Home() {
  return (
    <>
      <MainBanner>
       

        <Image src={magazineInfo[1].mainImage} alt="" layout="fill" objectFit="cover" />
      </MainBanner>
      <MagazinePadding>
        <MagazineEditor>{magazineInfo[1].editor}</MagazineEditor>
        <MagazineTitle>{magazineInfo[1].title}</MagazineTitle>
        <MagazineContent>
          4월과 함께 조금 이른 더위가 찾아왔다. 올해의 벚꽃은 예년보다 2주 정도는 빨리 피고 진 것 같다. 그만큼 올해는 봄 아우터들을 걸칠 수 있는
          기간이 짧아서 많은 멋쟁이들이 아쉬움을 느꼈을 것이다. 하지만 너무 슬퍼할 필요는 없다. 여름은 적은 돈으로 코디를 완성시킬 수 있는 가성비의
          계절이니까. 모자, 반팔 티셔츠, 바지, 그리고 신발까지. 단 4가지 아이템만으로 4월부터 시작되는 더위를 즐기려면 어떤 옷을 입어야 할까?{" "}
        </MagazineContent>
        <MagazineContent>
          올해 S/S 시즌을 대표하는 스타일이라고 한다면 단연코 바람막이를 중심으로 한 고프코어와 스포츠웨어라고 할 수 있을 것이다. 패션에 관심이 많지
          않은 사람들도 길거리에서 바람막이 하나씩은 구매해 입고 다니며, 이는 사실 트렌디하다고 하기에는 지나치게 넓고 길게 유행한 아이템이다. 거친
          말로 표현하자면 개나 소나 입고 다니는 룩이 된 것이다.{" "}
        </MagazineContent>
        <MagazineImage>
          <Image src={jinwoo1} alt="" width={400} />
        </MagazineImage>
        <MagazineAnnotation>(특정 브랜드를 비하하려는 의도는 없습니다. 하지만 너무 흔한 건 사실입니다.)</MagazineAnnotation>
        <MagazineContent>
          그렇다면 바람막이의 유행은 언제부터 였을까? 루이 비통 2020 F/W 맨즈 패션쇼에서 버질 아블로는 하늘색 아크테릭스 윈드브레이커를 입고 피날레에
          섰다. 그리고 얼마 지나지 않아 오프화이트와 아크테릭스의 컬래버레이션을 발표하며 아웃도어와 하우스 브랜드 협업의 효시를 일으켰다. 고프코어란,
          아웃도어 의류를 뜻하는 고프(Gorp)와 일상적인 스타일을 의미하는 놈코어(Normcore)의 합성어이다. 고프코어가 본격적으로 ‘힙’한 흐름을 탄 데엔
          에이셉 라키, 프랭크 오션, 벨라 하디드 등 해외 셀러브리티의 스트리트 패션이 한몫했고, 코로나로 갈 곳을 잃은 젊은 세대들이 등산, 캠핑 등 야외
          활동에 관심을 두면서 더욱 주목받게 됐다.{" "}
        </MagazineContent>
        <MagazineContent>
          현재 고프코어 트렌드를 이끄는 기수는 크게 아웃도어 태생 브랜드와 아웃도어 스타일을 재해석한 하우스 브랜드 두 가지로 나뉜다. 전자는
          아크테릭스, 노스페이스, 나파피리, 베일런스, 살로몬, 로아, 앤드원더와 같은 부류이며 후자에는 마틴 로즈, 키코 코스타디노브, 베트멍,
          발렌시아가, 오프화이트가 속한다. 또 이들 간의 협업이 새로운 트렌드를 만들어냈다. 질 샌더와 아크테릭스, MM6와 살로몬, 슈프림과 노스페이스
          협업이 좋은 예다.{" "}
        </MagazineContent>
        <MagazineContent>
          이렇듯 패션 업계에서의 주목은 3년 전부터 시작됐기에, 올해 굳이 무리하게 따라갈 만한 트렌드는 아니라는 것이 정론이다. 옷 좀 입는다 싶은
          사람들은 각자 자기만의 개성을 트렌드에 섞어 하나의 스타일은 완성시키기에 상관없겠지만, 그게 그렇게 쉬울 리가. 필자를 포함해 대부분의 평범한
          일반인들은 소위 ‘무신사 냄새’나는 무난한 패션이 아니라면 개성을 서툴게 드러내 과해질 우려가 있다. 앞서 언급한 근본 있는 브랜드들에서
          아이템을 사서 감성을 챙겨보려고 해도, 그 가격을 보면 자연스레 뒤로가기에 손이 가게 된다. 그렇다면 과하지도 않고 흔하지도 않으며 가격도
          합리적인, 우리 같은 일반인들에게 좋은 브랜드는 뭐가 있을까?
        </MagazineContent>
        <MagazineImage>
          <Image src={jinwoo2} alt="" width={300} />
        </MagazineImage>
        <MagazineAnnotation>(사진은 퓨어 고프코어를 즐겨 입는 래퍼 키드밀리. 하지만 우리는 키드밀리가 아니니까..)</MagazineAnnotation>
        <MagazineContent>
          이쯤에서 지금까지 말한 트렌드와 환경을 토대로 여름 코디를 책임질 만한 4가지 브랜드를 소개해보고자 한다. 길거리에 아주 흔하게 보이는 브랜드는
          아니기에, 나름대로 개성을 챙길 수 있을 것이다. 홍대충들 주목.
        </MagazineContent>

        <MagazineSmallTitle>
          모자 – GRAILZ
          <a href="https://www.grailz.co.kr" style={{ fontSize: 20, marginLeft: 100, color: "black" }}>
            https://www.grailz.co.kr
          </a>
        </MagazineSmallTitle>
        <MagazineImage>
          <Image src={jinwoo3} alt="" width={600} />
        </MagazineImage>
        <MagazineImage>
          <Image src={jinwoo4} alt="" width={600} />
        </MagazineImage>
        <MagazineContent>
          사실 유명하지 않은 브랜드는 아니다. 로고도 어디선가 본 듯 하고. 하지만 볼캡은 적절히 매치하기만 해도 패션의 개성에 큰 힘을 주기에, 조금
          흔하더라도 트렌드에 맞는 제품을 사는 것이 맞다고 생각한다. 특히 베이지색 제품은 흰 반팔티와 매치하기에 좋을 것이다. 가격대도 6만원 정도로,
          합리적이다.
        </MagazineContent>
        <MagazineSmallTitle>
          반팔 티셔츠 – Nupeak
          <a href="https://www.nupeak.kr" style={{ fontSize: 20, marginLeft: 50, color: "black" }}>
            https://www.nupeak.kr
          </a>
        </MagazineSmallTitle>

        <MagazineImage>
          <Image src={jinwoo6} alt="" width={600} />
        </MagazineImage>
        <MagazineContent>
          절개 디테일과 소재가 인상적인 브랜드다. 필자는 인스타그램에서 디깅을 통해 발견했다. 무더운 여름에는 아우터로 포인트를 줄 수 없어 반팔의
          디자인이 중요해지기 마련이다. 최근 빈티지하고 큼지막한 나염의 반팔티들이 유행하는 추세인데, 이 와중에 이런 미묘한 디테일이 살아있는 반팔티를
          멋지게 소화한다면 당신은.. 와우! 멋쟁이.
        </MagazineContent>
        <MagazineSmallTitle>
          바지 – AOP
          <a href="https://adonisorbitproject.com" style={{ fontSize: 20, marginLeft: 50, color: "black" }}>
            https://adonisorbitproject.com
          </a>
        </MagazineSmallTitle>
        <MagazineImage>
          <Image src={jinwoo7} alt="" width={600} />
        </MagazineImage>
        <MagazineContent>
          관점 지향 프로그래밍 줄여서 aop 아니다. 필자는 한여름에도 반바지를 못 입는다. 얇은 다리 탓도 분명 있지만, 반바지는 어쩐지 후줄근해 보일 것
          같다는 생각 때문이다. 같은 철학을 가진 사람들이 있다면, 이 브랜드에 주목해보자. 최근 길다란 지퍼 절개 디테일이 들어간 바지가 굉장히 많이
          보이는데, 그 중에서 가장 합리적인 가격과 깔끔한 디자인을 갖춘 브랜드라고 생각된다.
        </MagazineContent>
        <MagazineSmallTitle>
          신발 – Keen
          <a href="https://www.keenfootwear.com" style={{ fontSize: 20, marginLeft: 50, color: "black" }}>
            https://www.keenfootwear.com
          </a>
        </MagazineSmallTitle>
        <MagazineImage>
          <Image src={jinwoo8} alt="" width={600} />
        </MagazineImage>
        <MagazineContent>
          지금껏 마이너하고 예쁜 거 잘 가져와 놓고 마지막에 keen이라니. 하지만 어쩔 수 없다. 신발은 도메스틱 브랜드가 다양한 편이 아니고, 설령 그런
          브랜드가 있다고 해도 발의 편안함을 위해서 큰 회사의 자본이 들어간 것을 사는 것이 좋으니까. 최근 들어 더더욱 유명해진 브랜드이며, 나이키와
          아디다스 같은 브랜드들에서 눈을 돌리고 싶은 사람들에게는 아주 적격이다. 아식스의 신발들 또한 위의 브랜드들과 무난하게 잘 섞일 수 있을 것
          같다.{" "}
        </MagazineContent>
              <MagazineEditor style={{fontWeight: 700}}>글을 마치며</MagazineEditor>
        <MagazineContent>
          앞서 수차례 말했지만 필자 또한 일반인이며 그저 옷을 좋아하는 대학생에 불과하다. 어디 가서 옷 좋아한다고 말하면서도 옷을 잘 입는다고는 말하기
          부끄러운 수준의 패린이다. 전문성을 가지고 거들먹거리며 쓴 글이 아니다. 그저 ‘옷 좋아하는 친구한테 “야 요즘 뭐가 예쁘냐?”라고 물어봤을 때 그
          친구가 신나서 추천해주는 브랜드들을 살펴보는 느낌’으로 이 글을 읽어준다면 더할 나위 없을 것 같다.
              </MagazineContent>
              <div style={{borderBottom:"1px solid black",marginTop:20}}></div>
      </MagazinePadding>
    </>
  );
}
