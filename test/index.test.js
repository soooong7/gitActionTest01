// TDD(Test Driven Development) 개발 방식
const factorial = require('../src/index');

// describe -> 테스트 그룹 만들기, 'factorial function' -> 그룹 이름 
describe('factorial function', () => { // 람다 함수 사용
    // 테스트 케이스
    it('correctly computes factorial of a positive integer number', () => { // it -> 요거
        expect(factorial(3)).toEqual(6);
        expect(factorial(5)).toEqual(120);
        expect(factorial(4)).toEqual(24);
    });

    // 테스트 케이스
    it('throws an error if a negative input is provided', () => {
        expect(() => { 
            factorial(-1);
        }).toThrow('n must be a positive integer');
    });
});