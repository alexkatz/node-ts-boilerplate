import { luna, tycho } from './cats';

describe('luna', () => {
  it('should greet properly', () => {
    expect(luna.greeting().length).toBeGreaterThan(0);
  });

  it('should be at least one year old', () => {
    expect(luna.age).toBeGreaterThanOrEqual(1);
  });

  it('should be gray', () => {
    expect(luna.color).toBe('gray');
  });

  it('should have shorter hair than tycho', () => {
    expect(luna.hairLength).toBeLessThan(tycho.hairLength);
  });
});

describe('tycho', () => {
  it('should have longer hair than luna', () => {
    expect(tycho.hairLength).toBeGreaterThan(luna.hairLength);
  });
});
