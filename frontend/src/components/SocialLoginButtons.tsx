// components/SocialLoginButtons.tsx

import { signIn } from 'next-auth/react';

const SocialLoginButtons = () => {
  const handleGoogleSignIn = async () => {
    await signIn('google', { callbackUrl: '/'});
  };

  const handleGitHubSignIn = async () => {
    await signIn('github', { callbackUrl: '/'});
  };

  return (
    <div className="flex justify-between mt-4">
      <button onClick={handleGoogleSignIn} className="w-1/2 bg-red-500 text-white p-2 rounded-md">
        Googleでログイン
      </button>
      <button onClick={handleGitHubSignIn} className="w-1/2 bg-gray-800 text-white p-2 rounded-md">
        GitHubでログイン
      </button>
    </div>
  );
};

export default SocialLoginButtons;
