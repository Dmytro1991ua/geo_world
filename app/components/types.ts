export enum AppNavigationItemLabel {
  EXPLORE = 'Explore',
  FAVORITES = 'Favorites',
}

export type AppNavigationItem = {
  id: number;
  to: string;
  label: AppNavigationItemLabel;
  icon: string;
};
