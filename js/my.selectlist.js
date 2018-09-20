My.SelectList = function(entries) {
    var listEntries = entries;
    var idMap = [];
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

    var getCurrent = function() {
        return listEntries[current];
    };

    var find = function(id) {
        if (isEmpty()) {
            return null;
        }

        return idMap[id];
    }

    var initIdMap = function() {
        for (var i = first; i <= last; i++) {
            listEntries[i].selected = false;
            idMap[listEntries[i].id] = listEntries[i];
        }
    }

    initIdMap();
    selectCurrent();

    return {
        entries: listEntries,
        getCurrent: getCurrent,
        selectNext: selectNext,
        selectPrev: selectPrev,
        find: find
    };
};
