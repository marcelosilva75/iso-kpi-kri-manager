# 🌐 Gerenciador de Certificação ISO 27001

Este é um sistema web desenvolvido com React, Supabase e Tailwind CSS, que permite gerenciar empresas, KPIs (Key Performance Indicators), KRIs (Key Risk Indicators) e acompanhar a evolução da certificação ISO 27001 de forma visual e centralizada.

## 🚀 Funcionalidades

- Cadastro e listagem de empresas
- Cadastro e acompanhamento de KPIs e KRIs
- Visualização da evolução dos indicadores por empresa
- Dashboard com resumos e gráficos
- Exportação de dados
- Estrutura extensível para múltiplas normas e frameworks (NIST, COBIT, PCI DSS etc.)

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Gitpod](https://www.gitpod.io/) (ambiente de desenvolvimento online)

## 📁 Estrutura do Projeto

src/ ├── components/ # Componentes reutilizáveis (Layout, Navbar, Cards, etc.) 
 ├──pages/ # Páginas principais (Dashboard, Empresas, KPIs, KRIs)
 ├──services/ # Funções de integração com o Supabase 
 ├── lib/ # Supabase Client 
 ├── types/ # Tipagens TypeScript 
 ├── app.tsx # Arquivo principal com as rotas
 ├── index.tsx # Ponto de entrada da aplicação

 ## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Comando	Descrição
npm run dev	Inicia o servidor de desenvolvimento
npm run build	Gera a versão de produção
npm run preview	Visualiza localmente o build de produção

✅ Checklist
 Integração com Supabase
 Dashboard com contadores de empresas, KPIs e KRIs
 Estrutura base com Layout e navegação
 Visualização gráfica da evolução dos KPIs/KRIs
 Filtros avançados e exportação para CSV
 Autenticação e permissões por empresa
 Relatórios em PDF

🔧 Futuras Melhorias
Dashboard de tendência temporal dos indicadores
Exportação de gráficos como imagens
Painel de auditoria e controles
Gestão de planos de ação

🤝 Contribuições
Contribuições são bem-vindas! Fique à vontade para abrir issues ou enviar pull requests.



