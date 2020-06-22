function NoteList() {
    this.list = []
}

NoteList.prototype = (function(){

    function createAndStore(text) {
        this.list.push(new Note(text))
    }

    function returnNotes() {
       return this.list
    }

    return {
        createAndStore: createAndStore,
        returnNotes: returnNotes
    }

})();