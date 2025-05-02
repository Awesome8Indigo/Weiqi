'use client';
import { JSX } from "react";
import { useParams } from "next/navigation";

export default function Gameplay(): JSX.Element {
        const params = useParams() as { gameid: string };
        const gameId: string = params.gameid;

        return (
            <div className="p-6">
                    <h1 className="text-xl font-bold">Game ID: {gameId}</h1>
            </div>
        );
}
