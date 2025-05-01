'use client'
import {router} from "next/client";
import { useRouter } from 'next/navigation';


const GameMenu = () => {

    const router = useRouter();
  const handleJoinGame = () => {
    alert('You chose to Join a Game!');
    console.log('Redirecting to join game...');
    // Add further logic for joining a game (e.g., navigate to another page, show a form, etc.)
  };

  const handleCreateGame = () => {
      const randomString = Math.random().toString(36).substring(2, 10); // e.g. "f93jdlsk"
      router.push(`/${randomString}`);
  };

  return (
      <div className="menu">
          <div className="w-full max-w-md mx-auto p-4">
              <p className="text-center text-white px-6 py-3 w-ful transition-all">
                  Game Menu
              </p>
          </div>
          <div className="w-full max-w-lg mx-auto p-4">
              <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all" onClick={() => handleCreateGame()}>
                  Create Game
              </button>
          </div>
          <div className="w-full max-w-lg mx-auto p-4">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition-all" onClick={handleJoinGame}>
                  Join Game
              </button>
          </div>
      </div>
  );
};

export default GameMenu;