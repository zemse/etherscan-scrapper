import puppeteer from 'puppeteer';
import { extractEthValue } from './utils';

export interface StateDiff {
  [address: string]: {
    ethBalance: {
      before: string;
      after: string;
    };
    storage: {
      [storageSlot: string]: {
        before: string;
        after: string;
      };
    };
  };
}

export interface Record<T> {
  before: T;
  after: T;
}

export interface RecordsByAddress<T> {
  [address: string]: Record<T>;
}

export async function stateDiff(txHash: string) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto('https://etherscan.io/tx-decoder?tx=' + txHash);

  const content = await page.$('#ContentPlaceHolder1_accountStateDiff ')!;
  let trHandles = await content?.$$('tr')!;

  const result: { [address: string]: { [dataName: string]: any } } = {};

  let lastAddress = '';
  for (const tr of trHandles.slice(1)) {
    if (!(await tr.isHidden())) {
      // address entry
      let data = await tr.$$eval('td', nodes => {
        let address = nodes[0].getAttribute('id');
        let ethBalanceBefore =
          nodes[3].querySelector('span')?.innerText ??
          nodes[3].innerText ??
          undefined;
        let ethBalanceAfter =
          nodes[4].querySelector('span')?.innerText ??
          nodes[3].innerText ??
          undefined;
        if (address !== null) {
          return {
            address,
            ethBalance: { before: ethBalanceBefore, after: ethBalanceAfter },
          };
        } else {
          return undefined;
        }
      })!;
      if (data) {
        if (!!data.ethBalance.before && !!data.ethBalance.after) {
          result[data.address] = {
            ...(result[data.address] ?? {}),
            ethBalance: {
              before: extractEthValue(data.ethBalance.before),
              after: extractEthValue(data.ethBalance.after),
            },
          };
        }
        lastAddress = data.address;
      }
    } else {
      // storage entry
      console.log('storage');

      //   const storage1: RecordsByAddress<string> = {} as any;
      //   const storage2: RecordsByAddress<string> = {} as any;
      const storage = await tr.$$eval('td div', nodes => {
        return nodes
          .map(topDiv => topDiv.querySelectorAll('div'))
          .filter(divs => divs.length >= 2)
          .map(divs => {
            console.log('storage2');
            let storageSlot = divs[0].querySelector('dd')?.innerText!;
            let before = divs[1].querySelector('dd span')?.innerHTML!;
            let after = divs[3].querySelector('dd span')?.innerHTML!;
            return [storageSlot, { before, after }] as const;
          })
          .reduce((acc, cur) => {
            acc[cur[0]] = cur[1];
            return acc;
          }, {} as RecordsByAddress<string>);
      });
      console.log('storage4');
      result[lastAddress] = {
        ...(result[lastAddress] ?? {}),
        storage,
      };
      console.log('storage5');
    }
  }

  await page.close();
  await browser.close();
  return result;
}
