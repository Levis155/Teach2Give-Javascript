# let and const for block scoped variables

Before ES6, JavaScript only had function scopes and global scope which led to issues like variable hoisting

Unlike _var_, _let_ declarations are not hoisted. Hoisting is JavaScript's default behaviour of moving functions and variable declarations to the top of their scope meaning that function declarations can be called before they appear in the code and variable declarations(not assignments) are moved to the top of their scope.

Variables declared with the _const_ keyword must be initialized, on the other hand, variables declared with the _let_ keyword can go uninitialized.