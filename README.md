# etherscan-scrapper

queries the etherscan ui and simply picks values from the rendered dom.

## state diff

https://etherscan.io/tx-decoder?tx=0x9cd6fe2e579f546a4f7e285e4e7a61751a225634acc1a8217db5c0c0ba16e169

```ts
import {stateDiff} from 'etherscan-scrapper';
stateDiff("0x9cd6fe2e579f546a4f7e285e4e7a61751a225634acc1a8217db5c0c0ba16e169")
```

```json
{
  "0x0000b8e312942521fb3bf278d2ef2458b0d3f243": {
    "ethBalance": {
      "before": "0.930142133653459141",
      "after": "3.001748256103282837"
    }
  },
  "0x007933790a4f00000099e9001629d9fe7775b800": {
    "ethBalance": {
      "before": "0.002789519813581869",
      "after": "0.002789519813581869"
    }
  },
  "0x690b9a9e9aa1c9db991c7721a92d351db4fac990": {
    "ethBalance": {
      "before": "2.420159065425131312",
      "after": "2.420159065425131312"
    }
  },
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
    "ethBalance": {
      "before": "3,718,755.726730572282213299",
      "after": "3,718,755.726730572282213299"
    },
    "storage": {
      "0x5b1fd252f972f66f1de33cbc3b44509a4ec1fc4dee11857461b8b9131f605c42": {
        "before": "0x0000000000000000000000000000000000000000000000008a069b1abbeed696",
        "after": "0x0000000000000000000000000000000000000000000000006d4cfe5770cd46f6"
      }
    }
  }
}
```


## license

MIT

## disclaimer

this repository is made available for educational purpose only. any entity involving with this repository hereby acknowledges that the use must be against toc of etherscan and any kind of use might cause IP to be blacklisted by etherscan or any kind of some legal action to be taken against the user of this repository. the author assumes no liability. 