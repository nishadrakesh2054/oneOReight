import p1 from "../../assets/portfolio/p1.png";
import p2 from "../../assets/portfolio/p2.png";
import p3 from "../../assets/portfolio/p3.png";
import tdc from "../../assets/portfolio/tdc.jpeg";
import p4 from "../../assets/portfolio/vidya.png";
import p5 from "../../assets/portfolio/p1.png";
import video from "../../assets/portfolio/compVideo.mp4";
import tdclogo from "../../assets/portfolio/thunderboltslogo.png";

const portfolioItems = [
  {
    id: 1,
    img: tdc,
    logo: tdclogo,
    website: p5,
    client: "Thunderbolts Development Center",
    work: "Branding & Strategy",

    description:
      "Thunderbolts Development Center is a youth-focused sports and education platform. We provided end-to-end branding, web development, merchandise, and promo videos to elevate their identity.",
    videos: video,

    // images: [p1, p2, p3, p4, p5, tdc],
    images: [
        { src: p1, title: "Websites", link: "https://example.com/p1" },
        { src: p2, title: "Video", link: "https://example.com/p2" },
        { src: p3, title: "Social Media Posters", link: "https://example.com/p1" },
        { src: p4, title: "Event Banner", link: "https://example.com/p2" },
        { src: p5, title: "Social Media Posters", link: "https://example.com/p1" },
        { src:tdc, title: "Event Banner", link: "https://example.com/p2" },
      
      ]
      
  },
  { id: 2, img: p1, client: "Gaadi Charge", work: "Tech Solutions" },
  { id: 3, img: p2, client: "GEMS School", work: "Multimedia Services" },
  { id: 4, img: p3, client: "Thunderbolts Football Club", work: "Branding" },
  {
    id: 5,
    img: p4,
    client: "Nepal School Football League",
    work: "Merchandising",
  },
  { id: 6, img: p5, client: "PARO Football Club", work: "Tech Solutions" },
  { id: 7, img: tdc, client: "Avya Club", work: "Branding & Strategy" },
  { id: 8, img: p1, client: "Helios Hospital", work: "Tech Solutions" },
  { id: 9, img: p2, client: "EduMart", work: "Multimedia Services" },
];
export default portfolioItems;
