/**
 * Sleep関数
 * @param msec 待機時間 (ミリ秒)
 * @returns Promise
 */
export const sleep = (msec: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, msec));
