'use client';

import { LoginButton, LogoutButton } from "@/components/buttons";
import {useSession} from "next-auth/react";
import {NextAuthProvider} from "@/app/providers";

export default async function Home() {
    return (
        <NextAuthProvider>
            <ClientHome/>
        </NextAuthProvider>
    )
}

function ClientHome() {
    const {data: session} = useSession();
    const user = session?.user // ログインしていなければnullになる。

    return (
        <header className="text-3xl flex shrink-0 h-16 px-10 pt-2 justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
            <p className="not-italic font-normal leading-normal">Eventer</p>
            <div className="not-italic form-normal leading-normal">
                {user ? <LogoutButton/> : <LoginButton/>}
            </div>
         </header>
    );

}