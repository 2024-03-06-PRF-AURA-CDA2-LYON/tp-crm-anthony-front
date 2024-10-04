export type Order = {
  id: number;
  tva: number;
  comment: string;
  nbDays: number;
  serviceType: string;
  state: number;
  totalExcludeTax: number;
  clientId: {
    id: number;
  };
};
