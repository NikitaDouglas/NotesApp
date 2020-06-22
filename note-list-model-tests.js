function hasAnArrayOfNotes() {
    var testNoteList = new NoteList();
        assert.isTrue(testNoteList.list.length === 0)
}

hasAnArrayOfNotes()