var testNoteList = new NoteList();

function hasAnArrayOfNotes() {
    assert.isTrue(testNoteList.list.length === 0)
}

hasAnArrayOfNotes()