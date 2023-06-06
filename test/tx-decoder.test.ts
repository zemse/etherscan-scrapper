import { stateDiff } from '../src';

describe('tx-decoder', () => {
  it('works 1', async () => {
    const result = await stateDiff(
      '0x68227e0c0183f6dec64a36a2c79cc4b8a6ddfe86bdf248264cc9abf887368fca'
    );

    // console.log(JSON.stringify(result, null, 2));

    expect(result).toEqual({
      '0x1f9090aae28b8a3dceadf281b0f12828e676c326': {
        ethBalance: {
          before: '8.488922679767126089',
          after: '8.488922679767126089',
        },
      },
      '0x8852565ac1904f1b1e951d833056c25c5bce7ad6': {
        storage: {
          '0x0000000000000000000000000000000000000000000000000000000000000001': {
            before:
              '0x0000000000000000000000000000000100000000000000000000000000000243',
            after:
              '0x0000000000000000000000000000000100000000000000000000000000000245',
          },
          '0x564e8afcc004fc85c6983750e77bf3a4bcfe1db491c5c3960b5423bfa4d74abe': {
            before:
              '0x0000000000000000000000000000000000000000000000000000000000000000',
            after:
              '0x0000000000000000000000000000000000000000000000020000000000000002',
          },
          '0xb21769473a98c1ba3e6d2bc72b8bbb799cd2c30a9cff3f1428f7037f772e03ed': {
            before:
              '0x0000000000000000000000000000000000000000000000000000000000000000',
            after:
              '0x00000000000000006430b14fad0bbcd01b3ec374f63a0a70e5062addc6f899f5',
          },
          '0xf2ea61076c3f88cea3c655e10a54301f9c88b3a091e2a560a3cbab06c0320e17': {
            before:
              '0x0000000000000000000000000000000000000000000000000000000000000000',
            after:
              '0x0000000000000000000000000000000000000000000000000000000000000002',
          },
        },
      },
      '0xad0bbcd01b3ec374f63a0a70e5062addc6f899f5': {
        ethBalance: { before: '0.005', after: '0.002318460394785312' },
      },
    });
  });

  it('works 2', async () => {
    const result = await stateDiff(
      '0x9cd6fe2e579f546a4f7e285e4e7a61751a225634acc1a8217db5c0c0ba16e169'
    );

    // console.log(JSON.stringify(result, null, 2));

    expect(result).toEqual({
      '0x0000b8e312942521fb3bf278d2ef2458b0d3f243': {
        ethBalance: {
          before: '0.930142133653459141',
          after: '3.001748256103282837',
        },
      },
      '0x007933790a4f00000099e9001629d9fe7775b800': {
        ethBalance: {
          before: '0.002789519813581869',
          after: '0.002789519813581869',
        },
      },
      '0x690b9a9e9aa1c9db991c7721a92d351db4fac990': {
        ethBalance: {
          before: '2.420159065425131312',
          after: '2.420159065425131312',
        },
      },
      '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2': {
        ethBalance: {
          before: '3,718,755.726730572282213299',
          after: '3,718,755.726730572282213299',
        },
        storage: {
          '0x5b1fd252f972f66f1de33cbc3b44509a4ec1fc4dee11857461b8b9131f605c42': {
            before:
              '0x0000000000000000000000000000000000000000000000008a069b1abbeed696',
            after:
              '0x0000000000000000000000000000000000000000000000006d4cfe5770cd46f6',
          },
        },
      },
    });
  });
});
