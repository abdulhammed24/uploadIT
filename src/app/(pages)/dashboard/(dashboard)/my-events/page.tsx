'use client';

import { useState } from 'react';

import { Calendar, Camera, Plus, Trash } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EventDialog from '@/components/EventDialog';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { PopoverClose } from '@radix-ui/react-popover';

const MyEvents = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="w-full">
        <div className="flex flex-col">
          <div className="text-2xl font-extrabold">My Events</div>
          <div className="mt-3 text-base text-neutral-400">
            Here you can find all you events or create new ones
          </div>
        </div>
        <Button
          onClick={() => {
            setIsDialogOpen(true);
          }}
          variant="joyoutline"
          className="mt-4 justify-start"
        >
          <span>
            <Plus size={14} className="text-primary" />
          </span>
          <span className="font-semibold">Create new event</span>
        </Button>

        <div className="mt-7 grid gap-5 pb-7 md:grid-cols-2 lg:grid-cols-3">
          <Card className="text-sm">
            <CardHeader>
              <CardTitle>
                <div className="flex w-full items-center justify-between">
                  Birthday Party
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="icon" variant={'ghost'}>
                        <Trash color="#ff0000" size={16} />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-fit p-4 text-center">
                      <p className="mb-2 text-sm">Are you sure?</p>
                      <div className="flex items-center justify-center gap-2">
                        <PopoverClose>
                          <Button variant="outline">Cancel</Button>
                        </PopoverClose>

                        <PopoverClose>
                          <Button variant="destructive">Ok</Button>
                        </PopoverClose>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 w-fit rounded-lg bg-accent px-2 py-[2px] text-xs font-medium">
                Free plan
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span>
                    <Camera size={14} className="text-primary" />
                  </span>
                  0 uploads
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    <Calendar size={14} className="text-primary" />
                  </span>
                  Created on Nov 19, 2024
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-center border-t border-t-accent pb-0">
              <button className="my-3 hover:text-primary">
                <span>Current Event</span>
              </button>
            </CardFooter>
          </Card>

          <Card className="text-sm">
            <CardHeader>
              <CardTitle>
                <div className="flex w-full items-center justify-between">
                  Abdulhammed and Omowunmi
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button size="icon" variant={'ghost'}>
                        <Trash color="#ff0000" size={16} />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-fit p-4 text-center">
                      <p className="mb-2 text-sm">Are you sure?</p>
                      <div className="flex items-center justify-center gap-2">
                        <PopoverClose>
                          <Button variant="outline">Cancel</Button>
                        </PopoverClose>

                        <PopoverClose>
                          <Button variant="destructive">Ok</Button>
                        </PopoverClose>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 w-fit rounded-lg bg-accent px-2 py-[2px] text-xs font-medium">
                Free plan
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span>
                    <Camera size={14} className="text-primary" />
                  </span>
                  0 uploads
                </div>

                <div className="flex items-center gap-2">
                  <span>
                    <Calendar size={14} className="text-primary" />
                  </span>
                  Created on Nov 19, 2024
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-center border-t border-t-accent pb-0">
              <button className="my-3 hover:text-primary">
                <span>View Event →</span>
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <EventDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default MyEvents;
