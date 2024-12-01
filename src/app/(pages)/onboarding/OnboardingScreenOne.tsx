import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface OnboardingScreenOneProps {
  nextStep: () => void;
}

const OnboardingScreenOne: React.FC<OnboardingScreenOneProps> = ({ nextStep }) => {
  return (
    <>
      <CardHeader>
        <CardTitle className="font-bold text-xl md:text-2xl">Hey Abdulhammed 👋</CardTitle>
        <CardDescription className="font-medium text-base">
          Let's get your digital album and photo wall in no-time!
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full sm:px-0">
        <form className="space-y-4 block">
          <div className="relative flex items-center min-h-8">
            <Button variant="default" className="w-full" onClick={nextStep}>
              Let's Go
            </Button>
          </div>
        </form>
      </CardContent>
    </>
  );
};

export default OnboardingScreenOne;
