## @magic-modules/messages

shows messages with arbitrary types.
supports info, success, warning and error messages out of the box,
and it's easy to add new message types.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### install:
```bash
npm install --save-exact @magic-modules/messages
```

#### usage:

#### HOIST in config.mjs
```javascript
export default {
  // ...other config
  HOIST: ['Messages'],
}
```

#### add message type:
```javascript
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

```


#### changelog

##### 0.0.1 - unreleased
first release

##### 0.0.2
bump required node version to 14.15.4

##### 0.0.3 
update dependencies (@magic-libraries/db)

##### 0.0.4 - unreleased
...

[npm-image]: https://img.shields.io/npm/v/@magic-modules/messages.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/messages
[travis-image]: https://img.shields.io/travis/com/magic-modules/messages/master
[travis-url]: https://travis-ci.com/magic-modules/messages
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/messages/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/messages/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/messages/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/messages
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/messages.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/messages.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/messages/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/messages
