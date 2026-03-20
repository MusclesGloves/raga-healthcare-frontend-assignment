import type { PropsWithChildren } from 'react';
import PageContainer from './PageContainer';

function AppShell({ children }: PropsWithChildren) {
  return (
    <PageContainer>
      <div className="flex min-h-screen w-full flex-col py-2">{children}</div>
    </PageContainer>
  );
}

export default AppShell;