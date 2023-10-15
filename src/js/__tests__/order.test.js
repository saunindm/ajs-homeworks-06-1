import orderByProps from '../order';

test('sorting object propertiеs', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  const result = orderByProps(obj, ['name', 'attack', 'health']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 }
  ];  

  expect(result).toEqual(expected);
});
