import {generateRandomHexColor} from "@app-core/functions/generate-random-hex-color.function";

enum LOG_LEVEL {
DEBUG,
INFO,
SUCCESS,
WARNING,
ERROR,
};

type TLogStyleMap = {[severity in LOG_LEVEL]: string}

export class Logger {
  private static readonly logStyleMap: TLogStyleMap = {
    [LOG_LEVEL.DEBUG]: 'color: #DA70D6', // Pink
    [LOG_LEVEL.INFO]: 'color: #00BFFF', // Blue
    [LOG_LEVEL.SUCCESS]: 'color: #2E8B57', // Green
    [LOG_LEVEL.WARNING]: 'color: #FFC107', // Amber
    [LOG_LEVEL.ERROR]: 'color: #F44336' // Red
  }

  public static debug(message: string): void {
    Logger._log(message, LOG_LEVEL.DEBUG);
  }

  public static info(message: string): void {
    Logger._log(message, LOG_LEVEL.INFO);
  }

  public static warning(message: string): void {
    Logger._log(message, LOG_LEVEL.WARNING);
  }

  public static error(message: string): void {
    Logger._log(message, LOG_LEVEL.ERROR);
  }

  public static withRandomColor(message: string): void {
    Logger._log(message);
  }

  private static _log(message: string, severity?: LOG_LEVEL): void {
    const style = Logger._getStyleFromLogLevel(severity);
    console.log(`%c${message}`, style);
  }

  private static _getStyleFromLogLevel(severity?: LOG_LEVEL) {
    if(severity === undefined) return generateRandomHexColor();
    return Logger.logStyleMap[severity];
  }

}
