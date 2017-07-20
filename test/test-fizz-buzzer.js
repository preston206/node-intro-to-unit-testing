const should = require('chai').should(),
fizzbuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should produce fizz buzz', function() {
        let normal = [
            {a: 3, expected: "fizz"},
            {a: 5, expected: "buzz"},
            {a: 15, expected: "fizz-buzz"}
            ];
        normal.forEach((input) => {
            let answer = fizzbuzzer(input.a);
            answer.should.equal(input.expected);
        });
    });

    it('should be false if not numerical', function() {
        let abnormal = ["turtle"];
        abnormal.forEach((input) => {
            (function() {
                fizzbuzzer(input)
            }).should.throw(Error);
        })
    })
})