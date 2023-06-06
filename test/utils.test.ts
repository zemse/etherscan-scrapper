import { extractEthValue } from '../src';

describe('utils', () => {
  describe('extractEthValue', () => {
    it('works 1', () => {
      expect(extractEthValue('8.489 Eth')).toEqual('8.489');
    });

    it('works 2', () => {
      expect(extractEthValue('8.489')).toEqual('8.489');
    });

    it('works 3', () => {
      expect(extractEthValue('3,718,755.726730572282213299 Eth')).toEqual(
        '3,718,755.726730572282213299'
      );
    });
  });
});
