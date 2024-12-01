'use client';

import * as React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { format, isBefore } from 'date-fns';
import { CalendarIcon, CircleHelp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

const options = [
  { value: 'wedding', label: '💍 Wedding' },
  { value: 'party', label: '🎉 Party' },
  { value: 'conference', label: '🎤 Conference' },
  { value: 'birthday', label: '🎂 Birthday' },
  { value: 'other', label: '❓ Other' },
];
const Settings = () => {
  const [selectedEvent, setSelectedEvent] = React.useState('wedding');

  const [date, setDate] = React.useState<Date>();

  const [today, setToday] = React.useState<Date | null>(null);

  React.useEffect(() => {
    setToday(new Date());
  }, []);

  const isDateDisabled = (dateToCheck: Date) => {
    return today ? isBefore(dateToCheck, today) : false;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEvent(event.target.value);
  };

  return (
    <section className="w-full">
      <div className="flex flex-col">
        <div className="text-2xl font-extrabold">Settings</div>
      </div>

      <div className="mt-10 grid w-fit max-w-[500px] gap-6 px-[2px] pb-10 pt-[2px]">
        <form className="space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title" className="text-base font-semibold">
              Event Name
            </Label>
            <p className="text-sm text-muted-foreground">
              It'll be used through the app and will be showed to your guests.
            </p>
            <Input
              type="text"
              id="title"
              placeholder="i.e - Abdulhammed and Omowunmi Wedding"
              value="Abdulhammed and Omowunmi"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="date" className="text-base font-semibold">
              Event Date
            </Label>

            <p className="text-sm text-muted-foreground">
              Set when your event is scheduled to start.
            </p>
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
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="event" className="text-base font-semibold">
              Event Type
            </Label>
            <p className="text-sm text-muted-foreground">
              We'll adjust the experience according to your event type.
            </p>
            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center space-x-2 rounded-md border p-2 text-sm hover:text-primary ${
                    selectedEvent === option.value ? 'border-primary' : ''
                  }`}
                >
                  <input
                    type="radio"
                    value={option.value}
                    checked={selectedEvent === option.value}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <Button
            variant="default"
            className="w-full"
            // onClick={handleSignIn}
            // disabled={isLoading}
          >
            {/* {isLoading ? 'Saving...' : 'Save'} */}
            Save
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Settings;
