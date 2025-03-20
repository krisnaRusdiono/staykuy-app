import { useState, SyntheticEvent } from 'react';

const useDetail = () => {
    const [valueTabs, setValueTabs] = useState<number>(0);

    const handleTabsChange = (event: SyntheticEvent, value: number) =>
      setValueTabs(value);

    const a11yProps = (index: number) => {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    };

    return {
        valueTabs,
        handleTabsChange,
        a11yProps,
    }
}

export default useDetail;
