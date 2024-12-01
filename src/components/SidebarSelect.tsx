'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';

interface SidebarSelectProps {
  setIsDialogOpen: (value: boolean) => void;
  onClose: () => void;
}

const SidebarSelect: React.FC<SidebarSelectProps> = ({
  setIsDialogOpen,
  onClose,
}) => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    'Abdulhammed and Omowunmi'
  );

  const goToEvents = () => {
    setIsDropdownOpen(false);
    router.push('/dashboard/my-events');
    onClose();
  };

  return (
    <Select
      open={isDropdownOpen}
      value={selectedOption}
      onValueChange={(value) => {
        setSelectedOption(value);
      }}
      onOpenChange={(isOpen) => setIsDropdownOpen(isOpen)}
    >
      <SelectTrigger className="w-full border-primary text-primary">
        <SelectValue placeholder="Abdulhammed and Omowunmi" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Abdulhammed and Omowunmi">
            Abdulhammed and Omowunmi
          </SelectItem>
          <SelectItem value="birthday Party">Birthday Party</SelectItem>
        </SelectGroup>

        <SelectSeparator />

        <button
          onClick={() => {
            setIsDialogOpen(true);
            setIsDropdownOpen(false);
            onClose();
          }}
          className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent focus:text-accent-foreground"
        >
          Create new event
        </button>
        <button
          onClick={goToEvents}
          className="relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-accent focus:text-accent-foreground"
        >
          View all my events
        </button>
      </SelectContent>
    </Select>
  );
};

export default SidebarSelect;
