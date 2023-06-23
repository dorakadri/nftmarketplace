import { binance,cardano,coinbase,paradigm ,nftone,nfttwo,nftthree,people01,people02,people03,instagram,facebook,linkedin,twitter, } from "../assets";
import { SlWallet,SlPuzzle,SlBag} from "react-icons/sl" ;
export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "LastDrops",
      title: "Last Drops",
    },
    {
      id: "top",
      title: "Top Creators",
    },
  ];

  export const stats = [
    {
      id: "stats-1",
      title: "User Active",
      value: "78K",
    },
    {
      id: "stats-2",
      title: "Artworks",
      value: "230K",
    },
    {
      id: "stats-3",
      title: "Artists",
      value: "2,5K",
    },
  ];

  export const clients = [
    {
      id: "client-1",
      logo: binance,
    },
    {
      id: "client-2",
      logo: cardano,
    },
    {
      id: "client-3",
      logo: coinbase,
    },
    {
      id: "client-4",
      logo: paradigm,
    },
  ];

  export const drops = [
    {
      id: "1drop",
      title:"evil Zoe",
      img: nftone,
      owner:"markinducil",
      ETH:"70.1",
    },
    {
      id: "2drop",
      img: nfttwo,
      title:"Ectoplasma",
      owner:"Benjamin Ramirez",
      ETH:"62.5",
    },
    {
      id: "3drop",
      img: nftthree,
      title:"blinded by the neon",
      owner:"Sophia Nguyen",
      ETH:"72.5",
    },
  
  ];

  export const top = [
    {
      id: "top1",
      img: people01,
      name: "Alpha Storm"
    },
    {
      id: "top2",
      img: people02,
      name: "Lunar Eclipse"
    },
    {
      id: "top3",
      img: people03,
      name: "Neon Dream"
    },
    {
      id: "top4",
      img: people01,
      name: "Silver Spectre"
    },
   
    {
      id: "top6",
      img: people03,
      name: "Cyber Pulse"
    },
    
  ];
  

export const Featuresapp =[
  {
    id: "wallet",
    Icon:  <SlWallet className="neon-purple-icon" />,
    title: "Connect wallet",
    content: "Looking for the latest releases? Or are retro classics more your thing? At Kyobi,. ",
  },
  {
    id: "marketplace",
    Icon:  <SlBag className="neon-purple-icon" />,
    
    title: "NFTS marketplace",
    content: "Looking for the latest releases? Or are retro classics more your thing? At Kyobi,. ",
  },
  {
    id: "collect",
    Icon:  <SlPuzzle className="neon-purple-icon" />,
    title: "Collect nfts",
    content: "Looking for the latest releases? Or are retro classics more your thing? At Kyobi,. ",
  },
]


export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.pixypulse.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.pixypulse.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.pixypulse.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.pixypulse.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.pixypulse.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.pixypulse.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.pixypulse.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.pixypulse.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.pixypulse.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.pixypulse.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.pixypulse.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.pixypulse.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/dorakadri/?hl=fr",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/da.dou.52438/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kadri-dorra-69536a175/",
  },
];
