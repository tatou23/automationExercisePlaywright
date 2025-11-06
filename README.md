# 🧪 Automation Exercise - Playwright Framework

A modern, maintainable **UI & API test automation framework** built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern.  
This project automates the demo e-commerce site [Automation Exercise](https://automationexercise.com/).

---

## 📁 Project Structure

```
automationExercicePlaywright/
├── e2e/
│   ├── pages/               # Page Object Models (HomePage, ProductsPage, etc.)
│   ├── specs/               # Test suites (homepage.spec.ts, products.spec.ts…)
│   ├── helpers/             # Reusable utilities (consent handler, etc.)
│   └── fixtures/            # Custom test fixtures
├── .github/workflows/       # CI pipelines (GitHub Actions)
├── .env                     # Environment variables (not committed)
├── playwright.config.ts     # Playwright configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.mjs        # Linting rules
├── .prettierrc              # Code formatting rules
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the project
```bash
git clone git@github.com:tatou23/automationExercicePlaywright.git
cd automationExercicePlaywright
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run Playwright installation
```bash
npx playwright install --with-deps
```

### 4️⃣ Configure environment variables
Create a `.env` file at the project root:
```bash
BASE_URL=https://automationexercise.com
```

---

## 🧱 Run Tests

### Run all tests
```bash
npx playwright test
```

### Run by tag
```bash
npx playwright test --grep @smoke
npx playwright test --grep @ui
```

### Run a specific file
```bash
npx playwright test e2e/specs/products.spec.ts
```

### Run with UI mode
```bash
npx playwright test --ui
```

---

## 🧰 Development Tools

### Lint & Format
```bash
npm run lint
npm run format
```

---

## 🧩 Reports

### HTML Report (default)
```bash
npx playwright show-report
```

### Allure Report
Install if not yet installed:
```bash
npm install -D allure-playwright allure-commandline
```
Generate & open the report:
```bash
npm run allure:gen
npm run allure:open
```

---

## 🧪 Test Design

### ✅ UI Tests
- Homepage visibility and navigation
- Products list and product details
- Cart add/remove/quantity flow
- Search & filtering
- Login and checkout (storageState re-use)

### 🔗 API Tests (Phase 2)
- Health endpoint
- Add-to-cart & checkout validation via API

---

## 🧬 Code Architecture Principles

| Layer | Responsibility |
|--------|----------------|
| **Pages (POM)** | Define locators & reusable actions (no assertions) |
| **Specs** | Contain test logic & assertions |
| **Helpers** | Handle global utilities (consent, cookies, etc.) |
| **Fixtures** | Provide reusable test contexts (e.g., `home`, `products`, `cart`) |

---

## 🧱 Branching & Git Standards

- One branch per feature: `feature/<name>`
- Conventional commits:
  - `feat:` → new feature  
  - `fix:` → bug fix  
  - `chore:` → tooling/config  
  - `update:` → refactors  

---

## 🧑‍💻 Scripts Summary

| Command | Description |
|----------|-------------|
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier |
| `npx playwright test` | Run all tests |
| `npx playwright show-report` | View HTML report |
| `npm run allure:gen` | Generate Allure report |
| `npm run allure:open` | Open Allure report |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|----------|
| [Playwright](https://playwright.dev/) | Test automation framework |
| TypeScript | Strong typing & modern syntax |
| ESLint / Prettier | Linting & formatting |
| Allure | Advanced reporting |
| Dotenv | Environment variable management |

---

## 🧭 Next Steps

- ✅ Stabilize core UI flow (catalog, cart, PDP)
- 🚧 Implement login & checkout with storageState
- 🚧 Add API smoke tests
- 🚧 Integrate Allure + GitHub Actions CI

---

## 🧡 Author
Assetou Coulibaly
QA Engineer/Automation Tester | Learning Playwright & Test Architecture
