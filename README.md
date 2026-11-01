# OpenTravel Exchange (OTX)

> An open-source, standardized data exchange and schema engine connecting B2B travel operators, DMCs, and independent agencies to downstream booking applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## 📌 Mission
Independent travel operators and Destination Management Companies (DMCs) frequently suffer from fragmented distribution formats—relying on PDFs, disparate spreadsheets, and unstandardized pricing matrices. 

**OpenTravel Exchange (OTX)** provides a unified, open-source schema standard, validation engine, and lightweight API interface to normalize itineraries, pricing tiers, and availability between multi-vendor suppliers and distribution marketplaces.

---

## 🚀 Key Modules
1. **OTX Standard Schema (`/schemas`)**: JSON-Schema definitions for travel itineraries, accommodation blocks, transfer components, and tiered B2B pricing.
2. **Package Validator Engine (`/validator`)**: Node/TypeScript-based schema validator ensuring supplier data integrity before ingestion.
3. **Marketplace Connectors (`/connectors`)**: Extensible adapter templates allowing platforms (including commercial aggregators) to import and export standard listings.

---

## 🗺️ Roadmap
- [x] Initial repository structure and open-source licensing
- [ ] Define v1 Core Travel Package Schema (`package.schema.json`)
- [ ] Implement standalone JSON schema validation CLI
- [ ] Develop reference Next.js integration adapter
- [ ] Build multi-currency pricing calculation standard

---

## 🛠️ Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm or pnpm

### Quick Setup
```bash
# Clone the repository
git clone [https://github.com/YOUR_GITHUB_USERNAME/opentravel-exchange.git](https://github.com/YOUR_GITHUB_USERNAME/opentravel-exchange.git)

# Enter the project directory
cd opentravel-exchange

# Install dependencies
npm install
