import thumbnail0 from "../../public/thumbnail0.jpg";
import thumbnail1 from "../../public/thumbnail1.png";
import mainImage0 from "../../public/magazine1main.jpg";
import mainImage1 from "../../public/mainImage1.png";
import thumbnail2 from '../../public/thumbnail2.jpg';
import mainImage2 from "../../public/mainImage2.png";
import thumbnail3 from '../../public/thumbnail3.jpeg';
import mainImage3 from '../../public/mainImage3.png'


type MagazineType = {
  id: number;
  title: string;
  content: string;
  editor: string;
  thumbnail?: any;
  mainImage?: any;
};

const magazineInfo: MagazineType[] = [
  {
    id: 0,
    title: "달이 네 번 기울고 차는 것을 지구 반대편에서 바라보기",
    content: "",
    editor: "정유진",
    thumbnail: thumbnail0,
    mainImage: mainImage0,
  },

  { id: 1, title: "4월, 4라진 봄, 4가지 아이템", content: "", editor: "진우", thumbnail: thumbnail1, mainImage: mainImage1 },
  { id: 2, title: "그 4명은 무엇을 기다리고 있을까", content: "", editor: "유상" ,thumbnail:thumbnail2,mainImage:mainImage2},
  { id: 3, title: "4월, 듣다 보면 어느새 사랑에 빠져 있는 플레이리스트", content: "", editor: "앤디" ,thumbnail:thumbnail3,mainImage:mainImage3},
];

export default magazineInfo;
