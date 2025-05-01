import {useRouter} from "next/navigation";
import {useState} from "react";

export default function gameSettings() {
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