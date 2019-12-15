import { is } from '@magic/test'
import * as Messages from '../src/index.mjs'

export default [
  {
    fn: () => Messages.View,
    expect: is.function,
    info: 'expect Messages.View to be a function',
  },
  {
    fn: () => Messages.propTypes.Messages,
    expect: is.array,
    info: 'expect Messages.propTypes.Messages to be an array',
  },
  {
    fn: () => Messages.actions.messages.add,
    expect: is.fn,
    info: 'expect Messages.actions.messages.add to be a function',
  },
  {
    fn: () => Messages.actions.messages.hide,
    expect: is.fn,
    info: 'expect Messages.actions.messages.hide to be a function',
  },
  {
    fn: () => Messages.effects.messages.wait,
    expect: is.fn,
    info: 'expect Messages.effects.messages.wait to be a function',
  },
]
