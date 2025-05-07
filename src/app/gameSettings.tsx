
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { useState, MouseEvent } from "react";
import { Checkbox } from "@material-tailwind/react";
import ToggleSwitch from "@/Components/ToggleSwitch/ToggleSwitch";

export default function GameSettings(): JSX.Element {
    const router = useRouter();

    const handleCreateGame = (event: MouseEvent<HTMLButtonElement>): void => {
        const randomString: string = Math.random().toString(36).substring(2, 10);
        router.push(`/${randomString}`);
    };

    return (
        <>
            <div>
                <div className="w-full max-w-lg mx-auto p-4">
                    <button
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                        onClick={handleCreateGame}
                    >
                        Let's Play
                    </button>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                        <ToggleSwitch
                            options={["1", "2", "3", "4", "5"]}
                            defaultOption={"1"}
                            buttonPadding_X={10}
                            buttonPadding_Y={10}
                            containerWidth={100}
                            containerHeight={50}
                            fontsize={30}
                            orientation="vertical"
                            className="flex items-center justify-center min-h-screen w-full"
                        />
                    </div>
                </div>
                <span className="ml-2 flex justify-center">time limit</span>
                <div className="w-full max-w-sm min-w-[200px] flex justify-center mx-auto mt-4">
                    <input 
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
                        placeholder="Type here..."
                    />
                </div>
            </div>
        </>
    );
}
