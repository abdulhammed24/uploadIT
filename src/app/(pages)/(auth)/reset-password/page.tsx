'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { shimmer, toBase64 } from '@/utils/imageUtils';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSendInstructions = async () => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        description: 'You can now sign in with your new password.',
      });

      setTimeout(() => {
        router.push('/');
      }, 2500);
    } catch {
      toast({
        description:
          'There was an error sending the reset instructions. Please try again.',
      });
    } finally {
      setLoading(false);
    }
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
                Reset your password
              </CardTitle>
              <CardDescription className="text-base font-bold">
                for abdham673@gmail.com
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full sm:px-0">
              <form className="block space-y-4">
                <div className="relative flex min-h-8 items-center">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full px-3 py-5"
                    placeholder="Choose a password"
                  />
                  <span
                    className="absolute right-4 flex cursor-pointer items-center text-gray-500"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>

                <div className="relative flex min-h-8 items-center">
                  <Button
                    variant="default"
                    className="w-full"
                    onClick={handleSendInstructions}
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResetPassword;
