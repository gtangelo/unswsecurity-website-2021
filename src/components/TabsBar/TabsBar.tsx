import { Paper, Tabs, Tab } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const DarkPaper = styled(Paper)`
  background-color: var(--black);
  & * {
    color: var(--white);
  }

  [role='tablist'] + span {
    background-color: var(--white);
  }
`;

interface TabsBarProps {
  selected: number;
  tabs: Array<string | number>;
  toggle: ((event: React.ChangeEvent<unknown>, value: any) => void) | undefined;
}

const TabsBar = ({ selected, tabs, toggle }: TabsBarProps) => {
  return (
    <DarkPaper>
      <Tabs
        variant="scrollable"
        value={selected}
        onChange={toggle}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        {tabs.map((tabItem) => (
          <Tab key={`${tabItem}`} label={tabItem} value={tabItem} />
        ))}
      </Tabs>
    </DarkPaper>
  );
};

export default TabsBar;
