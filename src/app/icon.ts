export class Icon {
  public symbol: string;

  constructor(index: number) {
    this.symbol = this.generateSymbol(index);
  }

  #symbols = [
    'ambulance',
    'anchor',
    'apple-alt',
    'award',
    'baby',
    'bacon',
    'bath',
    'beer',
    'bell',
    'bicycle',
    'birthday-cake',
    'bone',
    'book',
    'breadslice',
    'bug',
    'building',
    'bullhorn',
    'bus',
    'camera',
    'candy-cane',
    'carrot',
    'cat',
    'cloud',
    'coffee',
    'cog',
    'compass',
    'cookie-bite',
    'crow',
    'cube',
    'cut',
    'dice',
    'dog',
    'dragon',
    'drum',
    'drumstick-bite',
    'egg',
    'envelope',
    'eye',
    'feather',
    'fire',
    'fish',
    'flag',
    'flask',
    'frog',
    'gamepage',
    'gem',
    'gift',
    'glass-martini',
    'glasses',
    'guitar',
    'hamburger',
    'heart',
    'helicopter',
    'hippo',
    'horse',
    'hotdog',
    'kiwi-bird',
  ];

  generateSymbol(index: number): string {
    const symbolIndex = index % this.#symbols.length;
    return this.#symbols[symbolIndex];
  }
}
