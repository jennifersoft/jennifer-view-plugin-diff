function diffUsingJS(viewType) {
    "use strict";
    var byId = function (id) { return document.getElementById(id); },
        base = difflib.stringAsLines(byId("baseText").value),
        newtxt = difflib.stringAsLines(byId("newText").value),
        sm = new difflib.SequenceMatcher(base, newtxt),
        opcodes = sm.get_opcodes(),
        diffoutputdiv = byId("diffoutput"),
        contextSize = byId("contextSize").value;

    diffoutputdiv.innerHTML = "";
    contextSize = contextSize || null;

    diffoutputdiv.appendChild(diffview.buildView({
        baseTextLines: base,
        newTextLines: newtxt,
        opcodes: opcodes,
        baseTextName: $("#baseTextName").text(),
        newTextName: $("#newTextName").text(),
        contextSize: contextSize,
        viewType: viewType
    }));
}

jui.ready([], function() {
    diffUsingJS(1);
});