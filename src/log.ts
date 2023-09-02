import log4js from 'log4js';
import { getWorkdirPath } from './workdir.js';

// ログを初期化
log4js.configure({
  appenders: {
    file: {
      type: 'file',
      filename: getWorkdirPath('bot.log'),
    },
    console: {
      type: 'console',
    },
  },
  categories: {
    default: {
      appenders: ['file', 'console'],
      level: 'info',
    },
  },
});

/** ログ出力用のロガー */
export const logger = log4js.getLogger('app');
