/* eslint-disable no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name; // Using setter to ensure validation
    this.length = length; // Using setter to ensure validation
    this.students = students; // Using setter to ensure validation
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name with type-checking
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length with type-checking
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students with type-checking
  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
