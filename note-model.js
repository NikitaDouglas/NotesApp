function Note(text) {
    this.text = text
}

Note.prototype = (function() {

    function returnText() {
        return this.text
    }

    return {
        returnText: returnText
    };

})();