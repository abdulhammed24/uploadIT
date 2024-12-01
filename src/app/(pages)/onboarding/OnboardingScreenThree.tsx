import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface OnboardingScreenThreeProps {
  nextStep: () => void;
}

const OnboardingScreenThree: React.FC<OnboardingScreenThreeProps> = ({
  nextStep,
}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    console.log('Event Name:', inputValue);

    setTimeout(() => {
      setLoading(false);
      nextStep();
    }, 2000);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold md:text-2xl">
          How'd you like to call your event?
        </CardTitle>
        <CardDescription className="text-base font-medium">
          Don't worry, you can always change it later.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full sm:px-0">
        <form className="block space-y-4" onSubmit={handleSubmit}>
          <div className="relative flex min-h-8 items-center">
            <Input
              type="text"
              className="w-full px-3 py-5"
              placeholder="i.e - Abdulhammed and Omowunmi Wedding"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="relative flex min-h-8 items-center">
            <Button variant="default" className="w-full" disabled={loading}>
              {loading ? 'Loading...' : 'Continue'}
            </Button>
          </div>
        </form>
      </CardContent>
    </>
  );
};

export default OnboardingScreenThree;
