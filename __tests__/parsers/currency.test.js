import { toCredits, parseGalactical, galactical } from '../../parsers/currency';

describe('parser functions', () => {
  describe('failure', () => {
    it('expect parseGalactical to return undefined when wrongly input ', async () => {
      const result = parseGalactical('glob internalFailure glob');
      expect(result).toBeUndefined();
    });
  });
  describe('success', () => {
    it('expect glob to be I', async () => {
      expect(galactical.glob).toEqual('I');
    });

    it('expect prok to be V', async () => {
      expect(galactical.prok).toEqual('V');
    });

    it('expect pish to be X', async () => {
      expect(galactical.pish).toEqual('X');
    });

    it('expect tegj to be L', async () => {
      expect(galactical.tegj).toEqual('L');
    });

    it('expect glob glob silver to be 34 credits worth', async () => {
      let result = parseGalactical('glob glob silver');
      expect(result.roman).toEqual('II');
      expect(result.weight).toEqual('silver');
      result = toCredits(result.roman, result.weight);
      expect(result.credits).toEqual(34);
    });

    it('expect glob prok gold to be 57800 credits worth', async () => {
      let result = parseGalactical('glob prok gold');
      expect(result.roman).toEqual('IV');
      expect(result.weight).toEqual('gold');
      result = toCredits(result.roman, result.weight);
      expect(result.credits).toEqual(57800);
    });

    it('expect pish pish iron to be 3910 credits worth', async () => {
      let result = parseGalactical('pish pish iron');
      expect(result.roman).toEqual('XX');
      expect(result.weight).toEqual('iron');
      result = toCredits(result.roman, result.weight);
      expect(result.credits).toEqual(3910);
    });

    it('expect pish tegj glob glob to be 42 credits worth', async () => {
      let result = parseGalactical('pish tegj glob glob');
      expect(result.roman).toEqual('XLII');
      expect(result.weight).toBeUndefined();
      result = toCredits(result.roman, result.weight);
      expect(result.credits).toEqual(42);
    });
  });
});
