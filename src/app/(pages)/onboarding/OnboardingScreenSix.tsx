import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface OnboardingScreenSixProps {
  nextStep: () => void;
}

const OnboardingScreenSix: React.FC<OnboardingScreenSixProps> = ({ nextStep }) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="font-bold text-xl md:text-2xl">You're all set up!</CardTitle>
        <CardDescription className="font-medium text-base">
          On the next screen, you’ll find your dashboard with the album link and QR code to share with your guests.
          Plus, there's a slideshow link ready to dazzle on the big screens!
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full sm:px-0">
        <div className="relative flex items-center min-h-8">
          <Button variant="default" className="w-full" onClick={nextStep}>
            Go to your Dashboard
          </Button>
        </div>
      </CardContent>
    </>
  );
};

export default OnboardingScreenSix;
