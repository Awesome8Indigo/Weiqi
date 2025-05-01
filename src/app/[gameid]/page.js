'use client';

import {useParams} from "next/navigation";

// render game class from api

export default function gameplay (){
        const params = useParams();
        const gameId = params.gameid // 👈 this is your random string

        return (
            <div className="p-6">
                <h1 className="text-xl font-bold">Game ID: {gameId}</h1>
            </div>
        );

}