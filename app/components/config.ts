import { type AppNavigationItem,AppNavigationItemLabel } from './types';

export const APP_NAVIGATION_ITEMS_CONFIG: AppNavigationItem[] = [
  {
    id: 1,
    to: '/countries',
    label: AppNavigationItemLabel.EXPLORE,
    icon: 'lucide:compass',
  },
  {
    id: 2,
    to: '/favorites',
    label: AppNavigationItemLabel.FAVORITES,
    icon: 'lucide:heart',
  },
];
