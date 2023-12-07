'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import SocialLoginButtons from '@/components/SocialLoginButtons'; // Create this component

const LoginPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold text-center">ログインページ</h1>
        <SocialLoginButtons />
      </div>
    </div>
  );
};

export default LoginPage;
