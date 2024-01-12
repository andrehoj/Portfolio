import { validateEmail, capitalizeFirstLetter } from "./helpers";

describe("validateEmail", () => {
  test("should return true for a valid email", () => {
    const validEmail = "test@example.com";
    expect(validateEmail(validEmail)).toBe(true);
  });

  test("should return false for an invalid email", () => {
    const invalidEmail = "invalid-email";
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  test("should return false for an empty email", () => {
    const emptyEmail = "";
    expect(validateEmail(emptyEmail)).toBe(false);
  });

  test("should return false for null", () => {
    const nullEmail = null;
    expect(validateEmail(nullEmail)).toBe(false);
  });
});

describe("capitalizeFirstLetter", () => {
  test("should capitalize the first letter of a word", () => {
    const input = "hello";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("Hello");
  });

  test("should capitalize the first letter of a sentence", () => {
    const input = "this is a sentence.";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("This is a sentence.");
  });

  test("should return an empty string for an empty input", () => {
    const input = "";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("");
  });

  test("should handle strings with only one character", () => {
    const input = "a";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("A");
  });

  test("should handle strings with only one uppercase character", () => {
    const input = "A";
    const result = capitalizeFirstLetter(input);
    expect(result).toBe("A");
  });
});
