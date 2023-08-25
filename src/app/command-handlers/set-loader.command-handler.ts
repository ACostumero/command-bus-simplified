import {Injectable} from "@angular/core";
import {SetLoaderCommand} from "@app-commands/set-loader.command";
import {CommandHandler} from "@app-core/command-bus/decorators/command-handler.decorator";
import {ICommandHandler} from "@app-core/command-bus/interfaces/command-handler.interface";
import {Logger} from "@app-core/utils/logger.util";
import {LoaderState} from "@app-shared/state/loader.state";
import {EMPTY, of} from "rxjs";

@Injectable()
@CommandHandler('SetLoaderCommand')
export class SetLoaderCommandHandler implements ICommandHandler {

  constructor(private readonly _loaderState: LoaderState) {}

  public handle(command: SetLoaderCommand) {
    Logger.info(['[SetLoaderCommandHandler] -> handle()', command.payload].join( ' - ' ));
    this._loaderState.isContentLoading = command.payload;
    return EMPTY;
  }
}
