'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Eye, EyeOff } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { shimmer, toBase64 } from '@/utils/imageUtils';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/onboarding');
    }, 2000);
  };

  return (
    <section className="w-full">
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-auth px-3 pb-14 pt-3">
        <Card className="flex w-full flex-col items-center sm:w-[500px]">
          <div className="mb-3 flex w-11/12 flex-col items-center text-center sm:w-3/5">
            <div className="pt-5">
              <h1 className="text-xl font-bold italic">UploadIT</h1>
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Sign in to your account
              </CardTitle>
            </CardHeader>
            <CardContent className="w-full sm:px-0">
              <form className="block space-y-4">
                <div className="relative flex min-h-8 items-center">
                  <Input
                    type="email"
                    className="w-full px-3 py-5"
                    placeholder="Email"
                  />
                  <span className="absolute right-4 flex items-center text-gray-500">
                    <Mail size={18} />
                  </span>
                </div>

                <div className="relative flex min-h-8 items-center">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full px-3 py-5"
                    placeholder="Password"
                  />
                  <span
                    className="absolute right-4 flex cursor-pointer items-center text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </span>
                </div>

                <div className="relative flex min-h-8 items-center">
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={handleSignIn}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </div>
              </form>
            </CardContent>

            <CardFooter className="w-full flex-col sm:px-0">
              <div className="text-balance text-center text-xs">
                <button
                  className="cursor-pointer font-medium text-primary"
                  onClick={() => router.push('/forgot-password')}
                >
                  Forgot your password?
                </button>
              </div>

              <div className="mt-4 w-full text-center">
                <div className="flex w-full justify-center pb-7 pt-2 text-xs">
                  <span className="auth-divider">OR</span>
                </div>
                <Button variant="outline" className="w-full justify-start">
                  <Image
                    src={'/google.svg'}
                    alt="UploadIT logo"
                    width={20}
                    height={20}
                    className="mx-4 object-cover"
                  />
                  <div className="text-sm font-medium text-secondary-foreground">
                    Continue with Google
                  </div>
                </Button>
              </div>
            </CardFooter>
          </div>
        </Card>

        <div className="mt-4 text-sm font-semibold">
          <div>
            <span>Don't have an account?</span>{' '}
            <button
              className="cursor-pointer font-medium text-primary"
              onClick={() => router.push('/sign-up')}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
