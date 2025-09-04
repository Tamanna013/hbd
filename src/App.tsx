import { 
  FaHeart, 
  FaSpa, 
  FaCanadianMapleLeaf, 
  FaSnowflake, 
  FaSun, 
  FaStar 
} from 'react-icons/fa';
import { GiFlowerEmblem, GiFlowerPot, GiFlowerStar, GiRose } from 'react-icons/gi';
import IconWithMessage from './components/IconWithMessage';
import HeroText from './components/HeroText';
import { generateRandomIcons } from './utils/iconGenerator';

import { useMemo } from 'react';

function App() {
  // Generate icons once when component mounts
  const icons = useMemo(() => generateRandomIcons(25), []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Hero Text - Centered */}
      <HeroText />

      {/* Scattered Icons */}
      <main className="relative w-full min-h-screen">
        {icons.map((icon) => (
          <IconWithMessage
            key={icon.id}
            Icon={icon.Icon}
            message={icon.message}
            position={icon.position}
            color={icon.color}
            size={icon.size}
            rotation={icon.rotation}
            animationDelay={icon.animationDelay}
          />
        ))}
      </main>
    </div>
  );
}

export default App;