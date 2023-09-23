{
    input : function (cs) { return cs.rwr ().join(''); },
    item : function (x) {return x.rwr ();},
    word : function (legalchars) { return "❲" + legalchars.rwr ().join ('') + "❳"},
    separator: function (c) { return c.rwr () },
    comment: function (kcomment, cs, nl) { return kcomment.rwr () + cs.rwr ().join ('') + nl.rwr (); },
    higherLevelSeparator: function (c) { return c.rwr () },

    _terminal: function() { return this.sourceString; },
    _iter: function (...children) { return children.map(c => c.rwr ()); }
}
