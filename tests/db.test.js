import { describe, it, expect, vi } from "vitest";
import { prisma } from "../src/db.js";

describe("mocks", () => {
  it("should restore findUnique", async () => {
    expect(prisma.user.findUnique).toBeTruthy();
    const spy = vi.spyOn(prisma.user, "findUnique");
    spy.mockRestore();
    expect(prisma.user.findUnique).toBeTruthy();
  });
});
