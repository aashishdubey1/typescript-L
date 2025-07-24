import { expect, it } from "vitest";

// Q.
// export const getName = (params: { first: string; last: string }) => {
//   if (params.last) {
//     return `${params.first} ${params.last}`;
//   }
//   return params.first;
// };

// A.

interface GetNameType {
  first:string,
  last?:string,
}

export const getName = (params:GetNameType) => {
  if(params.last){
    return `${params.first} ${params.last}`;
  }
  return params.first;
}



it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt",
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
