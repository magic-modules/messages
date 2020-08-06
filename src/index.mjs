export const View = props => {
  CHECK_PROPS(props, propTypes, 'Messages')

  return div(
    { class: 'Messages' },
    ul(
      props.messages.map(msg =>
        li({ class: { Message: 1, [msg.type]: 1 } }, [
          msg.title && h3(msg.title),
          typeof msg.content.map === 'function'
            ? msg.content.map(a => p(a))
            : msg.content && p(msg.content),
          button({ class: 'close', onclick: [actions.messages.hide, msg] }, 'x'),
        ]),
      ),
    ),
  )
}

export const state = {
  messages: [],
}

export const actions = {
  messages: {
    add: (state, message) => {
      state.messages.push(message)

      if (message.duration) {
        return [{ ...state }, [effects.messages.wait, message]]
      }

      return {
        ...state,
      }
    },

    hide: (state, message) => {
      let index = -1
      if (typeof message === 'string') {
        const msg = state.messages.find(msg => msg.title === message)
        index = state.messages.indexOf(msg)
      } else {
        index = state.messages.indexOf(message)
      }

      // maybe the message already got removed by some other action
      if (index > -1) {
        state.messages.splice(index, 1)
      }

      return {
        ...state,
      }
    },
  },
}

export const effects = {
  messages: {
    wait: (dispatch, message) => {
      if (message.duration < 60) {
        message.duration *= 1000
      }

      setTimeout(() => dispatch([actions.messages.hide, message]), message.duration)
    },
  },
}

export const global = {
  state: {
    messages: true,
  },
}

export const propTypes = {
  Messages: [
    {
      key: 'messages',
      type: 'array',
    },
  ],
}

export const style = (vars = {}) => ({
  position: 'fixed',
  right: 0,
  bottom: 0,
  zIndex: 1,
  maxWidth: '300px',

  '.Message': {
    backgroundColor: vars.colors.gray[900],
    border: '1px solid',
    borderRadius: '7px',
    margin: '0.5em',
    padding: '0.5em',
    position: 'relative',
    float: 'right',
    clear: 'both',

    h3: {
      padding: 0,
    },

    'button.close': {
      position: 'absolute',
      top: '-0.75em',
      right: '-0.5em',
      padding: 0,
      margin: '0',
      width: '1.5em',
      height: '1.5em',
      borderRadius: '100%',
      backgroundColor: vars.colors.gray[900],
      color: vars.colors.gray[100],
      fontSize: '0.9em',

      '&:hover': {
        backgroundColor: vars.colors.gray[100],
        color: vars.colors.gray[900],
      },
    },

    '.light&&': {
      backgroundColor: vars.colors.gray[100],
      color: vars.colors.gray[900],

      button: {
        backgroundColor: vars.colors.gray[100],
        color: vars.colors.gray[900],

        '&:hover': {
          backgroundColor: vars.colors.gray[900],
          color: vars.colors.gray[100],
        },
      },
    },
  },

  '.warning': {
    h3: {
      color: vars.colors.yellow[900],
    },
  },
  '.success': {
    h3: {
      color: vars.colors.green[400],
    },
  },
  '.error': {
    h3: {
      color: vars.colors.red[500],
    },
  },
})
