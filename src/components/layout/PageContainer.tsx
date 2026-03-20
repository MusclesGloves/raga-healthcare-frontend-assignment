import type { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-6 py-8 lg:px-10">
      {children}
    </div>
  );
}

export default PageContainer;