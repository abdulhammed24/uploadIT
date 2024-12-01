import { useState } from 'react';
import { AlertCircleIcon, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const AlertHeader = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <header className="relative bg-[#fbf0f0] px-3 py-2 text-xs font-semibold">
      <div className="flex items-start gap-2 xl:items-center">
        <AlertCircleIcon color="#ff0000" size={16} />

        <div className="flex w-full flex-col justify-between gap-3 xl:flex-row xl:items-center">
          <div>
            You're currently using the limited free plan. Upgrade your event to
            unlock all the features UploadIT has to offer!
          </div>
          <Button
            variant={'joyoutline'}
            size="sm"
            onClick={() => {
              router.push('/dashboard/pricing');
            }}
          >
            <span>Upgrade Plan</span>
          </Button>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="p-1"
          onClick={() => setIsVisible(false)}
        >
          <X size={10} />
        </Button>
      </div>
    </header>
  );
};

export default AlertHeader;
