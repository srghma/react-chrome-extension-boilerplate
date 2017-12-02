import WriteJsonPlugin from 'write-json-webpack-plugin'

import { root, outputDir, env } from '~/webpack/lib'

const contentSecurityPolicy = [
  "default-src 'self';",
  "script-src 'self';",
  "style-src * 'unsafe-inline';",
  "img-src 'self' data:;",
  ...env(
    [
      // allow remote-redux-devtools
      'connect-src * data:;',
    ],
    []
  ),
].join(' ')

export default [
  new WriteJsonPlugin({
    filename: 'manifest.json',
    pretty:   true,
    object:   {
      version:          '0.0.0',
      name:             'react-chrome-extension-example',
      manifest_version: 2,
      description:      'Example for react-chrome-extension-boilerplate',
      browser_action:   {
        default_title: 'React Chrome Extension Example',
        default_popup: 'popup.html',
      },
      icons: {
        16:  'img/icon-16.png',
        48:  'img/icon-48.png',
        128: 'img/icon-128.png',
      },
      background: {
        page: 'background.html',
      },
      permissions:             ['contextMenus', 'tabs', 'storage'],
      content_security_policy: contentSecurityPolicy,
    },
  }),
]