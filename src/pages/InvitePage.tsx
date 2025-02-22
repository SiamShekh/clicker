import { shareURL } from "@telegram-apps/sdk-react";
import WebApp from "@twa-dev/sdk";

const InvitePage = () => {
    const url = "https://t.me/siam";
    const text = "Please join";
    return (
        <div className="bg-white min-h-screen p-3 relative">
            <p className="text-center text-2xl pt-7 text-black font-bold">Invite frens <br />and get more CATS</p>
            <img src="https://static-00.iconduck.com/assets.00/cat-icon-2048x1429-ztz0gmhk.png" alt="cat" className="p-10" />
            <div className="bottom-5 absolute flex items-center justify-center flex-col">
                <p className="text-black/70 font-medium">Tap on the button to invite your friends</p>
                <button onClick={() => WebApp.openTelegramLink(`https://t.me/share/url?url=${url}&text=${text}
`)} className="bg-[#0A407B] rounded-lg font-medium p-2 w-full text-[#FAFCFF]">Invite frens</button>
            </div>
        </div>
    );
};

export default InvitePage;