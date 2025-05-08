import { useRouter } from "next/navigation";
import { JSX } from "react";
import { useState, MouseEvent } from "react";
import { Checkbox } from "@material-tailwind/react";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";

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
                    <div className={"flex flex-col justify-center items-center py-8 text-black"}> {/* Added flex flex-col */}
                        <ToggleSwitch
                            options={["japanese", "chinese"]}
                            defaultOption={"japanese"}
                            buttonPadding_X={10}
                            buttonPadding_Y={10}
                            containerWidth={200}
                            containerHeight={50}
                            fontsize={20}
                            orientation="horizontal"
                            className="flex items-center justify-center w-full"
                            group="scoring-group"
                        />
                    </div>
                    <p>scoring system</p>

                </div>
                <span className="ml-2 flex justify-center">time limit</span>
                <div className="w-full max-w-sm min-w-[200px] flex justify-center mx-auto mt-4">
                    <input 
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" 
                        placeholder="Type here..."
                    />
                </div>

                <span className="ml-2 flex justify-center pt-8">byo-yomi</span>
                <div className="w-full max-w-sm min-w-[200px] flex justify-center mx-auto mt-4">
                    <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Type here..."
                    />
                </div>

                <span className="ml-2 flex justify-center pt-8">komi</span>
                <div className="w-full max-w-sm min-w-[200px] flex justify-center mx-auto mt-4">
                    <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Type here..."
                    />
                </div>

                <div className={"flex flex-col justify-center items-center pt-8 text-black"}> {/* Added flex flex-col */}
                    <ToggleSwitch
                        options={["9x9", "13x13", "19x19"]}
                        defaultOption={"9x9"}
                        buttonPadding_X={10}
                        buttonPadding_Y={10}
                        containerWidth={220}
                        containerHeight={50}
                        fontsize={20}
                        group="size-group"
                        orientation="horizontal"
                        className="flex items-center justify-center w-full"

                    />
                </div>
            </div>
        </>
    );
}