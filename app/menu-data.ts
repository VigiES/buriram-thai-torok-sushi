export type MenuItem = {
  name: string;
  detail?: string;
  price: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    title: "Entrées",
    items: [
      { name: "Beignets de crevettes", detail: "5 pièces", price: "7,50 €" },
      { name: "Nems au poulet", detail: "5 pièces", price: "7,50 €" },
      { name: "Nems au porc", detail: "5 pièces", price: "7,50 €" },
      { name: "Brochettes de poulet satay", detail: "5 pièces", price: "7,50 €" },
    ],
  },
  {
    title: "Plats",
    items: [
      { name: "Bœuf aux oignons avec riz thaï", price: "10,90 €" },
      { name: "Crevettes à l’ail avec riz thaï", price: "10,90 €" },
      { name: "Pad thaï au poulet", price: "11,90 €" },
      { name: "Pad thaï au bœuf", price: "12,90 €" },
      { name: "Pad thaï aux crevettes", price: "12,90 €" },
      { name: "Bo bun au poulet", price: "10,90 €" },
      { name: "Bo bun au bœuf", price: "11,90 €" },
      { name: "Bo bun aux crevettes", price: "11,90 €" },
      { name: "Salade de bœuf thaï", price: "11,90 €" },
      { name: "Salade de poulet thaï", price: "10,90 €" },
      { name: "Salade de crevettes thaï", price: "12,90 €" },
    ],
  },
  {
    title: "Sushis",
    items: [
      { name: "Sushis", detail: "16 pièces", price: "13,50 €" },
      { name: "Sushis oignon frit", detail: "16 pièces", price: "13,90 €" },
      { name: "Sushis", detail: "18 pièces", price: "14,90 €" },
    ],
  },
  {
    title: "Boissons",
    items: [
      { name: "Bière Singha", detail: "uniquement à emporter", price: "3,50 €" },
      { name: "Boisson au choix", price: "2,50 €" },
    ],
  },
];
