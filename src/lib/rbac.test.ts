import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Warden RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "campaigns.manage")).toBe(true));
  it("keeps tenant access policy away from reviewers", () => expect(hasPermission(["reviewer"], "access.manage")).toBe(false));
  it("maps reviewer groups", () => expect(resolveRolesFromClaims({ groups: ["access-reviewers"] })).toEqual(["reviewer"]));
});
