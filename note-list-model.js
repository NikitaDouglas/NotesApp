function NoteList() {
    this.list = []
}

NoteList.prototype = (function(){

    function createAndStore(text) {
        this.list.push(new Note(text))
    }

    return {
        createAndStore: createAndStore
    }

})();