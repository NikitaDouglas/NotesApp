var testNoteList = new NoteList();

function hasAnArrayOfNotes() {
    assert.isTrue(testNoteList.list.length === 0)
}

function canCreateAndStoreNote() {
    testNoteList.createAndStore("Favourite drink: Diet Coke")
    assert.isTrue(testNoteList.list.length === 1)
}

hasAnArrayOfNotes()
canCreateAndStoreNote()