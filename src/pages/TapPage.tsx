import { setMiniAppHeaderColor } from "@telegram-apps/sdk-react";
import cloud from "../assets/clouds.png";
import bitcoin from "../assets/bitcoin.png";
import { useState } from "react";

const TapPage = () => {
    setMiniAppHeaderColor("#319BC0");
    const [tapCount, setTap] = useState(0);

    const tap = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        setTap(tapCount + 1);
        const top = event.clientY;
        const left = event.clientX;

        const p = document.createElement("p");
        p.className = `bg-black/10 w-fit px-4 py-1 rounded-full backdrop-blur-lg border z-50`;
        p.innerText = `20 TAP`;

        p.style.position = "absolute";
        p.style.top = `${top}px`;
        p.style.left = `${left}px`;

        const parent = document.getElementById("parents");

        parent?.appendChild(p);

        setTimeout(() => {
            parent?.removeChild(p);
        }, 200);
    }

   

    return (
        <div className="max-h-screen min-h-screen relative overflow-hidden">
            <img src={cloud} alt="img" className="absolute inset-0 z-0" />
            <div id="parents" className="relative inset-0 z-10 p-3 h-screen">
                <div className="flex justify-between items-center">
                    <div className="flex items-center bg-[#181201] rounded-2xl h-10 relative overflow-hidden p-1">
                        <div className="size-8 bg-white/30 flex justify-center items-center font-bold rounded-full">SI</div>
                        <p className="font-medium text-xl ml-3 p-2 text-white">{tapCount}</p>
                    </div>

                    <div onClick={() => setTap(0)} className="bg-[#181201] cursor-pointer h-10 px-5 flex justify-center items-center font-medium rounded-2xl">Claim</div>
                </div>

                {/* <p className="bg-black/10 w-fit px-4 py-1 rounded-full backdrop-blur-lg border absolute z-50 top-[454px] left-[210px]">20 TAP</p> */}
                <img onClick={(event) => tap(event)} src={bitcoin} alt="bitcoin" className="size-64 left-[50%] -translate-x-[50%] absolute bottom-10" />
            </div>
        </div>
    );
};

export default TapPage;