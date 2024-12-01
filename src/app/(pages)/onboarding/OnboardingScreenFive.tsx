import { useState, useEffect } from 'react';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import QRCode from 'react-qr-code';
import { shimmer, toBase64 } from '@/utils/imageUtils';

interface OnboardingScreenFiveProps {
  nextStep: () => void;
}

const OnboardingScreenFive: React.FC<OnboardingScreenFiveProps> = ({
  nextStep,
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const photoWallUrl = 'app.UploadIT.com/s/rsbbss';

  const messages = [
    'Creating your photo wall',
    'Creating your digital album...',
    'Adding some sparklings',
  ];

  useEffect(() => {
    if (currentSection < 2) {
      const timer = setTimeout(() => {
        setCurrentSection((prev) => prev + 1);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [currentSection]);

  useEffect(() => {
    if (currentSection === 0) {
      const interval = setInterval(() => {
        setCurrentMessageIndex(
          (prevIndex) => (prevIndex + 1) % messages.length
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentSection, messages.length]);

  return (
    <>
      {currentSection === 0 && (
        <>
          <CardHeader>
            <CardTitle className="text-xl font-bold md:text-2xl">
              We're on it!
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full sm:px-0">
            <div className="flex items-center justify-center">
              <video className="h-32 w-32 rounded-lg" autoPlay loop muted>
                <source src="/love-floating.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <div className="cursor-pointer text-balance text-sm font-medium text-foreground">
              {messages[currentMessageIndex]}
            </div>
          </CardFooter>
        </>
      )}

      {currentSection === 1 && (
        <>
          <CardHeader>
            <CardTitle className="text-xl font-bold md:text-2xl">
              Your event is ready
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full sm:px-0">
            <div className="flex items-center justify-center">
              <Image
                src={'/check.gif'}
                alt="UploadIT logo"
                width={150}
                height={150}
                priority
                className="inset-0 w-auto object-cover"
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </CardContent>
        </>
      )}

      {currentSection === 2 && (
        <>
          <CardHeader>
            <CardTitle className="text-xl font-bold md:text-2xl">
              Let's add your first photos
            </CardTitle>
            <CardDescription className="text-sm font-medium">
              Scan the QR code and follow the instructions to add new photos.
              The photos will appear on your wall shortly after.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full sm:px-0">
            <div className="flex cursor-pointer items-center justify-center">
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black shadow-sm">
                <div className="absolute inset-0 bg-[#0000006b] bg-barCodeBg bg-cover bg-center bg-blend-multiply blur-md filter"></div>
                <div className="relative py-5">
                  <p className="mb-2 text-sm font-semibold text-white">
                    Scan to view or add photos
                  </p>
                  <div className="flex items-center justify-center rounded border-4 border-primary bg-white p-1">
                    <QRCode id="photoWallQr" value={photoWallUrl} size={134} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <button
              onClick={nextStep}
              className="cursor-pointer text-balance text-sm font-medium text-primary"
            >
              I'll do it later
            </button>
          </CardFooter>
        </>
      )}
    </>
  );
};

export default OnboardingScreenFive;
