var loaderUtils = require('loader-utils')

module.exports = function () {}
module.exports.pitch = function (remainingRequest) {
  if (this.cacheable) this.cacheable()

  return [
    '// fake-style-loader: Loads css',
    '',
    'var content = require(' + loaderUtils.stringifyRequest(this, '!!' + remainingRequest) + ');',
    'if (typeof content === "string") content = [[module.id, content, ""]];',
    '',
    'module.exports = content.locals || {}',
    'module.exports.source = content',
  ].join('\n')
}
