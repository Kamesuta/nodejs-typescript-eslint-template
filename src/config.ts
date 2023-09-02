import assert from 'assert';
import { parse } from 'toml';
import { getWorkdirPath } from './workdir.js';
import { copyFileSync, existsSync, readFileSync } from 'fs';

/**
 * 設定ファイルの構造
 */
export interface Config {
  /*
   * コンフィグ名はスネークケースで書く。そのためeslintの命名規則を無効化しています。
   * ルール設定の requiresQuotes はクォートで囲む必要のある文字列(スペースなどを含むもの)のみ除外の対象になるため、ここでは eslint-disable が必要です。
   */
  /* eslint-disable @typescript-eslint/naming-convention */

  /** Example of string setting */
  some_text_setting: string;

  /* eslint-enable @typescript-eslint/naming-convention */
}

// config.tomlが存在しない場合はconfig.default.tomlをコピーする
if (!existsSync(getWorkdirPath('config.toml'))) {
  copyFileSync(getWorkdirPath('config.default.toml'), getWorkdirPath('config.toml'));
}

/** 設定 */
export const config: Config = parse(readFileSync(getWorkdirPath('config.toml'), 'utf-8')) as Config;

// 型をチェック
assert(
  config.some_text_setting && typeof config.some_text_setting === 'string',
  'some_text_settingは必須です。',
);
