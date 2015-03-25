# https://gist.github.com/guysmoilov/63812908330ec5a0aa9e

laxBrowserPolicy = ->
  BrowserPolicy.content.allowOriginForAll "localhost:*"
  BrowserPolicy.content.allowConnectOrigin "ws://localhost:*"
  BrowserPolicy.content.allowConnectOrigin "http://localhost:*"

Meteor.startup ->
  BrowserPolicy.content.disallowInlineScripts()
  BrowserPolicy.content.disallowInlineStyles()
  BrowserPolicy.content.disallowEval()

  if process.env.IS_MIRROR
    console.log "WARNING!!! Setting lax browser policy for mirror"
    laxBrowserPolicy()
    BrowserPolicy.framing.allowAll()
  else if process.env.NODE_ENV is 'development'
    console.log "WARNING!!! Setting lax browser policy for development environment"
    laxBrowserPolicy()
    BrowserPolicy.content.allowFrameOrigin 'http://localhost:*' # This allows client integration tests to run in an iframe inside our dev browser
    BrowserPolicy.framing.disallow()
  else
    console.log "Setting strict browser policy for production"
    BrowserPolicy.framing.disallow()
