import { ReactNode } from 'react';
import { ButtonDefaultExample } from './examples/button-examples';
import { IconButtonDefaultExample } from './examples/icon-button-examples';
import { InputDefaultExample } from './examples/input-examples';
import { CardExample } from './examples/card-examples';
import { SwitchDefaultExample } from './examples/switch-examples';
import { AccordionDefaultExample } from './examples/accordion-examples';
import { CalloutExample } from './examples/callout-examples';
import { TimelineExample } from './examples/timeline-examples';
import { TabMenuExample } from './examples/tab-menu-examples';

export type ComponentListItemType = {
  name: string;
  description: string;
  path: string;
  render: ReactNode;
};

export const ComponentsList: ComponentListItemType[] = [
  {
    name: 'Button',
    description:
      'A framer-motion supported button with size and design variants.',
    path: '/components/button',
    render: <ButtonDefaultExample />,
  },
  {
    name: 'Icon Button',
    description:
      "Similar to button component and it's properties, but for icon-based actions.",
    path: '/components/icon-button',
    render: <IconButtonDefaultExample />,
  },
  {
    name: 'Input',
    description:
      'A subtle and clean input component, with all the native properties.',
    path: '/components/input',
    render: <InputDefaultExample />,
  },
  {
    name: 'Card',
    description:
      'A sleek looking card container with added header and footer layout',
    path: '/components/card',
    render: <CardExample />,
  },
  {
    name: 'Switch',
    description: 'A native working switch component',
    path: '/components/switch',
    render: <SwitchDefaultExample />,
  },
  {
    name: 'Accordion',
    description:
      'Fully functional, accessible and responsive accordion component.',
    path: '/components/accordion',
    render: <AccordionDefaultExample />,
  },
  {
    name: 'Callout',
    description:
      'Callout component with multiple variants covering various use cases.',
    path: '/components/callout',
    render: <CalloutExample />,
  },
  {
    name: 'Tab Menu',
    description: 'A auto-adjustable tab menu component',
    path: '/components/tab-menu',
    render: (
      <div className="scale-[40%]">
        <TabMenuExample />
      </div>
    ),
  },
  {
    name: 'Timeline',
    description:
      'A thoughtful timeline component for your web-apps & landing pages',
    path: '/components/timeline',
    render: (
      <div className="scale-[30%]">
        <TimelineExample />
      </div>
    ),
  },
];
