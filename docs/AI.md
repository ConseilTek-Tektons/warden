# Governance copilot and grounded retrieval

Warden retrieves approved campaign, identity, entitlement, peer, usage, SoD, and connector-receipt context after tenant and permission filtering. Local retrieval is built in. Optional OpenAI Responses mode sets `store: false`; optional hosted RAG uses `file_search` over approved documents.

The copilot is advisory. It cannot decide a certification, grant access, revoke access, execute a connector, or change policy. Recommendations must cite the evidence used and distinguish missing telemetry from confirmed inactivity.
