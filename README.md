# 📊 ISO 27001 KPI/KRI Manager

[![GitHub last commit](https://img.shields.io/github/last-commit/marcelosilva75/iso-kpi-kri-manager?style=flat-square)](https://github.com/marcelosilva75/iso-kpi-kri-manager)
[![GitHub issues](https://img.shields.io/github/issues/marcelosilva75/iso-kpi-kri-manager?style=flat-square)](https://github.com/marcelosilva75/iso-kpi-kri-manager/issues)
[![MIT License](https://img.shields.io/github/license/marcelosilva75/iso-kpi-kri-manager?style=flat-square)](./LICENSE)

Sistema para gerenciamento da certificação ISO 27001 com foco em acompanhamento de controles, KPIs, KRIs e evolução por empresa.

---

## 🖼️ Preview

![Screenshot da dashboard](./preview/dashboard-preview.png)

---

## 🚀 Funcionalidades

- Cadastro e listagem de empresas
- Avaliações de conformidade ISO 27001
- Gestão de Controles e Subcontroles ISO
- Registro e visualização de KPIs e KRIs
- Evolução temporal de indicadores com gráficos
- Exportação de dados
- Dashboard resumido e detalhado

---

## 🧠 Tecnologias

- ⚛️ React + Vite
- 💅 TailwindCSS
- 🧮 Supabase (PostgreSQL)
- 📊 Recharts
- 🔁 GitHub Actions (CI/CD)

---

## 📁 Estrutura do Projeto

src/ ├── components/ # Componentes reutilizáveis (cards, tabelas, gráficos) ├── pages/ # Páginas principais (Home, Empresas, KPI, KRI etc.) ├── services/ # Integrações com Supabase ├── types/ # Tipagens TypeScript ├── lib/ # Funções utilitárias e helpers ├── hooks/ # Hooks personalizados (useKpi, useEmpresa etc.) ├── app.jsx # Arquivo principal com rotas e layout ├── supabaseClient.js # Configuração do Supabase
