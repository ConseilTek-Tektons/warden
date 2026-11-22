import { describe, expect, it } from "vitest";
import { certificationRisk } from "./certification-risk";
describe("certification risk",()=>{it("scores unused privileged access highly",()=>expect(certificationRisk({privileged:true,daysSinceUse:180,peerCoverage:.05})).toBeGreaterThanOrEqual(90));it("keeps common recent access low",()=>expect(certificationRisk({privileged:false,daysSinceUse:2,peerCoverage:.95})).toBeLessThan(10));});
