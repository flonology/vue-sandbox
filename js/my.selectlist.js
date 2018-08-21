My.SelectList = function(entries) {
    var listEntries = entries;
    var first = 0;
    var last = listEntries.length - 1;
    var current = 0;

    var isEmpty = function() {
        return listEntries.length === 0
    };

    var unselectCurrent = function() {
        if (isEmpty()) {
            return;
        }

        listEntries[current].selected = false;
    };

    var selectCurrent = function() {
        if (isEmpty()) {
            return;
        }

        listEntries[current].selected = true
    };

    var selectIndex = function(index) {
        if (isEmpty()) {
            return;
        }

        unselectCurrent();
        current = index;
        selectCurrent();
    };

    var selectNext = function() {
        if (isEmpty()) {
            return;
        }

        if (current === last) {
            selectIndex(first);
            return;
        }

        selectIndex(current + 1);
    };

    var selectPrev = function() {
        if (isEmpty()) {
            return;
        }

        if (current === first) {
            selectIndex(last);
            return;
        }

        selectIndex(current - 1);
    };

    selectCurrent();

    return {
        entries: listEntries,
        selectNext: selectNext,
        selectPrev: selectPrev
    };
};
