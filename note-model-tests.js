function testNoteInstantiatesWithText() {
    var testString = "My favourite language is JavaScript!"
    var testNote = new Note(testString);
    assert.isTrue(testNote.text === testString)
}

testNoteInstantiatesWithText()