export const View = state => {
  const permanentMessage = {
    title: 'testmessage title',
    content: ['testmessage content.', 'does not disappear by itself.'],
    type: 'info',
  }

  const message = {
    title: 'testmessage title',
    content: 'testmessage content.',
    duration: 5,
    type: 'info',
  }

  const warning = {
    title: 'testwarning title',
    content: 'testwarning content',
    duration: 20,
    type: 'warning',
  }

  const error = {
    title: 'testerror title',
    content: 'testerror content',
    duration: 10,
    type: 'error',
  }

  const success = {
    title: 'testsuccess title',
    content: ['testsuccess content', 'is an array'],
    duration: 5,
    type: 'success',
  }

  const newType = {
    title: 'newType title',
    content: 'newType message content',
    duration: 5,
    type: 'newType',
  }

  const selfclosingMessage = {
    title: 'self closing',
    content: [
      'click the button to remove the message:',
      button({ onclick: [actions.messages.hide, 'self closing'] }, 'remove self closing message'),
    ],
  }

  return [
    h1(state.title),
    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
      ' Messages component. ',
      state.description,
    ]),

    GitBadges('magic-modules/messages'),

    h2({ id: 'installation' }, 'installation:'),
    Pre('npm install @magic-modules/messages'),

    h2({ id: 'usage' }, 'usage:'),

    Pre(`
export const View = {
  const message = {
    // can be, but should not be, an array of modules too.
    title: 'testwarning title',
    // can be an array of modules too
    content: 'testwarning content',
    // leave empty to prevent the message from disappearing.
    // if duration is smaller then 60, seconds are assumed, else milliseconds.
    duration: 20,
    // type can also be one of success, error, warning
    type: 'info',
  }

  return button({ onclick: [actions.messages.add, message] }, 'add message')
}
    `),

    button({ onclick: [actions.messages.add, message] }, 'add message'),
    button({ onclick: [actions.messages.add, error] }, 'add error'),
    button({ onclick: [actions.messages.add, warning] }, 'add warning'),
    button({ onclick: [actions.messages.add, success] }, 'add success'),
    button({ onclick: [actions.messages.add, permanentMessage] }, 'add permanent message'),
    button({ onclick: [actions.messages.add, selfclosingMessage] }, 'add selfclosing message'),

    h3({ id: 'usage-custom-message-type' }, 'custom messages type'),

    Pre(`
export const View = () => {
  const msg = {
    type: 'newType',
    title: 'newType title',
    content: 'newType content',
    duration: 5,
  }

  return button({ onclick: [actions.messages.add, msg] })
}

// needed in the ssr step for now,
// gets overwritten by @magic-modules/messages with the correct actions.
export const actions = {
  messages: {},
}

export const style = vars => ({
  '.Messages': {
      '.Message.newType': {
        h3: {
          color: vars.colors.pink[900],
        },
      },
    },
  }
})
  `),

    button({ onclick: [actions.messages.add, newType] }, 'add custom message'),

    h2({ id: 'source' }, 'source'),
    p([
      'the source for this page is in the ',
      Link(
        { to: 'https://github.com/magic-modules/messages/tree/master/example' },
        'example directory',
      ),
      ' and gets built and published to github using ',
      Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
    ]),

    Messages(state),
  ]
}

export const actions = {
  messages: {},
}

export const effects = {
  messages: {},
}

export const style = vars => ({
  '.Messages': {
    '.Message.newType': {
      h3: {
        color: vars.colors.pink[900],
      },
    },
  },
})
