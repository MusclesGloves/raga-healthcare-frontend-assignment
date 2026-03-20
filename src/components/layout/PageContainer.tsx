import type { PropsWithChildren } from 'react';

function PageContainer({ children }: PropsWithChildren) {
  return <div className="min-h-screen bg-slate-50 text-slate-900">{children}</div>;
}

export default PageContainer;