import { expect, it } from "vitest";

//Q. 
// export const addTwoNumbers = (a, b) => {
//   return a + b;
// };

//A. 
export const addTwoNumbers = function (a:number,b:number):number{
  return a+b
}

it("Should add the two numbers together", () => {
  expect(addTwoNumbers(2, 4)).toEqual(6);
  expect(addTwoNumbers(10, 10)).toEqual(20);
});
