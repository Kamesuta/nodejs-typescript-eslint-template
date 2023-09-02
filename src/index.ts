import { logger } from './log.js';
import { config } from './config.js';
import { sleep } from './utils.js';

/**
 * メイン処理
 * @returns Promise
 */
async function main(): Promise<void> {
  // 起動時にログを出力
  logger.info('Hello, world! こんにちは、世界！ 你好，世界！ नमस्ते, दुनिया!');

  // 1秒待つ
  await sleep(1000);

  // ログ出力
  logger.info('Hello, world after 1 second!');

  // コンフィグを出力
  logger.info(`config.some_text_setting: ${config.some_text_setting}`);
}

void main();
