/* eslint-disable no-underscore-dangle */

class Building {
    constructor(sqft) {
        this._sqft = sqft;

        // Check if evacuationWarningMessage is implemented in subclasses
        // if (this.evacuationWarningMessage == undefined) {
        //     throw new Error('Class extending Building must override evacuationWarningMessage');
        // }
    }
    // Getter for sqft
    get sqft() {
        return this._sqft;
    }
    // Placeholder for evacuationWarningMessage to indicate it must be overridden
    evacuationWarningMessage() {
        throw new Error('evacuationWarningMessage must be overridden by subclass');
    }
}
