//ce modèle permet d'afficher correctement les cartes des figurines

export interface IFigureCard {
  id: number;
  name: string;
  imageURL: string;
  idUniverse: number;
  universeName: string;
  universeImageURL: string;
}
