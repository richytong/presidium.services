const m = new Map()

m.set('S3Bucket', [
  'putPublicAccessBlock',
  'putRequestPayment',
  'putObjectLockConfiguration',
  'putVersioning',
])

m.set('HTTP', [
  'request',
])

export default m
