import LocalPoliceRoundedIcon from '@mui/icons-material/LocalPoliceRounded';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import Face3OutlinedIcon from '@mui/icons-material/Face3Outlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import { Facebook, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const featuresData=[
    {
        id:1,
        label:"BEST QUALITY",
        icon:LocalPoliceRoundedIcon,
        desc:'Real state agents are Property of land the building on it, on with its'
    },
    {
        id:2,
        label:"LARGE PLAYGROUND",
        icon:GrassOutlinedIcon,
        desc:'Real state agents are Property of land the building on it, on with its'
    },
    {
        id:3,
        label:"GOOD NEIGHBOR    ",
        icon:Face3OutlinedIcon,
        desc:'Real state agents are Property of land the building on it, on with its'
    },
    {
        id:4,
        label:"GOOD SECURITY",
        icon:EmojiPeopleOutlinedIcon,
        desc:'Real state agents are Property of land the building on it, on with its'
    },
    {
        id:5,
        label:"FURNITURE QUALITY",
        icon:ChairOutlinedIcon,
        desc:'Real state agents are Property of land the building on it, on with its'
    },
    {
        id:6,
        label:"SWIMMING POOL",
        icon:PoolOutlinedIcon,
        desc:'Real state agents are Property of land the building on it, on with its'
    },
]

const HeaderImages=[
    {
        id:'img-1',
        img:'https://images.unsplash.com/photo-1616137356540-b13b2a04a507?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80'
    },
    {
        id:'img-2',
        img:'https://images.unsplash.com/photo-1611216212569-d739dbe9ed40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
    },
    {
        id:'img-3',
        img:'https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
    },
]

const slide1=[
    {
        id:'img_1',
        img:'https://images.unsplash.com/photo-1584738766473-61c083514bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address:'c/3, New Delhi'
    },
    {
        id:'img_2',
        img:'https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
        address:'c/3, New Delhi'
    },
    {
        id:'img_3',
        img:'https://images.unsplash.com/photo-1607567618395-62fc2d132c3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
        address:'c/3, New Delhi'
    },
]
const slide2=[
    {
        id:'img_1',
        img:'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
        address:'c/3, New Delhi'
    },
    {
        id:'img_2',
        img:'https://images.unsplash.com/photo-1564703048291-bcf7f001d83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        address:'c/3, New Delhi'
    },
    {
        id:'img_3',
        img:'https://images.unsplash.com/photo-1563720223809-b9a3d1694e2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        address:'c/3, New Delhi'
    },
]
const slide3=[
    {
        id:'img_1',
        img:'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address:'c/3, New Delhi'
    },
    {
        id:'img_2',
        img:'https://images.unsplash.com/photo-1604210565264-8917562a63d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        address:'c/3, New Delhi'
    },
    {
        id:'img_3',
        img:'https://images.unsplash.com/photo-1594010017798-de9448e9b198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        address:'c/3, New Delhi'
    },
]

const socialIcons=[
    {
      id:1,
      icon:Twitter,
    },
    {
      id:2,
      icon:Facebook,
    },
    {
      id:3,
      icon:Instagram,
    },
    {
      id:4,
      icon:LinkedIn,
    },
  ]
  
export {featuresData, HeaderImages, slide1, slide2, slide3, socialIcons}