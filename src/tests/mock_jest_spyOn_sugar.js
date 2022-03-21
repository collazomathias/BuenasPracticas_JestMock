import * as app from "../App";
import * as math from "../Math";

test("calls math.add", () => {
  // store the original implementation
  const originalAdd = math.add;
  // mock add with the original implementation
  math.add = jest.fn(originalAdd);
  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3);
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // override the implementation
  math.add.mockImplementation(() => "mock");
  expect(app.doAdd(1, 2)).toEqual("mock");
  expect(math.add).toHaveBeenCalledWith(1, 2);
  // restore the original implementation
  math.add = originalAdd;
  expect(app.doAdd(1, 2)).toEqual(3);
});

test("calls math.subtract", () => {
  // store the original implementation
  const originalSubtract = math.subtract;
  // mock subtract with the original implementation
  math.subtract = jest.fn(originalSubtract);
  // spy the calls to subtract
  expect(app.doSubtract(2, 5)).toEqual(3);
  expect(math.subtract).toHaveBeenCalledWith(2, 5);
  // override the implementation
  math.subtract.mockImplementation(() => "mock");
  expect(app.doSubtract(2, 5)).toEqual("mock");
  expect(math.subtract).toHaveBeenCalledWith(2, 5);
  // restore the original implementation
  math.subtract = originalSubtract;
  expect(app.doSubtract(2, 5)).toEqual(3);
});

test("calls math.multiply", () => {
  // store the original implementation
  const originalMultiply = math.multiply;
  // mock multiply with the original implementation
  math.multiply = jest.fn(originalMultiply);
  // spy the calls to multiply
  expect(app.doMultiply(4, 4)).toEqual(16);
  expect(math.multiply).toHaveBeenCalledWith(4, 4);
  // override the implementation
  math.multiply.mockImplementation(() => "mock");
  expect(app.doMultiply(4, 4)).toEqual("mock");
  expect(math.multiply).toHaveBeenCalledWith(4, 4);
  // restore the original implementation
  math.multiply = originalMultiply;
  expect(app.doMultiply(4, 4)).toEqual(16);
});

test("calls math.divide", () => {
  // store the original implementation
  const originalDivide = math.divide;
  // mock divide with the original implementation
  math.divide = jest.fn(originalDivide);
  // spy the calls to divide
  expect(app.doDivide(4, 12)).toEqual(3);
  expect(math.divide).toHaveBeenCalledWith(4, 12);
  // override the implementation
  math.divide.mockImplementation(() => "mock");
  expect(app.doDivide(4, 12)).toEqual("mock");
  expect(math.divide).toHaveBeenCalledWith(4, 12);
  // restore the original implementation
  math.divide = originalDivide;
  expect(app.doDivide(4, 12)).toEqual(3);
});