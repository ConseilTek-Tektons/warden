import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "warden",
  name: "Warden",
  category: "Identity & Access",
  tagline: "Access reviews that finish, on data you can audit.",
  description: "A self-hosted identity governance workspace for entitlement aggregation, access requests, certification campaigns, SoD policy, role mining, and verified revocation.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/warden",
  nav: [{ label: "Campaigns", badge: "3" }, { label: "Identities" }, { label: "Access requests" }, { label: "SoD policy" }, { label: "Connectors" }],
  demoUsers: [
    { id: "demo-admin", name: "Maya Chen", email: "maya@northstar.example", role: "admin", label: "IGA administrator" },
    { id: "demo-manager", name: "Jon Bell", email: "jon@northstar.example", role: "campaign_owner", label: "Campaign owner" },
    { id: "demo-host", name: "Priya Rao", email: "priya@northstar.example", role: "reviewer", label: "Access reviewer" },
  ],
  ai: {
    name: "Governance copilot",
    description: "Ask about certification context, peer coverage, entitlement risk, SoD violations, and revocation evidence.",
    systemPrompt: "You are Warden's governance copilot. Ground every answer in approved identity and campaign context, cite the supporting record, and remain advisory. Never certify, revoke, grant, or alter policy.",
    suggestedQuestions: ["Which reviews are most likely to be rubber-stamped?", "Explain this SoD violation.", "Show revocations without receipts."],
  },
};
