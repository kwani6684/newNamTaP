"use client";
import Image from "next/image";
import magazineInfo from "../magazineInfo";
import { MainBanner, MainText, MainTextContainer, Dark, MagazineEditor, MagazineTitle, MagazinePadding, MagazineContent } from "../../styled";


export default function Home() {
  return (
    <>
      <MainBanner>
        <MainTextContainer>
          <MainText style={{ fontSize: 50 }}></MainText>
        </MainTextContainer>

        <Image src={magazineInfo[2].mainImage} alt="" layout="fill" objectFit="cover" />
      </MainBanner>
      <MagazinePadding style={{ fontFamily: "GowunDodum" }}>
        <MagazineEditor>{magazineInfo[2].editor}</MagazineEditor>
        <MagazineTitle>{magazineInfo[2].title}</MagazineTitle>

        <MagazineContent>
          나는 버스정류장 혹은 지하철역에서 사람들을 관찰하는 것을 좋아한다. 음악을 들으며 그들이 어떤 옷을 입었는지, 손에는 무엇을 들고 있는지,
          눈빛에는 어떤 생각이 담겨있는지 살펴본다. 그리고 셜록 홈즈마냥 그들의 이야기를 유추하고 상상해본다. 지금 내 옆에 앉아 있는 사람은 눈이 꽤나
          부어있다. 밤 새도록 운 것일까 아니면 술을 마신 것일까. 희고 빳빳한 면바지에 닥터마틴, 상의는 베이지색 트렌치 코트로 꽁꽁 싸매고 있어 보이질
          않는다. 핸드폰을 하지 않고 음악만을 들으며 멍하니 앞을 보고 있는 것을 보니 오래, 그리고 깊게 생각 할 만한 일이 있는게 아닐까 싶다. 술 냄새가
          전혀 나지 않지만 향수 냄새도 나지 않는 것을 보아 긴 시간 울었다는 생각에 약간의 확신이 생긴다.
        </MagazineContent>
        <MagazineContent>
          버스정류장의 벤치는 보통 4명, 지하철역 안의 그것에는 보통 3명의 사람이 앉아있다. 두 장소 모두 끝자리부터 채워진다. 양쪽 끝에 한명씩 앉게
          되면 후에 온 사람은 고민을 하게 된다. 저 둘 사이에 낑겨 앉아야 할까 그냥 서 있을까 버스(지하철)은 몇 분 후에 도착하지. 사실 이런 생각보다
          가장 중요한 것은 누가 앉아있냐이다. 누가봐도 낮술을 거하게 한 것 같은 아저씨가 한쪽에 앉아있다면 배차간격이 10분이어도 앉기 꺼려지는게
          사실이다. 심지어 그 아저씨가 해병대 모자라도 쓰고 있으면 더욱 더 그렇다. 보따리를 잔뜩 들고 계신 할머니가 짐을 옆자리에 놓아 한 자리를
          차지하는 경우도 있다. 아마 보따리 안에 든 것은 야채나 과일일 것이다. 시장 안 혹은 길가에서 이들을 팔기 위해 아니면 팔고 남은 것을 가져가는
          길이 아닐까 생각해본다.
        </MagazineContent>
        <MagazineContent>
          이 글을 쓰기 위해 4시에 나와 000 버스정류장에 앉아 있다. 한시간 동안 앉아 있으며 몇명 정도의 사람이 지나가는지 새어 보고자 한다. 나의 이목을
          끄는 사람 혹은 일이 생기면 기록해볼 것이다. 어쩌면 평소에 떠올리지 못 했던 생각이 날 수도 있을 것이다.
        </MagazineContent>
      </MagazinePadding>
    </>
  );
}
