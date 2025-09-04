import { 
  FaHeart, 
  FaSpa
} from 'react-icons/fa';
import { 
  GiFlowerEmblem, 
  GiFlowerPot, 
  GiFlowerStar, 
  GiRose,
  GiDaisy,
  GiSunflower
} from 'react-icons/gi';

const flowerAndHeartIcons = [
  FaHeart,
  FaSpa,
  GiFlowerEmblem,
  GiFlowerPot,
  GiFlowerStar,
  GiRose,
  GiDaisy,
  GiSunflower
];

const heartMessages = [
  "You are my favorite hello and hardest goodbye.",
  "I fall for you a little more every day.",
  "My heart races when I see your name pop up.",
  "You are my safe place.",
  "Loving you feels like breathing",
  "You are my best decision ever.",
  "Every love song makes sense because of you.",
  "You make ordinary moments magical.",
  "You are the dream I never want to wake up from.",
  "My heart belongs to you, always."
];

const flowerMessages = [
  "Just reminding you—I love you.",
  "You are my favorite person.",
  "Being with you feels like home.",
  "You + me = perfect.",
  "You are my whole heart.",
  "Loving you is effortless.",
  "You are the best part of my life.",
  "My heart is yours, no refunds.",
  "I am addicted to your love.",
  "I will always choose you."
];

const colors = [
  "text-red-500",
  "text-pink-500",
  "text-rose-500",
  "text-purple-500",
  "text-violet-500",
  "text-indigo-500",
  "text-blue-500",
  "text-green-500",
  "text-emerald-500",
  "text-yellow-500",
  "text-orange-500",
  "text-red-400",
  "text-pink-400",
  "text-purple-400"
];

const sizes = ["1.5rem", "1.8rem", "2rem", "2.2rem", "2.5rem"];
const rotations = ["rotate-0", "rotate-12", "-rotate-12", "rotate-6", "-rotate-6", "rotate-45", "-rotate-45"];

// Generate random position ensuring icons don't overlap with center text area
const generateRandomPosition = () => {
  const centerX = 50;
  const centerY = 50;
  const exclusionRadius = 25; // Percentage radius around center to avoid
  
  let x, y;
  do {
    x = Math.random() * 90 + 5; // 5% to 95% to avoid edges
    y = Math.random() * 90 + 5;
  } while (
    Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)) < exclusionRadius
  );
  
  return {
    top: `${y}%`,
    left: `${x}%`
  };
};

export const generateRandomIcons = (count: number = 20) => {
  const icons = [];
  
  for (let i = 0; i < count; i++) {
    const IconComponent = flowerAndHeartIcons[Math.floor(Math.random() * flowerAndHeartIcons.length)];
    const isHeart = IconComponent === FaHeart;
    const messages = isHeart ? heartMessages : flowerMessages;
    
    icons.push({
      id: i,
      Icon: IconComponent,
      message: messages[Math.floor(Math.random() * messages.length)],
      position: generateRandomPosition(),
      color: colors[Math.floor(Math.random() * colors.length)],
      size: sizes[Math.floor(Math.random() * sizes.length)],
      rotation: rotations[Math.floor(Math.random() * rotations.length)],
      animationDelay: `${Math.random() * 3}s`
    });
  }
  
  return icons;
};
