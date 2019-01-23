var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object,{[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  console.log(object)
  object[key] = value
  console.log(object)
  return object
}