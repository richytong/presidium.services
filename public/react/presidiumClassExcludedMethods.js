const m = new Map()

m.set('S3Bucket', [
  'getLocation',
  'putPublicAccessBlock',
  'putRequestPayment',
  'putObjectLockConfiguration',
  'putVersioning',
  'getObjectACL',
])

m.set('HTTP', [
  'request',
])

m.set('TranscribeStream', [
  'marshalHeaders',
  'unmarshalMessage',
  'marshalStringHeaderValue',
  'unmarshalHeaders',
])

m.set('ServerWebSocket', [
  'connect',
])

m.set('GoogleChromeDevTools', [
  'sendRequestJSON',
])

export default m
