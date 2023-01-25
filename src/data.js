//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiTwitter,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiPhoneCall
} from 'react-icons/fi';

// import icon form icon folder
import PlayImg from "./assets/img/icon/play.png"
import MacImg from "./assets/img/icon/machine.png"
import FingerImg from "./assets/img/icon/finger.png"
import EasyImg from "./assets/img/icon/easy.png"




// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/bootstrap.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation

export const featureIcon = [
  {
    icon: PlayImg,
    title: 'Play ing Img',
    description:"This is a demo purpose to lock the command we as nothing"
  },
  {
    icon: EasyImg,
    title: 'Easy ing Img',
    description:"This is a demo purpose to lock the command we as nothing"
  },
  {
    icon: MacImg,
    title: 'Machine ing Img',
    description:"This is a demo purpose to lock the command we as nothing"
  },
  {
    icon: FingerImg,
    title: 'Finger ing Img',
    description:"This is a demo purpose to lock the command we as nothing"
  },
]

export const navigation = [
  {
    name: 'Feature',
    href: 'Feature',
  },
  {
    name: 'Download',
    href: 'Download',
  },
  {
    name: 'login',
    href: 'Download',
  }
];

// social
export const social = [
  
  {
    icon: <FiFacebook  />,
    href: 'https://www.facebook.com/',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://pk.linkedin.com/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/syeddilawar4444',
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  // {
  //   img: BehanceBrandIcon,
  //   href: '',
  // },
  // {
  //   img: DribbbleBrandIcon,
  //   href: '',
  // },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'OLX APPLICATION',
    category: 'REact native',
    github:"https://www.github.com",
    view:"https://www.netlify.com/",

    description:"OLX Application is the my name is syed dilawar hussain with the real chat app Feature in teh machine to teh root we as nothing int her root we as nothien in tehr  "
  },
  {
    
    id: '2',
    image: Project2,
    name: 'project name 2',
    category: 'React native',
    
    description:"OLX Application is the my name is syed dilawar hussain with the real chat app Feature in teh machine to teh root we as nothing int her root we as nothien in tehr  "

  },
  {
    id: '3',
    image: Project3,
    name: 'project name 3',
    category: 'react js',
    description:"OLX Application is the my name is syed dilawar hussain with the real chat app Feature in teh machine to teh root we as nothing int her root we as nothing."

  },
  {
    id: '4',
    image: Project4,
    name: 'project name 4',
    category: 'react js',
    description:"OLX Application is the my name is syed dilawar hussain with the real chat app Feature in teh machine to teh root we as nothing int her root we as nothien in tehr  "
  },
  {
    id: '5',
    image: Project5,
    name: 'project name 5',
    category: 'web development',
    description:"OLX Application is the my name is syed dilawar hussain with the real chat app Feature in teh machine to teh root we as nothing int her root we as nothien in tehr  "

  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
    description:"OLX Application is the my name is syed dilawar hussain with the real chat app Feature in teh machine to teh root we as nothing int her root we as nothien in tehr  "

  },
];

// projects
export const projectsNav = [
  {
    name: 'All',
  },
  {
    name: 'web development',
  },
  {
    name: 'React Js',
  },
  {
    name: 'React Native',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
   {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Mobile Application',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a Question?',
    subtitle: 'I am here to help you Email me at.',
    description: 'syeddilawar4444@gmail.com',
    href:"mailto:syeddilawar4444@gmail.com"
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Serving Clients Worldwide',
    description: 'Karachi, Pakistan',
    // href:"app.js"
  },
  {
    icon: <FiPhoneCall />,
    // DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
    title: 'Discuss a Project',
    subtitle: 'My Inbox Is Open For All',
    description: '+92-3181195330',
    href:"tel:+92-3181195330"
  },
];
