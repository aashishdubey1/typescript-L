import { expect, it } from "vitest";


// Q.
// export const addTwoNumbers = (params) => {
//   return params.first + params.second;
// };

// A.
// export const addTwoNumbers = (params:{first:number,second:number})=>{
//   return params.first+params.second
// }

interface objProps  {
  first:number,
  second:number
}
export const addTwoNumbers = (params:objProps)=>{
  return params.first+params.second
}

it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
