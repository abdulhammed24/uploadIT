import * as React from 'react';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { format, isBefore } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface OnboardingScreenFourProps {
  nextStep: () => void;
}

const OnboardingScreenFour: React.FC<OnboardingScreenFourProps> = ({
  nextStep,
}) => {
  const [date, setDate] = React.useState<Date>();

  const [today, setToday] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setToday(new Date());
  }, []);

  const isDateDisabled = (dateToCheck: Date) => {
    return today ? isBefore(dateToCheck, today) : false;
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-xl font-bold md:text-2xl">
          When is the event?
        </CardTitle>
        <CardDescription className="text-base font-medium">
          Pick a date for your event (if you already know it)
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full sm:px-0">
        <form className="block space-y-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[240px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={isDateDisabled}
              />
            </PopoverContent>
          </Popover>
          <div className="relative flex min-h-8 items-center">
            <Button variant="default" className="w-full" onClick={nextStep}>
              Create My Event
            </Button>
          </div>
        </form>
      </CardContent>

      <CardFooter className="justify-center">
        <button
          className="cursor-pointer text-balance text-sm font-medium text-primary"
          onClick={nextStep}
        >
          I don't know yet
        </button>
      </CardFooter>
    </>
  );
};

export default OnboardingScreenFour;
