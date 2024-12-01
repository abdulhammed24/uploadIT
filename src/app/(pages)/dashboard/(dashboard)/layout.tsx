'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import AlertHeader from '@/components/AlertHeader';

const DashboardSidebarLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  return (
    <div className="flex min-h-screen flex-col xl:flex-row">
      <Sidebar
        isVisible={isSidebarVisible}
        onClose={() => setIsSidebarVisible(false)}
      />

      <div className="flex flex-1 flex-col xl:ml-[320px]">
        <AlertHeader />
        <div className="flex-1 bg-background p-[20px_10px_100px] xl:p-[32px_20px_32px_45px]">
          {children}
        </div>
      </div>

      <Footer onMoreClick={() => setIsSidebarVisible(true)} />
    </div>
  );
};

export default DashboardSidebarLayout;
