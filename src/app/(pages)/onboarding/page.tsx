'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import OnboardingScreenOne from './OnboardingScreenOne';
import OnboardingScreenTwo from './OnboardingScreenTwo';
import OnboardingScreenThree from './OnboardingScreenThree';
import OnboardingScreenFour from './OnboardingScreenFour';
import OnboardingScreenFive from './OnboardingScreenFive';
import OnboardingScreenSix from './OnboardingScreenSix';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleSignOut = () => {
    router.push('/');
  };

  return (
    <section className="w-full">
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-auth px-3 pb-14 pt-3">
        <Card className="flex w-full flex-col items-center sm:w-[500px]">
          <div className="mb-3 flex w-11/12 flex-col items-center text-center sm:w-3/4">
            {step === 1 && <OnboardingScreenOne nextStep={nextStep} />}
            {step === 2 && <OnboardingScreenTwo nextStep={nextStep} />}
            {step === 3 && <OnboardingScreenThree nextStep={nextStep} />}
            {step === 4 && <OnboardingScreenFour nextStep={nextStep} />}
            {step === 5 && <OnboardingScreenFive nextStep={nextStep} />}
            {step === 6 && <OnboardingScreenSix nextStep={goToDashboard} />}
          </div>
        </Card>

        {step === 1 && (
          <div className="mt-4 text-sm font-semibold">
            <div>
              <span>Not Abdulhammed? </span>
              <button
                className="cursor-pointer font-medium text-primary"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Onboarding;
