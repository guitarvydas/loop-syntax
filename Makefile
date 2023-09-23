ODIN_FLAGS ?= -debug -o:none

all: dev

dev: 
	rm -f transpiler
	odin run . $(ODIN_FLAGS) >out/gen.js
	cat js/support.js out/gen.js >out/pl.js
	node out/pl.js
