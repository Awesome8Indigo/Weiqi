'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JoinPage() {
    const [gameId, setGameId] = useState('');
    const router = useRouter();

    const handleJoin = () => {
        if (gameId.trim()) {
            router.push(`/${gameId}`);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h1 className="text-2xl font-bold">Join a Game</h1>
            <input
                type="text"
                placeholder="Enter Game ID"
                value={gameId}
                onChange={(e) => setGameId(e.target.value)}
                className="border px-4 py-2 rounded"
            />
            <button
                onClick={handleJoin}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Join Game
            </button>
        </div>
    );
}