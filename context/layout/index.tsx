import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export interface LayoutContextInterface {
    isCollapsed: boolean;
    toggleCollapse: () => void;
    manualToggleCollapse: (open: boolean) => void;
}

const LayoutContext = createContext<LayoutContextInterface | undefined>(undefined);

const LayoutContextProvider = ({ children }: { children: ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = useCallback(() => setIsCollapsed(!isCollapsed), [])

    const manualToggleCollapse = useCallback((open: boolean) => setIsCollapsed(open), [])

    const value = useMemo(
      () => ({
        isCollapsed,
        toggleCollapse,
        manualToggleCollapse,
      }),
      [isCollapsed, toggleCollapse, manualToggleCollapse]
    );

    return (
        <LayoutContext.Provider value={value}>
            {children}
        </LayoutContext.Provider>
    )
}

const useLayoutContext = () => {
    const context = useContext(LayoutContext);

     if (!context) {
       throw new Error('"useAuthContext" must be used within "AuthProvider"');
     }

     return context;
}

export { LayoutContextProvider, useLayoutContext }