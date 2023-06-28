class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    
};
class SVG {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">${this.shapeColor}${this.text}
        </svg>
        `
    };
    setText(textColor,text){
        this.text=`<text x="100" y="120" font-size="55" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShape(shapeColor){
        this.shapeColor=shapeColor.render()
    }
};

//child of Shape, render different shapes using svg literal template

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return  `<circle cx="100" cy="100" r="100" fill="${this.shapeColor}" />`
    };
};

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<rect width="200" height="200" fill="${this.shapeColor}"/>`
    };
};

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>`
    };
};

function generateLogo(response) {
    let userShape
    if (response.shape === 'Circle') {
        userShape = new Circle(response.shapeColor, response.text, response.textColor)
        const setSVG = new SVG()
        setSVG.setShape(userShape)
        setSVG.setText(response.textColor,response.text)
        return setSVG.render()
    }
    if (response.shape === 'Square') {
        userShape = new Square(response.shapeColor, response.text, response.textColor)
        const setSVG = new SVG()
        setSVG.setShape(userShape)
        setSVG.setText(response.textColor,response.text)
        return setSVG.render()
    }
    if (response.shape === 'Triangle') {
        userShape = new Triangle(response.shapeColor, response.text, response.textColor)
        const setSVG = new SVG()
        setSVG.setShape(userShape)
        setSVG.setText(response.textColor,response.text)
        return setSVG.render()
    }
};

module.exports = {generateLogo, Shape, SVG, Circle, Square, Triangle };

//the code exports the setShape function, along with the Shape, SVG, Circle, Square, and Triangle classes, using the object literal syntax.
//This allows other modules to import and use these classes and the setShape function.