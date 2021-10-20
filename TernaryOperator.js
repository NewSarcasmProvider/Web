let value = NaN

let output = (Number.isNaN(value)) ? 'value = NaN' :
  (value === null) ? 'value = null' :
  (value === undefined) ? 'value = undefined!' :
  (value === 0) ? 'value = 0' :
  (value === "") ? 'value = ""':
  (value === false) ? 'value = false' :
  'Something other!'

console.log( output )
