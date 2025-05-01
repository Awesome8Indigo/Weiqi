'use client'
import {router} from "next/client";
import { useRouter } from 'next/navigation';
import {useState} from "react";

const GameSettings = () => {
    const router = useRouter(); // Correct hook usage here
    const handleCreateGame = () => {
        const randomString = Math.random().toString(36).substring(2, 10); // Generate game ID
        router.push(`/${randomString}`);
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4">
            <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all" onClick={handleCreateGame}>
                Let's Play
            </button>
        </div>
    );
};

const GameMenu = () => {
    const [game, setGame] = useState(false);
    const router = useRouter();
    const handleJoinGame = () => {
        router.push('/join')
        // Add further logic for joining a game (e.g., navigate to another page, show a form, etc.)
    };
    if (game) {
        return (
          gameSettings()
        );
    }
    return (
        <div className="menu">
            <div className="w-full max-w-md mx-auto p-4">
                 <p className="text-center text-white px-6 py-3 w-ful transition-all">
                    Game Menu
                 </p>
            </div>
            <div className="w-full max-w-lg mx-auto p-4">
                <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all" onClick={() => setGame(true)}>
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