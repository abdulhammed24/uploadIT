'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { format, isBefore } from 'date-fns';
import { CalendarIcon, CircleHelp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tooltip } from 'react-tooltip';

const options = [
  { value: 'wedding', label: '💍 Wedding' },
  { value: 'party', label: '🎉 Party' },
  { value: 'conference', label: '🎤 Conference' },
  { value: 'birthday', label: '🎂 Birthday' },
  { value: 'other', label: '❓ Other' },
];
const EventDialog: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const [selectedEvent, setSelectedEvent] = React.useState('wedding');

  const handleViewAllEvents = () => {
    router.push('/dashboard/my-events');
    // onClose();
  };

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new event</DialogTitle>
        </DialogHeader>

        <form className="space-y-6">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">
              <span className="flex gap-1">
                What's the event title?{' '}
                <div>
                  <span id="help-tooltip">
                    <CircleHelp size={14} />
                  </span>

                  <Tooltip anchorSelect="#help-tooltip" className="z-[2]">
                    <div className="w-52 text-sm">
                      <p>
                        It'll be used through the app and will be shown to your
                        guests.
                      </p>
                    </div>
                  </Tooltip>
                </div>
              </span>
            </Label>

            <Input
              type="text"
              id="title"
              placeholder="i.e - Abdulhammed and Omowunmi Wedding"
            />
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="date">When does it happen?</Label>
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
            <Label htmlFor="event">What are you up to?</Label>
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

          <DialogClose asChild>
            <Button className="w-full" variant={'default'}>
              Create Event
            </Button>
          </DialogClose>
        </form>
      </DialogContent>

      {/* <DialogContent>
        <DialogHeader>
          <DialogTitle>Event Limit Reached</DialogTitle>
          <DialogDescription>
            You're limited to <strong className="text-foreground">2</strong> free events. You have to upgrade or delete
            one of your existing events in order to create new ones.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="outline" onClick={handleViewAllEvents}>
            View All My Events
          </Button>
          <DialogClose asChild onClick={handleViewAllEvents}>
            <Button
              type="button"
              variant="outline"
              className="hover:bg-background justify-start hover:text-primary hover:border-primary"
            >
              View All My Events
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="default">
              Got It
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent> */}
    </Dialog>
  );
};

export default EventDialog;
