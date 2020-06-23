var testString = "My favourite language is JavaScript!"
var testNote = new Note(testString);

function testNoteInstantiatesWithText() {
  assert.isTrue(testNote.text === testString)
}

function testReturnText() {
  assert.isTrue(testNote.returnText() === testString)
}

testNoteInstantiatesWithText()
testReturnText()