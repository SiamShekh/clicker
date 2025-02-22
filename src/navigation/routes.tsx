import InvitePage from '@/pages/InvitePage';
import TapPage from '@/pages/TapPage';
import type { ComponentType, JSX } from 'react';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/invite', Component: TapPage },
  { path: '/tap', Component: TapPage },
];
