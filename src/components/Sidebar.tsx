'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  Images,
  LayoutDashboard,
  LogOut,
  Settings,
  Star,
  User,
  X,
} from 'lucide-react';

import SidebarSelect from './SidebarSelect';
import EventDialog from './EventDialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

const Sidebar: React.FC<{ isVisible: boolean; onClose: () => void }> = ({
  isVisible,
  onClose,
}) => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const pathname = usePathname();

  useBodyScrollLock(isVisible);

  const isActive = (path: string) => pathname === path;

  const closeSidebar = () => {
    onClose();
  };

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-4/5 max-w-xs bg-white p-4 pt-8 shadow-md transition-transform duration-300 xl:fixed xl:z-auto ${
          isVisible
            ? 'translate-x-0'
            : '-translate-x-full xl:block xl:translate-x-0'
        }`}
      >
        <Button
          onClick={onClose}
          variant={'ghost'}
          size="icon"
          className="absolute right-4 top-4 xl:hidden"
        >
          <X size={16} />
        </Button>

        <div>
          <h1 className="text-xl font-bold italic">UploadIT</h1>
        </div>

        <div className="mt-8 w-full">
          <div className="mb-1 flex w-full items-center justify-between text-xs font-semibold text-foreground">
            Current Event
            <button
              onClick={() => {
                router.push('/dashboard/my-events');
                closeSidebar();
              }}
              type="button"
              className="text-primary"
            >
              <span>View All</span>
            </button>
          </div>

          <SidebarSelect setIsDialogOpen={setIsDialogOpen} onClose={onClose} />

          <button
            onClick={() => {
              router.push('/dashboard/pricing');
              closeSidebar();
            }}
            className="UpgradeButton_Sidebar"
          >
            <span>
              <Star fill="#000" size={14} />
            </span>
            &nbsp; Upgrade your event
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-11 flex h-[60%] w-full flex-col gap-3 self-start">
          <Link
            href="/dashboard"
            onClick={closeSidebar}
            className={`relative flex h-12 flex-row items-center rounded-lg px-3 transition-all duration-300 ${
              isActive('/dashboard')
                ? 'bg-orange-100 text-primary hover:bg-orange-100'
                : 'text-gray-700 hover:bg-accent'
            }`}
          >
            <Home size={18} />
            <span className="ml-4 text-sm font-semibold">Home</span>
          </Link>

          <Link
            href="/dashboard/media"
            onClick={closeSidebar}
            className={`relative flex h-12 flex-row items-center rounded-lg px-3 transition-all duration-300 ${
              isActive('/dashboard/media')
                ? 'bg-orange-100 text-primary hover:bg-orange-100'
                : 'text-gray-700 hover:bg-accent'
            }`}
          >
            <Images size={18} />
            <span className="ml-4 text-sm font-semibold">Photos & Videos</span>
          </Link>

          <Link
            href="/dashboard/settings"
            onClick={closeSidebar}
            className={`relative flex h-12 flex-row items-center rounded-lg px-3 transition-all duration-300 ${
              isActive('/dashboard/settings')
                ? 'bg-orange-100 text-primary hover:bg-orange-100'
                : 'text-gray-700 hover:bg-accent'
            }`}
          >
            <Settings size={18} />
            <span className="ml-4 text-sm font-semibold">Event Settings</span>
          </Link>

          <div className="mt-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative flex h-12 cursor-pointer flex-row items-center rounded-lg px-3 text-gray-700 transition-all duration-300 hover:bg-accent">
                  <User size={18} />
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold">Account</h3>
                    <p className="text-xs text-gray-600">abdham673@gmail.com</p>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    router.push('/dashboard/my-events');
                    closeSidebar();
                  }}
                >
                  <LayoutDashboard size={18} />
                  <span className="ml-2 text-sm font-semibold">
                    View all my events
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => {
                    router.push('/');
                    closeSidebar();
                  }}
                >
                  <LogOut size={18} />
                  <span className="ml-2 text-sm font-semibold">Signout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </aside>

      <EventDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default Sidebar;
