import { Icon } from './icon';

describe('Icon', () => {
  it('creates a new instance with a deterministic symbol', () => {
    const iconOne = new Icon(0);
    const iconTwo = new Icon(56);
    const iconThree = new Icon(57);

    expect(iconOne.symbol).toEqual('ambulance');
    expect(iconTwo.symbol).toEqual('kiwi-bird');
    expect(iconThree.symbol).toEqual('ambulance');
  });
});
