# Classes in js

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.

For more examples and explanations, see the Using classes guide.

## Description

### Defining classes

Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways: a class expression or a class declaration.

```JS

// Declaration
class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
constructor(height, width) {
this.height = height;
this.width = width;
}
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
constructor(height, width) {
this.height = height;
this.width = width;
}
};
```

Like function expressions, class expressions may be anonymous, or have a name that's different from the variable that it's assigned to. However, unlike function declarations, class declarations have the same temporal dead zone restrictions as let or const and behave as if they are not hoisted.

### Class body

The body of a class is the part that is in curly braces {}. This is where you define class members, such as methods or constructor.

The body of a class is executed in strict mode even without the "use strict" directive.

A class element can be characterized by three aspects:

1. Kind: Getter, setter, method, or field
2. Location: Static or instance
3. Visibility: Public or private
   Together, they add up to 16 possible combinations. To divide the reference more logically and avoid overlapping content, the different elements are introduced in detail in different pages:

- Method definitions
  Public instance method

- getter
  Public instance getter

- setter
  Public instance setter

- Public class fields
  Public instance field

- static
  Public static method, getter, setter, and field

- Private properties
  Everything that's private

* Note: Private properties have the restriction that all property names declared in the same class must be unique. All other public properties do not have this restriction — you can have multiple public properties with the same name, and the last one overwrites the others. This is the same behavior as in object initializers.

In addition, there are two special class element syntaxes: constructor and static initialization blocks, with their own references.

- Constructor
  The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.

A constructor can use the super keyword to call the constructor of the super class.

You can create instance properties inside the constructor:

```JS
Copy to Clipboard
class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
}
```

Alternatively, if your instance properties' values do not depend on the constructor's arguments, you can define them as class fields.

Static initialization blocks
Static initialization blocks allow flexible initialization of static properties, including the evaluation of statements during initialization, while granting access to the private scope.

Multiple static blocks can be declared, and these can be interleaved with the declaration of static fields and methods (all static items are evaluated in declaration order).

### Methods

Methods are defined on the prototype of each class instance and are shared by all instances. Methods can be plain functions, async functions, generator functions, or async generator functions. For more information, see method definitions.

```JS
Copy to Clipboard
class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
// Getter
get area() {
return this.calcArea();
}
// Method
calcArea() {
return this.height * this.width;
}
*getSides() {
yield this.height;
yield this.width;
yield this.height;
yield this.width;
}
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```
