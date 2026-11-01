# Contributing to OpenTravel Exchange (OTX)

Thank you for your interest in contributing to OpenTravel Exchange! We are building an open, vendor-neutral data standard for travel operators, DMCs, and distribution marketplaces.

---

## 🛠️ Ways to Contribute

1. **Schema Proposals & Extensions**:
   - Suggest schema additions in `/schemas` for specialized travel products (e.g., flight legs, visa rules, adventure expeditions).
   - Ensure all schema changes conform to JSON Schema Draft 2020-12.

2. **Validation & Tooling**:
   - Improve validator CLI performance and test coverage.
   - Build client adapters (Next.js, Python SDKs) to make integration seamless for third-party platforms.

3. **Sample Datasets**:
   - Submit realistic, anonymized itineraries to `/examples` to test edge cases in multi-day scheduling or currency conversions.

---

## 📋 Pull Request (PR) Workflow

1. **Fork** the repository and create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
