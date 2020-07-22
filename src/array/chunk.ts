export function chunk<T>(chunkNum: number, arr: Array<T>): Array<Array<T>> {
  let idx = 0;
  const len = arr.length;

  if (len <= chunkNum || chunkNum <= 0) {
    return [arr];
  }

  const ret = [];
  do {
    const tem = [];
    for (let i = 0; i < chunkNum && idx < len; i++) {
      tem.push(arr[idx]);
      idx++;
    }

    ret.push(tem);
  } while (idx < len);

  return ret;
}