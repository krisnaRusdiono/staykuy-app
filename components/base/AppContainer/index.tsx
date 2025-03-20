import { ReactNode } from 'react';

export interface AppContainerProps {
  className?: string;
  children: ReactNode;
}

const AppContainer = ({ children, className }: AppContainerProps) => {
    return (
      <div className={`${className} container mx-auto p-4`}>
        {children}
      </div>
    );
}

export default AppContainer;
