import { IFigure } from 'src/app/models/IFigure.model';

export interface IUniverse {
  id: number;
  name: string;
  imageURL: string;
  figures: IFigure[];
}
