"use client";
import Image from "next/image";
import YouTube from "react-youtube";
import magazineInfo from "../magazineInfo";

import { MainBanner, MainText, MainTextContainer, Dark, MagazinePadding, MagazineImage, MagazineEditor, MagazineTitle, MagazineContent } from "../../styled";
import megazine1main from "../../../public/magazine1main.jpg";
import { NodeNextRequest } from "next/dist/server/base-http/node";

export default function Home() {
  return (
    <>
      <MainBanner>
        <Image src={magazineInfo[3].mainImage} alt="" layout="fill"  />
      </MainBanner>
      
      <MagazinePadding>
        <MagazineEditor>{magazineInfo[3].editor}</MagazineEditor>
        <MagazineTitle>{magazineInfo[3].title}</MagazineTitle>
        <MagazineContent>
        추웠던 겨울이 지나고 다가온 봄은 몰래 오고 싶어도 곳곳에서 자신이 왔음이 퍼져 숨기지 못한다.
옷이 가벼워지고, 앙상했던 가지 끝 작게 초록이 보이기도 하고, 버스커버스커의 벚꽃 엔딩이 차트 역주행을 하는 모습을 보면 봄이 왔구나 한다.
필자는 새로운 해의 시작으로 1월 1일이 아닌, 봄이 다가오는 4월이 되어서야 본격적으로 새해를 맞은 것 같다고 느낀다.

        </MagazineContent>
        <MagazineContent>
        따뜻하고 살랑거리는 봄바람을 맞으며 걸으면 괜히 싱숭생숭해지고 오늘 마치 새로운 사랑에 빠지게 될 것만 같다.
이렇게 매년 ‘봄 타고’ 있는 필자처럼 새로운 사랑에 빠지는 상상을 하며 행복회로를 돌리게 되는 곡들을 모아봤다.

        </MagazineContent>
        <MagazineEditor style={{fontWeight:600}}>1.	airplane thoughts – dhruv</MagazineEditor>
        <MagazineImage>
          
        <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"DMmDSv-IIjQ"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            // autoplay: 1
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
        </MagazineImage>
        <MagazineContent>
        ‘나는 비행기 안에서 네 생각을 했어’ 가사로 시작하는 이 곡은 ‘double take’로 유명한 dhruv의 첫 번째 정규 앨범인 ‘rapunzel’에 수록된 곡이다. 상대방을 생각하며 붕 떠 있는 마음을 감미로운 보이스와 감성적인 가사로 잘 표현한 곡이다. 7월에 dhruv 단독 내한 공연이 있으니 참고하길.
        </MagazineContent>
        <MagazineEditor style={{fontWeight:600}}>2.	Lost in Japan – Shawn Mendes</MagazineEditor>

        <MagazineImage>
        <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"ycy30LIbq4w"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            // autoplay: 1
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
        </MagazineImage>
        <MagazineContent>
        ‘너를 볼 수만 있다면 그게 멀더라도 한번에 날아갈거야’ 라는 내용의 Lost in Japan은 필자에게 벚꽃 엔딩처럼 죽지 않고 봄마다 돌아오는 곡이다. 실제로 벚꽃 놀이를 하며 상대방과 많이 들었던 곡으로, 비록 벚꽃 시즌은 끝났지만 지금 연인이 있다면 에어팟 한 쪽씩 끼고 가사처럼 ‘오늘밤 함께하자’고 말하길 추천한다.
        </MagazineContent>
        <MagazineEditor style={{ fontWeight: 600 }}>3.	how deep? – Tai Verdes</MagazineEditor>
        <MagazineImage>
        <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"RqBA1JaOQ78"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            // autoplay: 1
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
        </MagazineImage>
        <MagazineContent>
        저기요?에서 연인으로까지 발전하는 모습을 그린 곡으로 그때의 모습을 생각하며 피식 웃게 되는 곡이다. ‘너에게 빠지는 게 이렇게 깊을 줄 누가 알았겠어’라는 가사로 언제부터 인가 상대방에게 완전히 물들어버리게 된 상황을 표현한 곡이다. 올해 서재페로 내한하니 참고하길 바란다.
        </MagazineContent>
        <MagazineEditor style={{ fontWeight: 600 }}>4.	Feel Something – Fiji Blue</MagazineEditor>
        <MagazineImage>
        <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"RzUVuTdiLtc"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            // autoplay: 1
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
        </MagazineImage>
        <MagazineContent>
          ‘우린 어쩌다 이렇게 멀어져 버리게 된 걸까’라는 내용의 슬픈 곡이지만, 필자는 아이러니하게도 새로운 사랑에 빠지는 생각을 하며 듣고 있는 경쾌한 무드의 음악이다. 지난 11월에 진행한 내한 공연에서 라이브로 들은 곡 중 best 였으며, 봄 내음을 느끼기 딱 좋은 곡이라고 생각한다.
        </MagazineContent>
        <MagazineEditor style={{ fontWeight: 600 }}>5.	Sunshine – KYLE, Miguel</MagazineEditor>
        <MagazineImage>
        <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"_hDZtHqtaTw"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            // autoplay: 1
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
        </MagazineImage>
        <MagazineContent>
          시작하자마자 미구엘의 독특한 보이스와 함께 통통튀는 곡으로, 운전할 때 창문을 내리고 따뜻한 봄 바람을 느끼며 만한 곡이다. 펑키한 바이브에 ‘날도 풀렸는데 차 몰고 여행갈까?’라는 충동이 들게 하는 곡이다.
        </MagazineContent>
        <MagazineEditor style={{ fontWeight: 600 }}>6.	Said it all– ASTN</MagazineEditor>
        <MagazineImage>
        <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"9PshqzsyOf4"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            // autoplay: 1
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
        </MagazineImage>
        <MagazineContent>
        처음 곡을 듣고, Lauv 신곡인가?라는 생각으로 가던 길을 멈추고 Shazam을 켰던 노래이다. 잔잔한 기타 사운드에 뭉게뭉게 한 구름 위로 올라가는 듯한 느낌으로 괜히 싱숭생숭하게 만드는 곡이기에 넣어봤다.        </MagazineContent>
        <MagazineEditor style={{ fontWeight: 600 }}>7.	Single (on the weekend) – marcos g</MagazineEditor>
        <MagazineImage>
        <YouTube
        //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
        videoId={"5XSwsiVm8Kk"}
        //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
        //밑에서 더 설명하겠습니다.
        opts={{
          width: "560",
          height: "315",
          playerVars: {
            // autoplay: 1
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
        </MagazineImage>
        <MagazineContent>
          매주 새로운 연인을 만나며 주말만 되면 Single이 되는 상대방에 관한 내용으로, 인기가 넘치는 그녀를 짝사랑한다는 클리셰 장면이 저절로 떠오르는 곡이다. 배경으로 깔리는 멜로디는 마치 봄바람을 맞고 있는 듯한 느낌을 준다.
        </MagazineContent>
        <div style={{ borderBottom: "1px solid black", marginTop: 20 }}></div>
          <a href="https://open.spotify.com/playlist/1yACAdy8MjzG71aSuEwak6?si=7c23373349de4b61" style={{ fontSize: 30,textDecoration:"none",marginLeft:50, color: "green" }}>
            spotify plalylist
        </a>
        <a href="https://music.youtube.com/playlist?list=PLxZXaUW2hTmtvK4pu1Y53aX1I10HR8Nrd&feature=share" style={{ fontSize: 30, textDecoration:"none",marginLeft:200 ,color: "red" }}>
            youtube music plalylist
          </a>
      
      </MagazinePadding>
      
    </>
  );
}
