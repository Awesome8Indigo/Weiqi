
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { useState, MouseEvent } from "react";

export default function GameSettings(): JSX.Element {
    const router = useRouter();

    const handleCreateGame = (event: MouseEvent<HTMLButtonElement>): void => {
        const randomString: string = Math.random().toString(36).substring(2, 10);
        router.push(`/${randomString}`);
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4">
            <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all" onClick={handleCreateGame}>
                Let's Play
            </button>
        </div>
    );
}
