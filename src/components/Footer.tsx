import { Ellipsis, Home, Images, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = ({ onMoreClick }: { onMoreClick: () => void }) => {
  const footerItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/dashboard/media', icon: Images, label: 'Media' },
    { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <footer className="fixed bottom-0 z-10 w-full border-t bg-white p-4 shadow xl:hidden">
      <div className="flex items-center justify-between">
        {footerItems.map(({ href, icon: Icon, label }, index) => (
          <Link
            key={index}
            href={href}
            className={`flex w-full flex-col items-center justify-center gap-1 rounded-lg px-4 py-2 transition-all duration-300 ${
              isActive(href)
                ? 'bg-orange-100 text-primary hover:bg-orange-100'
                : 'text-muted-foreground hover:bg-orange-100'
            }`}
          >
            <Icon size={20} />
            <div className="text-xs font-semibold sm:text-sm">{label}</div>
          </Link>
        ))}
        <button
          onClick={onMoreClick}
          className="flex w-full flex-col items-center justify-center gap-1 rounded-lg px-4 py-2 text-muted-foreground transition-all duration-300 hover:bg-orange-100 hover:text-primary"
        >
          <Ellipsis size={20} />
          <div className="text-xs font-semibold sm:text-sm">More</div>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
