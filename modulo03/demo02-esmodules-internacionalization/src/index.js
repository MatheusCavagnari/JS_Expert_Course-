import database from "./../database.json"
import Person from "./person.js";
import TerminalController from './terminalController.js'
import { save } from './repository.js'
const DEFAULT_LANG = "pt-BR";
const STOP_TERM = ":q"

const terminalController = new TerminalController()
terminalController.initializeTerminal(database, DEFAULT_LANG)

async function mainLoop() {
  try {
    const answer = await terminalController.question('What??')
    console.log('answer')
    if (answer === STOP_TERM) {
      terminalController.closeTerminal()
      console.log('process finished')
      return;
    }
    const person = Person.generateInstanceFromString(answer)
    console.log('person', person.fromatted(DEFAULT_LANG))
    terminalController.updateTable(person.fromatted(DEFAULT_LANG))
    save(person)
    return mainLoop()

  } catch (error) {
    console.log('Deu Ruim**', error)
    return mainLoop()
  }
}

await mainLoop()

