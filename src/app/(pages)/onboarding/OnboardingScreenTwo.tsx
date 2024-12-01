import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OnboardingScreenTwoProps {
  nextStep: (selectedEvent: string) => void;
}

const eventTypes = [
  { label: "💍 Wedding", value: "Wedding" },
  { label: "🎉 Party", value: "Party" },
  { label: "🎤 Conference", value: "Conference" },
  { label: "🎂 Birthday", value: "Birthday" },
  { label: "❓ Other", value: "Other" },
];

const OnboardingScreenTwo: React.FC<OnboardingScreenTwoProps> = ({ nextStep }) => {
  const handleEventClick = (event: string) => {
    console.log(`Selected event: ${event}`);
    nextStep(event);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="font-bold text-xl md:text-2xl">What kind of event are you up to?</CardTitle>
      </CardHeader>
      <CardContent className="w-full sm:px-0">
        <div className="grid gap-3 justify-center">
          {eventTypes.map((event) => (
            <Button
              key={event.value}
              variant="outline"
              className="hover:border-primary hover:text-primary hover:bg-background"
              onClick={() => handleEventClick(event.value)}
            >
              <span>{event.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </>
  );
};

export default OnboardingScreenTwo;
