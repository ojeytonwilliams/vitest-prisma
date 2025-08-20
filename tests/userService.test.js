import { describe, it, expect, vi } from "vitest";
import { getUserByEmail, prisma } from "../src/userService.js";

describe("getUserByEmail", () => {
  let spy;

  it("should return user when found", async () => {
    const mockUser = {
      id: "abc",
    };

    spy = vi.spyOn(prisma.user, "findUnique").mockResolvedValue(mockUser);

    const result = await getUserByEmail("test@example.com");
    expect(result).toEqual(mockUser);
  });

  it("should restore findUnique", async () => {
    spy.mockRestore();
    expect(prisma.user.findUnique).toBeTruthy();
  });
});
