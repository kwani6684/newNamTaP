"use client";
import Image from "next/image";
import YouTube from "react-youtube";
import { GowunDodum } from "@/app/layout";
import {
  MainBanner,
  MainText,
  MainTextContainer,
  Dark,
  MagazinePadding,
  MagazineTitle,
  MagazineEditor,
  MagazineSmallTitle,
  MagazineContent,
  MagazineImage,
} from "../../styled";
import megazine1main from "../../../public/magazine1main.jpg";
import thumbnail0 from "../../../public/thumbnail0.jpg";
import eugine1 from "../../../public/eugine1.jpg";
import eugine2 from "../../../public/eugine2.jpg";
import eugine3 from "../../../public/eugine3.jpg";
import eugine4 from "../../../public/eugine4.jpg";
import eugine5 from "../../../public/eugine5.jpg";
import eugine6 from "../../../public/eugine6.jpg";
import eugine7 from "../../../public/eugine7.jpg";
import eugine8 from "../../../public/eugine8.jpg";
import eugine9 from "../../../public/eugine9.jpg";
import eugine10 from "../../../public/eugine10.jpg";
import eugine11 from "../../../public/eugine11.jpg";
import eugine12 from "../../../public/eugine12.jpg";

export default function Home() {
  return (
    <>
      <MainBanner>
        <MainTextContainer>
          <MainText style={{ fontSize: 50 }}></MainText>
        </MainTextContainer>

        <Image src={megazine1main} alt="" layout="fill" objectFit="cover" />
      </MainBanner>
      <MagazinePadding style={{ fontFamily: "GowunDodum" }}>
        <MagazineEditor>정유진</MagazineEditor>
        <MagazineTitle>달이 네 번 기울고 차는 것을 지구 반대편에서 바라보기</MagazineTitle>
        <MagazineEditor style={{ fontWeight: 700 }}>
          Dezember 2022<br></br>
          뭐가 제일 기대돼요? L이 간만에 문자를 보내왔다. 한국을 떠나는 거요. 나는 망설임 없이 자판을 눌렀다. 물어볼 필요도 없었다는 생각이 드네요.
          화면 너머로 L이 씩 웃는 모습이 머릿속에 떠올랐다.
        </MagazineEditor>

        <MagazineContent>
          주한 스위스 대사관에 출국사유와 증명서류 및 여권을 제출하고 약 일주일 후 비자를 받았다. 한국의 주민등록증과 같은 효력을 발휘하는 본토의
          거주민 등록증 발급에는 182프랑(한화로 약 26만원)이 필요하다. 국가 기준에 부합하는 보험 역시 요구되지만 스위스에서 지원을 해주는 것은 아니다.
          오랜 준비기간을 마친 것치고는 퍽 덤덤하게 남은 일을 처리하고 있었다.
        </MagazineContent>
        <MagazineSmallTitle>Februar 2023 – 첫째 보름</MagazineSmallTitle>
        <MagazineContent>
          중립국, 호수, 조력자살, 용병, 총기 소지, 초콜릿, 치즈, 알프스. 공항 옆 륌랑의 저녁 하늘은 보랏빛 비행운으로 차분하게 어지럽다.
        </MagazineContent>
        <MagazineImage>
          <Image src={thumbnail0} alt="" width={400} />
        </MagazineImage>
        <MagazineContent>
          취리히 공항에 도착하자마자 한 것은 스위스 통신사에 가입해서 전화번호를 발급받고, 주로 생활할 110번 구역으로 가는 버스표와 해당 구역에서 한
          달간 유효할 대중교통 패스를 구매하는 일이었다. 25세 미만이라면 교통비에 50% 할인이 적용되며, 저녁 7시에 출발하고 새벽 5시 전에 목적지에
          도착하는 전국의 교통편을 한 달 동안 무제한 활용할 수 있는 패스를 구매할 수 있다. 실물 교통카드 발급을 신청했지만 어플리케이션을 설치하면
          딱히 필요하지는 않다. 어떤 면에서는 한국보다 더 디지털화된 국가라고 느꼈다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine1} alt="" width={400} />
        </MagazineImage>
        <MagazineContent>
          낯선 곳에서 낯선 이로 생활하는 일은 익숙한 곳에서 낯선 이로 생활하는 일보다 훨씬 논리적이다. 자신의 고향을 의식하는 사람들은 서로 뭉치고,
          나는 나대로 익숙함에서 벗어날 시간과 장소를 찾는다.
        </MagazineContent>
        <MagazineContent>
          첫날밤을 보낸 륌랑에서 짐을 끌고 살 곳으로 이동하는 동안, 그리고 그 이후 아무런 소지품 없이 산책을 나설 때에도 이곳 사람들은 내게 길을 묻고
          도움을 요청하고 구걸을 했다. 도착한 지 한 달이 다 되어갈 때쯤에는 구글맵에 의존하는 일을 거의 그만두었다.
        </MagazineContent>
        <MagazineContent>
          커튼을 달 수 없는 창문, 잔향이 독한 향수, 하나뿐이지만 뜯어져 못 쓰게 된 목도리, 낡은 업라이트 피아노의 뻑뻑한 건반을 누르며 스케치한
          미완성의 곡, 나만의 것들은 어느 곳에서나 나의 마음에 완전히 들지 못하지만 없는 것보다야 당연히 낫다. 집이라고 불리는 장소를 늘상 좋아하는
          이는 없을 것이다. 낯섦이 익숙한 자에게는 익숙함이 낯설다.
        </MagazineContent>
        <MagazineSmallTitle>Februar 2023 – 둘째 보름</MagazineSmallTitle>
        <MagazineContent>
          기시감도, 기대도, 지인도 마주칠 일이 없다는 편안함에 익명성이 안정감을 더한다. 성별, 나이, 국적, 언어, 파편화된 정체성의 경계에 위태롭게
          자리를 잡아도 선을 밟았다며 눈치를 주는 이는 없다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine2} alt="" width={400} />
          <Image src={eugine3} alt="" width={400} />
        </MagazineImage>
        <MagazineContent>
          이곳은 시내버스 지도상에서 110번 구역으로 분류되는 취리히의 중심부이다. 모든 곳이 번화하다는 뜻은 아니다. 현재 거주지의 근처에는 소와 말을
          풀어두는 목초지가 있고, 이곳에는 버스와 트램이 각각 한 대씩만 다닌다. 낮의 61번 버스는 10분마다, 32번 트램은 7-10분마다 승객들을 도심 가까이
          실어 나른다.
        </MagazineContent>
        <MagazineContent>
          건물마다 고도제한이 있는 탓에 가장 복잡한 곳조차도 상대적으로 아담해 보일 수 있다. 부동산 문제가 갈수록 커지는데 시市 측 대처의 유연성이
          떨어진다는 현지인의 불만을 듣는다. 입주할 주거단지를 살펴볼 때 “여긴 취리히야. 입지조건이나 아파트 방음 수준을 따지기 전에 방을 구했다는
          점을 다행으로 여겨.”라는 댓글을 읽은 기억이 났다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine4} alt="" width={400} />
        </MagazineImage>
        <MagazineContent>
          스위스의 공식 언어는 독일어, 프랑스어, 이탈리아어, 그리고 로망슈어이다. 인구의 60% 이상이 스위스식 독일어를 모국어로 사용한다. 로망슈어는
          사용자가 워낙 적은 나머지 대부분의 공문서나 제품설명서에서는 나머지 세 언어만 찾아볼 수 있다. 스위스식 독일어라고 통틀어 부르기는 하지만
          도시마다 억양이 다르기에 독일어 자체가 익숙하지 않다면 도시별 사투리를 익히려는 노력은 크게 의미가 없을 것이다. 본토 독일어와는 다른
          스펠링이나 어휘까지 사용하는 탓에 독일어 화자라도 처음에는 조금 당황스러울 수 있다. 스위스 독일어는 베개에 머리를 묻고 말하는 것처럼
          들린다는 독일인의 가벼운 불평을 들었다. 독일어를 배우기 전 이는 내게, 비유하자면, 한국어 화자가 중세 한국어를 배우지 않고 접하는 것과 비슷한
          느낌으로 다가왔다.
        </MagazineContent>
        <MagazineContent>
          취리히 사람들은 내게 독일어와 영어로 말을 건다. 아무렇게나 찾아 들어간 작은 화랑에서 평범함을 그리는 화가를 만났다. 서툰 독일어로 영어밖에
          할 줄 모른다고 하자 그는 이곳 사람들은 대부분 영어에 능숙하다고 말하며 커피를 내왔다. 그는 구태여 특별해지려는 예술가들에게 환멸을 느낀다고
          했다. 하지만 모두가 특별함을 추구하는 흐름에서 평범함만을 그리는 당신은 결국 나름 특별해졌는걸, 화랑을 나서며 속으로 주워섬겼다.
        </MagazineContent>
        <MagazineContent>
          아르가우주의 브루크에 있는 온천으로 첫 당일치기 여행을 떠났다. 취리히에는 온천이 하나밖에 없고, 그조차도 개인적으로는 비싸다고 생각한다. 첫
          외식을 이곳에서 퐁듀보다도 흔하게 찾아볼 수 있는 케밥 체인점에서 했다. 국적과 상관없이 타인과 어울리는 것에 아직 어려움을 느낀다. 먼
          곳에서조차 달라지지 않는 것들이 있다.
        </MagazineContent>
        <MagazineSmallTitle>März 2023 – 셋째 보름</MagazineSmallTitle>
        <MagazineContent>
          집에서 도보로 약 10분 떨어진 곳에는 두 개의 작은 호수가 위치해 있다. 위쪽과 아래쪽으로 구분될 뿐인 두 호수의 이름을 직역하면 ‘고양이들의
          호수’가 된다. 독일어로 호수는 ‘See’이지만 ‘보다’를 뜻하는 영단어와는 발음이 다르다. 매일같이 호수를 보러 가는 거야, 현관을 나서며 혼자
          시덥잖은 말장난을 뇌까린다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine5} alt="" width={300} />
          <Image src={eugine6} alt="" width={300} />
        </MagazineImage>
        <MagazineContent>
          선불로 지불한 휴대전화 요금과 교통비, 거주민 등록증 발급 비용을 제외한 나머지 생활비를 계산했더니 한 달간 쓴 돈이 한화로 60만원 조금 넘게
          나왔다. 아마 모두 합치면 100만원 안팎일 듯하다. 장을 보러 갈 때 일주일치 예산으로 20프랑(환율에 따라 2.5-3만원) 안팎을 책정했기에
          가능했으리라. 마음만 먹으면 더 줄일 수도 있다. 물가 세계 5위로 등극한 도시이지만 여기도 사람 사는 곳이다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine7} alt="" width={400} />
        </MagazineImage>
        <MagazineEditor style={{ fontWeight: 600 }}>봄.</MagazineEditor>
        <MagazineContent>
          당신이 보고 싶은지는 잘 모르겠다. 그러나 당신을 자주 떠올린다. 아무리 걸어도 한적한 거리, 좁은 방, 담벼락의 욕설, 나른한 고양이, 언제나처럼
          초라한 나의 피조물. 3월 중순, 이곳은 불규칙적으로 흐리며 이따금 눈과 비가 온다. 나는 이제 커피와 독한 술을 자주 찾지 않는다. 온종일 잠을
          자며 모든 같잖은 연락의 두절을 기원한다. 내가 나의 삶에 진심이 아닌 만큼 당신은 내가 크게 절실하지 않았을 것이다. 하늘과 대지가 뒤집힐 수
          있다면 날씨와 상관없이 이곳의 하늘로 낙하하는 마지막은 꽤나 근사하리라는 생각을 늘 한다.
        </MagazineContent>
        <MagazineSmallTitle>März 2023 – 넷째 보름</MagazineSmallTitle>
        <MagazineContent>
          3월 말, 서머타임이 끝나 한국과의 시차는 8시간에서 7시간으로 줄어들었지만 유의미한 차이는 아니다. 애초에 한국에 볼일이 남았다면 그건 그것대로
          문제일 것이다.
        </MagazineContent>
        <MagazineContent>
          스위스에는 호수와 산이 많다. 땅거미가 질 때쯤 취리히를 잠시 떠났다. 어둠이 내린 루체른의 호수는 아름답다. 취리히의 호수처럼 백조와 청둥오리,
          물닭 등이 유령처럼 고요히 수면을 부유한다. 거대한 호수이긴 해도 중앙역에서 시계 반대 방향으로 돈다면 기분을 상쾌하게 할 만큼 충분한 산책로를
          확보할 수 있다. 필라투스 산을 비롯한 알프스의 조각들이 만년설을 뒤집어쓴 채 멀찍이 도시를 내려다본다. 한때 깊은 필라투스 산속에 살며 나쁜
          기후를 부리던 용을 교황청에서 잡아갔더랬지, 그러나 아무도 그 용을 본 자는 없다고 한다. 지금은 필라투스를 오르내리는 케이블카 등에 새겨진
          심볼로서 방문객들의 기억 속에 남아 있다. 까마득한 세월 동안 살던 곳에서 끌려나와 누구도 위치를 모르는 바티칸의 지하 감옥에 홀로 잠들어 있을
          붉고 거대한 용을 상상해본다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine8} alt="" width={400} />
        </MagazineImage>
        <MagazineContent>
          낮에 방문한 바젤은 두 도시보다 조금 더 전통적이면서도 다채롭다는 인상이 강했다. 물가와 가깝다는 점은 다름없었으나 강변을 걸을 때 바로
          옆에서는 오래된 건축물이 가파른 곳에서 강을 내려다보고, 맞은편에서는 번화한 도심이 보이는 구도가 특이했다. 도시의 깊은 역사와 현대적
          인프라가 묘하게 어우러진 곳이었다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine9} alt="" width={600} />
        </MagazineImage>
        <MagazineContent>
          취리히에는 도심을 가로질러 남쪽의 커다란 호수로 흘러드는 강이 있다. 이곳에서는 누구나 수영을 하거나 발을 적실 수 있지만, 추위가 싫은 나는
          여름에서야 겨우 엄두를 낼 수 있을 것 같다. 섭씨 20도 안팎으로 기온이 오른 날에는 옷을 벗고 일광욕을 하거나 얕은 물속으로 뛰어드는 시민들이
          심심찮게 보인다. 강가 일부를 따라서 그래피티와 운동하는 사람들이 가득한 젊은 문화의 거리가 발달해 있다. 맞은편에는 80-90년대에 ‘바늘공원’,
          즉 유럽 전역에서 온 마약중독자들의 아지트로 유명했던 공원이 보인다. 지금은 놀라울 만큼 깨끗하고 평화롭지만 그런 역사를 떠올리면 세상 어느
          곳이든 평탄하기만 했던 장소는 없었음을 실감하곤 한다. 북쪽에서 남쪽으로 내려갈수록 거주민의 눈에만 겨우 띌 정도의 미약한 세대별 문화 차이가
          강가에 존재한다. 강을 중심으로 어느 편에서든 간단한 간식을 갖고 낮이나 밤에 난간에 걸터앉아 윤슬을 바라보는 행위만으로도 충분히 만족스럽다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine10} alt="" width={500} />
          <Image src={eugine11} alt="" width={300} />
        </MagazineImage>
        <MagazineContent>
          떠나온 지 네 번의 보름, 두 달이 훨씬 지나기도 전에 이미 이곳에 완전히 자리한 나로서는 당신에게 무엇을 보고해야 할지 알 수가 없다. 어떤
          면에서는 현실성을 상실했고 어떤 면에서는 그저 충실하게 살아갈 뿐이다. 누군가에게는 네 번의 계절만큼 큰 변화였을지 몰라도 내게는 기존보다
          편안한 안식처에 머무를 기회를 손에 넣은 것 그 이상 그 이하도 아니다. 이러한 익숙함이 낯설고 그만큼 얼마나 낯섦이 익숙한 감각이었는지
          체감한다.
        </MagazineContent>
        <MagazineImage>
          <Image src={eugine12} alt="" width={400} />
        </MagazineImage>
        <div style={{ borderBottom: "1px solid  black", marginTop: 20 }}></div>
      </MagazinePadding>
    </>
  );
}
