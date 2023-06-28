const { Circle, Square, Triangle } = require('../shapes.js');


    // A test is created to check that modulus does in fact return the remainder of the quotient of the two numbers.
    describe('Circle', () => {
      it('should return a logo with user choice shape, text , and text color', () => {
        const circle = new Circle('orange', 'SKA', 'black');
        expect(circle.render()).toEqual(`<circle cx="100" cy="100" r="100" fill="orange" />`
        );
      });
    });
    describe('Square', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const square = new Square('yellow','SKA','green');
            expect(square.render()).toEqual(`<rect width="200" height="200" fill="yellow"/>`
            );
        });
    });

    describe('Triangle', () => {
        it('should return logo with user choice of shape color, tex, and text color', () => {
            const triangle = new Triangle('blue','SKA','white');
            expect(triangle.render()).toEqual(`<polygon points="100, 15 200, 200 0, 200" fill="blue"/>`
            );
        });
    }); 