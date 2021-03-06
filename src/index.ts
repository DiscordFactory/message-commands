import { BaseAddon } from '@discord-factory/core-next'
import Guard from './Guard'
import CommandManager from './managers/CommandManager'
import { Command, BaseCommand } from './entities/Command'
import MessageCreate from './events/MessageCreate'
import MakeCommand from './commands/MakeCommand'

export default class Index extends BaseAddon<Index> {
  public addonName = 'MESSAGE_COMMANDS'
  public commandManager: CommandManager = new CommandManager(this)
  public guard: Guard = new Guard(this)

  public async init (): Promise<Index> {
    return this
  }

  public registerHooks () {
    return []
  }

  public registerCLI () {
    return [
      MakeCommand
    ]
  }

  public registerCommands () {
    return []
  }

  public registerEvents () {
    return [
      MessageCreate
    ]
  }

  public defineKeys () {
    return ['APP_PREFIX', 'COMMAND_AUTO_REMOVE']
  }
}

export {
  Command,
  BaseCommand,
}
