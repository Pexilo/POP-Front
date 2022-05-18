import { Injectable } from '@angular/core';
import { IFigure } from 'src/app/models/IFigure.model';
import { IUniverse } from 'src/app/models/IUniverse.model';

@Injectable({
  providedIn: 'root',
})
export class Demo {
  universes: IUniverse[] = [
    {
      id: 0,
      imageURL:
        'https://d3isma7snj3lcx.cloudfront.net/optim/images/news/30/3050815579/le-nouveau-systeme-de-steam-entre-en-action-contre-le-review-bombing-de-borderlands-5448ba35__1920_1080__0-235-1920-857.jpg',
      name: 'Borderlands',
      figures: [],
    },
    {
      id: 0,
      imageURL:
        'https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-007.jpg',
      name: 'Rick and Morty',
      figures: [],
    },
    {
      id: 0,
      imageURL:
        'https://i.pinimg.com/originals/16/d5/28/16d52826e9a8f0e24faa4b1037efe808.jpg',
      name: 'Mr Robot',
      figures: [],
    },
    {
      id: 0,
      imageURL:
        'https://free4kwallpapers.com/uploads/originals/2015/12/08/pirates-of-the-caribbean-movie-wallpaper.jpg',
      name: 'Pirates of the Caribbean',
      figures: [],
    },
  ];

  figures: IFigure[] = [
    {
      id: 0,
      idUniverse: 1,
      imageURL: 'https://figurinepop.com/public/handsomejack1.jpg',
      name: 'Handsome Jack',
    },
    {
      id: 0,
      idUniverse: 1,
      imageURL: 'https://figurinepop.com/public/madmoxxi2.jpg',
      name: 'Mad Moxxi',
    },
    {
      id: 0,
      idUniverse: 1,
      imageURL: 'https://figurinepop.com/public/psycho1.jpg',
      name: 'Psycho',
    },
    {
      id: 0,
      idUniverse: 1,
      imageURL: 'https://figurinepop.com/public/claptrap1.jpg',
      name: 'Claptrap',
    },
    {
      id: 0,
      idUniverse: 2,
      imageURL: 'https://figurinepop.com/public/2018/08/mrmeeseeks1.jpg',
      name: 'Mr Meeseeks',
    },
    {
      id: 0,
      idUniverse: 2,
      imageURL: 'https://figurinepop.com/public/2018/02/rick1.jpg',
      name: 'Rick',
    },
    {
      id: 0,
      idUniverse: 2,
      imageURL: 'https://figurinepop.com/public/2018/02/morty1.jpg',
      name: 'Morty',
    },
    {
      id: 0,
      idUniverse: 2,
      imageURL: 'https://figurinepop.com/public/2018/08/picklerick1.jpg',
      name: 'Pickle Rick',
    },
    {
      id: 0,
      idUniverse: 3,
      imageURL: 'https://figurinepop.com/public/2018/03/eliott2.jpg',
      name: 'Elliot Alderson',
    },
    {
      id: 0,
      idUniverse: 3,
      imageURL: 'https://figurinepop.com/public/2017/06/angela1.jpg',
      name: 'Angela Moss',
    },
    {
      id: 0,
      idUniverse: 3,
      imageURL: 'https://figurinepop.com/public/2017/06/darlene1.jpg',
      name: 'Darlene Alderson',
    },
    {
      id: 0,
      idUniverse: 3,
      imageURL: 'https://figurinepop.com/public/2017/06/mrrobot1.jpg',
      name: 'Mr Robot',
    },
    {
      id: 0,
      idUniverse: 4,
      imageURL: 'https://figurinepop.com/public/2017/05/jacksparrow3.jpg',
      name: 'Jack Sparrow',
    },
    {
      id: 0,
      idUniverse: 4,
      imageURL: 'https://figurinepop.com/public/barbossa1.jpg',
      name: 'Barbossa',
    },
    {
      id: 0,
      idUniverse: 4,
      imageURL: 'https://figurinepop.com/public/davyjones1.jpg',
      name: 'Davy Jones',
    },
    {
      id: 0,
      idUniverse: 4,
      imageURL: 'https://figurinepop.com/public/elizabethswann1.jpg',
      name: 'Elizabeth Swann',
    },
  ];

  getDemoUniverses(): IUniverse[] {
    return this.universes;
  }

  getDemoFigures(): IFigure[] {
    return this.figures;
  }
}
