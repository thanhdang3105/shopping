import { createStores } from './core.js'
import reducer from './reducer.js'

const { attach, connect, dispatch } = createStores(reducer)

window.dispatch = dispatch

export { attach, connect }