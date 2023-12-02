"use client";

import {signIn, signOut} from "next-auth/react";

// ログインボタン
export const LoginButton = () => {
    return (
        <button type="button" className="text-5xl"  onClick={() => signIn()}>
            Sign in
        </button>
    );
};

// ログアウトボタン
export const LogoutButton = () => {
    return (
        <button type="button" className="text-5xl" onClick={() => signOut()}>
            Sign Out
        </button>
    );
};