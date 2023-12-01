"use client";

import {signIn, signOut} from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
    return (
        <button type="button" className="text-5xl hover:from-pink-500 hover:to-yellow-500 ..."  onClick={() => signIn()}>
            Sign in
        </button>
    );
};

// ログアウトボタン
export const LogoutButton = () => {
    return (
        <button type="button" className="text-5xl bg-hover:from-pink-500 hover:to-yellow-500 ..." onClick={() => signOut()}>
            Sign Out
        </button>
    );
};