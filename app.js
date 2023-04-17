function Language(name, popularity) {
  this.name = name
  this.popularity = popularity
  this.examples = []
}

Language.prototype.addExample = function (str) {
  this.examples.push(str)
}

Language.prototype.getExample = function (index = 0) {
  return this.examples[index]
}

Language.prototype.countExamples = function () {
  return this.examples.length
}


function ProgrammingLanguage(name, popularity, difficulty, author) {
  Language.call(this, name, popularity)
  this.difficulty = difficulty
  this.author = author
  this.paradigm = null
}

ProgrammingLanguage.prototype.parse = function (code) {
  if (this.parser) {
    return this.parser.process(code)
  } else {
    console.log('No parser provided')
  }
}

ProgrammingLanguage.prototype.useParser = function (parser) {
  this.parser = parser
}

ProgrammingLanguage.prototype.fillParadigm = function (str) {
  this.paradigm = str
}

Object.setPrototypeOf(ProgrammingLanguage, Language)
Object.setPrototypeOf(ProgrammingLanguage.prototype, Language.prototype)


function MarkUpLanguage(name, popularity, complexity, author) {
  Language.call(this, name, popularity)
  this.complexity = complexity
  this.author = author
}

MarkUpLanguage.prototype.parse = function (code) {
  if (this.parser) {
    return this.parser.process(code)
  } else {
    console.log('No parser provided')
  }
}

MarkUpLanguage.prototype.analyze = function (code) {
  return 'Code is fine'
}

MarkUpLanguage.prototype.useParser = function (parser) {
  this.parser = parser
}

Object.setPrototypeOf(MarkUpLanguage, Language)
Object.setPrototypeOf(MarkUpLanguage.prototype, Language.prototype)

function SpeakingLanguage(name, popularity, origin) {
  Language.call(this, name, popularity)
  this.origin = origin
}

SpeakingLanguage.prototype.addCountry = function (countryName) {
  this.countries.push(countryName)
}

SpeakingLanguage.prototype.isPopular = function () {
  return this.popularity > 6
}

SpeakingLanguage.prototype.shiftPopurity = function (value) {
  this.popularity += value
}

Object.setPrototypeOf(SpeakingLanguage, Language)
Object.setPrototypeOf(SpeakingLanguage.prototype, Language.prototype)

function QueryLanguage(name, popularity, author) {
  Language.call(this, name, popularity)
  this.author = author
}

QueryLanguage.prototype.generateId = function () {
  return Math.random().toString().slice(2) + Date.now()
}

QueryLanguage.prototype.executeQuery = function (query) {
  console.log('Query results are ...')
}

QueryLanguage.prototype.changeName = function (name) {
  this.name = name
}

Object.setPrototypeOf(QueryLanguage, Language)
Object.setPrototypeOf(QueryLanguage.prototype, Language.prototype)