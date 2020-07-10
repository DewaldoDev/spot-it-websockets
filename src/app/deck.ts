import Icon from './icon';

export class Deck {
  public cards: Icon[][];
  constructor() {
    this.cards = this.createShuffledDeck();
  }

  createShuffledDeck(): Icon[][] {
    return;
  }
}
