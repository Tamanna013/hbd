const HeroText = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-5">
      <div className="text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-4 animate-pulse-slow">
          Happy Birthday Love
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Wishing you a day filled with love, joy, and all the beautiful moments that make life special. You are my sunshine and my heart's delight. Here's to celebrating you today and always!
        </p>
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
