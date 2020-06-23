var testNoteList = new NoteList();
var testString1 = "My favourite language is JavaScript!"
var testString2 = "Favourite drink: Diet Coke"

function hasAnArrayOfNotes() {
  assert.isTrue(testNoteList.list.length === 0)
}

function canCreateAndStoreNote() {
  testNoteList.createAndStore()
  assert.isTrue(testNoteList.list.length === 1)
}

function returnNotesInArray() {
  testNoteList.createAndStore(testString1)
  assert.isTrue(Array.isArray(testNoteList.returnNotes()))
}

hasAnArrayOfNotes()
canCreateAndStoreNote()
returnNotesInArray()