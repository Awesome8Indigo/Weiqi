
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { useState, MouseEvent } from "react";
import { Checkbox } from "@material-tailwind/react";

export default function GameSettings(): JSX.Element {
    const router = useRouter();

    const handleCreateGame = (event: MouseEvent<HTMLButtonElement>): void => {
        const randomString: string = Math.random().toString(36).substring(2, 10);
        router.push(`/${randomString}`);
    };

    return (
        <>
            <div className="w-full max-w-lg mx-auto p-4">
                <button
                    className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                    onClick={handleCreateGame}
                >
                    Let's Play
                </button>

                <div className="flex justify-center items-center my-4">
                    <Checkbox
                        defaultChecked
                        ripple={false}
                        className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" 
                        onPointerEnterCapture={undefined} 
                        onPointerLeaveCapture={undefined} 
                        crossOrigin={undefined}
                />
                
                </div> {/* time limit */}
                <span className="ml-2">timeLimit</span>
                <div className="w-full max-w-sm min-w-[200px]">
                    <input 
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
                        placeholder="Type here..."
                    />
                </div>
            </div>
        </>
    );
}
