(function(exports) {
function NoteList() {
    this.list = [];
}

NoteList.prototype.createAndStore = function(text) {
    this.list.push(new Note(text));
 }

NoteList.prototype.returnNotes = function() {
    return this.list;
}

exports.NoteList = NoteList;

})(this);