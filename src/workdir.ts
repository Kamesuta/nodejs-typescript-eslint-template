import { join } from 'path';

/** ワークディレクトリのパス */
export const workdir = process.env.APP_BASEDIR ?? 'run';

/**
 * ワークディレクトリからのパスを取得
 * @param path ワークディレクトリからの相対パス
 * @returns パス
 */
export function getWorkdirPath(path: string): string {
  return join(workdir, path);
}
