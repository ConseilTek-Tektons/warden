# Warden operations

`GET /api/health` reports application, PostgreSQL, Redis, enterprise SSO, AI, and RAG readiness without returning secrets or exception stacks. App Runner and App Service use it for unhealthy-instance replacement.

## Managed-service model

AWS App Runner and Azure App Service Web App for Containers remove host patching and container-orchestrator maintenance. Aurora PostgreSQL Serverless v2/PostgreSQL Flexible Server and managed Redis offload backups, engine patching, failover primitives, and capacity operations. Operators still own budgets, dependency updates, schema performance, restore drills, and provider maintenance windows.

## Release sequence

1. Pass `pnpm check`, Terraform validation, Bicep compilation, and the container build.
2. Scan/sign one OCI image and deploy by digest.
3. Back up PostgreSQL and apply forward-compatible migrations with a dedicated release identity.
4. Deploy staging, then verify sign-in, domain record creation and persistence, RBAC denial, search, and a cited assistant answer.
5. Shift traffic and monitor request errors, domain transaction latency, database locks/connections, cache limits, and IdP failures.

Define RPO/RTO with the operator. The reference enables protected database backups; test point-in-time recovery and deployment rollback at least quarterly.
