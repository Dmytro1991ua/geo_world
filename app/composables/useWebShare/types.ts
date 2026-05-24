export type SharePageOptions = {
  title: string;
  text: string;
  url: string;
};

export type UseWebShareReturn = {
  onSharePage: (options: SharePageOptions) => Promise<void>;
};
