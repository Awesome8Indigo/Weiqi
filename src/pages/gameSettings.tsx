import { JSX } from "react";
import { useState, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import { Checkbox } from "@material-tailwind/react";
import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import Game from "./api/game";

export default function GameSettings(): JSX.Element {
    const [username, setUsername] = useState("user1");
    const [time, setTime] = useState(15);
    const [byoYomiPeriods, setByoYomiPeriods] = useState(0);
    const [byoYomiTime, setByoYomiTime] = useState(0);
    const [komi, setKomi] = useState(6.5);
    const [size, setSize] = useState([19, 19]);
    const [scoringSystem, setScoringSystem] = useState("japanese");
    const router = useRouter(); 
    const handleCreateGame = (event: MouseEvent<HTMLButtonElement>): void => {
        const randomString: string = Math.random().toString(36).substring(2, 10);
        router.push(`/${randomString}`);
        const game = new Game([username, null], time, byoYomiTime, byoYomiPeriods, komi, size, scoringSystem, randomString);
    };

    return (
        <div className="min-h-screen flex flex-col bg-slate-900">
            {/* Vertically centered username and button */}
            <div className="flex-1 flex flex-col justify-center items-center">
                <span className="ml-2 flex justify-center items-center text-white">username:</span>
                <div className="w-full max-w-sm min-w-[200px] flex justify-center mx-auto mt-4">
                    <input 
                        className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-700 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-sm focus:shadow" 
                        placeholder="Type here..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="w-full max-w-lg mx-auto p-4 flex justify-center">
                    <button
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
                        onClick={handleCreateGame}
                    >
                        Let's Play
                    </button>
                </div>
            </div>
            {/* Scrollable settings below */}
            <div className="overflow-y-auto max-h-[50vh] px-2 pb-8 border-t border-slate-700">
                <div className={"flex flex-col justify-center items-center pt-8 text-gray-700"}>
                    <ToggleSwitch
                        options={["9x9", "13x13", "19x19"]}
                        value={size[0] + "x" + size[1]}
                        onChange={(val) => {
                            if(val == "9x9") setSize([9, 9]);
                            else if(val == "13x13") setSize([13, 13]);
                            else if(val == "19x19") setSize([19, 19]);
                        }}
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
                <div className={"flex flex-col justify-center items-center py-8 text-gray-700"}>
                    <ToggleSwitch
                        options={["japanese", "chinese"]}
                        value={scoringSystem}
                        onChange={setScoringSystem}
                        buttonPadding_X={10}
                        buttonPadding_Y={10}
                        containerWidth={200}
                        containerHeight={50}
                        fontsize={20}
                        orientation="horizontal"
                        group="scoring-group"
                    />
                </div>
                <span className="ml-2 flex justify-center text-white">time limit</span>
                <div className="w-full max-w-sm min-w-[200px] flex justify-center mx-auto mt-4">
                    <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-700 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-sm focus:shadow"
                        placeholder="Type here..."
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={time}
                        onChange={(e) => {
                            const val = Math.abs(parseInt(e.target.value.replace(/[^0-9]/g, ""), 10));
                            setTime(Number.isNaN(val) || val === 0 ? 1 : val);
                        }}
                    />
                </div>
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8">
                    <div className="flex flex-col items-center w-full max-w-xs">
                        <span className="ml-2 flex justify-center text-white">byo-yomi</span>
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-700 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-sm focus:shadow mt-2"
                            placeholder="Periods"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={byoYomiPeriods}
                            onChange={(e) => {
                                const val = Math.abs(parseInt(e.target.value.replace(/[^0-9]/g, ""), 10));
                                setByoYomiPeriods(Number.isNaN(val) ? 0 : val);
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center w-full max-w-xs">
                        <span className="ml-2 flex justify-center text-white">byo-yomi time (s)</span>
                        <input
                            className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-700 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-sm focus:shadow mt-2"
                            placeholder="Seconds"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={byoYomiTime}
                            onChange={(e) => {
                                const val = Math.abs(parseInt(e.target.value.replace(/[^0-9]/g, ""), 10));
                                setByoYomiTime(Number.isNaN(val) ? 0 : val);
                            }}
                        />
                    </div>
                </div>
                <span className="ml-2 flex justify-center pt-8 text-white">komi</span>
                <div className="w-full max-w-sm min-w-[200px] flex justify-center mx-auto mt-4">
                    <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-700 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-600 shadow-sm focus:shadow"
                        placeholder="Type here..."
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9.]*"
                        value={komi}
                        onChange={(e) => {
                            const val = Math.abs(parseFloat(e.target.value.replace(/[^0-9.]/g, "")));
                            setKomi(Number.isNaN(val) ? 6.5 : val);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
