import { useState } from 'react';
import type { IconType } from 'react-icons';

interface IconWithMessageProps {
  Icon: IconType;
  message: string;
  position: {
    top: string;
    left: string;
  };
  color: string;
  size: string;
  rotation: string;
  animationDelay: string;
}

const IconWithMessage = ({ 
  Icon, 
  message, 
  position, 
  color, 
  size, 
  rotation,
  animationDelay
}: IconWithMessageProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  return (
    <div 
      className="absolute z-10" 
      style={{ 
        top: position.top, 
        left: position.left,
        animationDelay: animationDelay
      }}
    >
      <button
        onClick={toggleMessage}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${color} transform ${rotation} hover:scale-125 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 rounded-full p-2 animate-float cursor-pointer`}
        aria-label={showMessage ? "Hide message" : "Show message"}
        style={{ animationDelay: animationDelay }}
      >
        <Icon size={size} />
      </button>
      
      {showMessage && (
        <div className="absolute z-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl mt-3 w-56 transform -translate-x-1/2 left-1/2 text-center border border-pink-200 animate-fade-in">
          <p className="text-gray-800 text-sm font-medium leading-relaxed">{message}</p>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-pink-200 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default IconWithMessage;