'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import SocialLoginButtons from '@/components/SocialLoginButtons'; // Create this component

const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await signIn("credentials", {
        redirect: false,
        mail: data.email,
        password: data.password,
      }).then(res => {
        if (res?.error) {
          setErrorMessage(res.error);
        }
      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold text-center">ログインページ</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" {...register('email', { required: true })} className="w-full mt-2 p-2 border rounded-md" />
            {errors.email && <p>メールアドレスを入力してください</p>}
          </div>
          <div>
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" {...register('password', { required: true })} className="w-full mt-2 p-2 border rounded-md" />
            {errors.password && <p>パスワードを入力してください</p>}
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded-md">ログイン</button>
        </form>
        <SocialLoginButtons />
      </div>
    </div>
  );
};

export default LoginPage;
