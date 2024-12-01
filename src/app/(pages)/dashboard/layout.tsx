import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export default DashboardLayout;
