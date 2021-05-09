function PathtoString(Path){
  return JSON.parse(JSON.stringify(Path).replace(/\\\\/g,'/'))
}
module.exports = PathtoString
