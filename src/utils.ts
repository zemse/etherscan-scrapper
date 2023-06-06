export function extractEthValue(str: string): string;
export function extractEthValue(str: undefined): undefined;
export function extractEthValue(str: string | undefined) {
  if (str) {
    return str.match(/[+-]?([0-9+\,]*[.])?[0-9]+(?= Eth)/)?.[0] ?? str;
  }
  return undefined;
}
