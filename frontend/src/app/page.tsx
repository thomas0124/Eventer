import { LoginButton, LogoutButton } from "@/app/components/buttons";
import {getServerSession} from "next-auth/next";
import {options} from "@/app/options";

export default async function Home() {
    const session = await getServerSession(options)
    const user = session?.user // ログインしていなければnullになる。

    return (
        <header className="flex font-mono w-1440 h-85 p-10 md:p-25 justify-between items-center flex-shrink-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
            <p className="text-6xl not-italic font-normal leading-normal">Eventer</p>
            <div className="flex flex-col items-start gap-20">
                {user ? <LogoutButton/> : <LoginButton/>}
            </div>
        </header>
    );
}
