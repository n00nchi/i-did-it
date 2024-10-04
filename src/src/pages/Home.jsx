import React from 'react';

const Home = () => {
  const today = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div style={{ background: '#FEEBD4' }} className='h-screen flex flex-col items-center p-4 font-mono'>
      {/* Header */}
      <header className="w-full flex justify-between items-center py-4">
        <div className="flex items-center">
          <img
            src="src/assets/rocket.jpeg"
            alt="Rocket Logo"
            className="w-24 h-24 mr-2"
          />
          <div>
            <h1 className="text=2xl font-bold text-black">i-did-it</h1>
            <p className="text-red-500 italic">A place to remember everyday.</p>
          </div>
        </div>
        <div className="text-black text-lg mr-8">{today}</div>
      </header>
      {/* Main Section */}
      <main className="flex flex-col items-center mt-8">
        <h2 style={{ background: '#1BB5DB' }} className="text-white text-xl rounded-full px-4 py-2">
          What did you do today, username?
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center">
            <img
              src="src/assets/rocket.jpeg"
              alt="Rocket Icon"
              className="w-12 h-12 mr-2"
            />
            <span>had coffee with my girlfriend.</span>
          </li>
          <li className="flex items-center">
            <img
              src="src/assets/rocket.jpeg"
              alt="Rocket Icon"
              className="w-12 h-12 mr-2"
            />
            <span>dyed my hair purple.</span>
          </li>
          <li className="flex items-center">
            <img
              src="src/assets/rocket.jpeg"
              alt="Rocket Icon"
              className="w-12 h-12 mr-2"
            />
            <span>created a new MERN project.</span>
          </li>
          <li className="flex items-center">
            <img
              src="src/assets/rocket.jpeg"
              alt="Rocket Icon"
              className="w-12 h-12 mr-2"
            />
            <span>got my first freelance client.</span>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home
