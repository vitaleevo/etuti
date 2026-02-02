# ROADMAP DE DESENVOLVIMENTO - PLATAFORMA ETUTI
## Cronograma Executivo e Marcos de Entrega

**Projeto:** E-commerce ETUTI  
**Duração Total:** 24-28 semanas (6-7 meses)  
**Data Início:** Março 2026  
**Go-Live:** Setembro 2026  

---

## VISÃO GERAL DO PROJETO

### Metodologia
**Agile/Scrum** com sprints de 2 semanas
- Daily standups (15min)
- Sprint planning (início de sprint)
- Sprint review (fim de sprint)
- Retrospectiva (melhoria contínua)

### Equipe Core
```
Tech Lead/Arquiteto: 1
Frontend Developers: 2
Backend Developers: 2
Mobile Developer: 1
UI/UX Designer: 1
QA Engineer: 1
DevOps Engineer: 1 (part-time)
Product Manager: 1
```

---

## FASE 0: PREPARAÇÃO E SETUP
**Duração:** 2 semanas  
**Objetivo:** Infraestrutura e fundações

### Semana 1-2: Kickoff e Setup Inicial

#### **Tech Stack Decisions** (Dias 1-2)
```
✅ Confirmar stack tecnológico
✅ Avaliar alternativas (se necessário)
✅ Definir versões específicas
✅ Documentar decisões (ADR - Architecture Decision Records)
```

#### **Setup de Infraestrutura** (Dias 3-5)
```
Desenvolvimento:
- Criar repositórios Git (GitHub/GitLab)
  • etuti-frontend
  • etuti-backend
  • etuti-mobile
  • etuti-docs
- Setup de branches (main, develop, feature/*)
- CI/CD básico (linting, testes)
- Setup de ambientes locais

Cloud:
- Criar conta AWS/GCP
- Setup de staging environment
- Configurar CDN (Cloudflare)
- Database provisioning (PostgreSQL)
- Redis setup
- S3 buckets para mídia
```

#### **Design System** (Dias 6-10)
```
✅ Finalizar design system no Figma
✅ Exportar design tokens
✅ Criar biblioteca de componentes base
✅ Documentar guidelines
```

#### **Project Management Setup** (Paralelo)
```
✅ Setup Jira/Linear/ClickUp
✅ Criar epic e user stories iniciais
✅ Definir DoD (Definition of Done)
✅ Setup de comunicação (Slack, etc)
```

**Entregáveis Fase 0:**
- [ ] Repositórios criados e configurados
- [ ] Ambiente de dev funcional para toda equipe
- [ ] Design system finalizado
- [ ] Infraestrutura cloud provisionada
- [ ] Backlog inicial priorizado

---

## FASE 1: MVP - FUNDAÇÕES
**Duração:** 8 semanas (4 sprints)  
**Objetivo:** Core features funcionais

### Sprint 1-2 (Semanas 3-6): Autenticação e Base

#### **Backend (Sprint 1-2)**
```
□ Setup do projeto NestJS
  - Estrutura de pastas modular
  - Configuração de variáveis de ambiente
  - Setup do Prisma ORM
  - Migrations iniciais
  
□ Módulo de Autenticação
  - Registro de usuários
  - Login (JWT)
  - Refresh tokens
  - Reset de senha (email)
  - Verificação de email
  
□ Módulo de Usuários
  - CRUD de perfil
  - Upload de avatar
  - Endereços (múltiplos)
  - Preferências
  
□ Módulo de Produtos (básico)
  - Schema de produtos
  - CRUD admin
  - Listagem pública
  - Busca simples
  
□ Upload de Imagens
  - Integração com S3/Cloudinary
  - Redimensionamento automático
  - WebP conversion
```

**API Endpoints (Sprint 1-2):**
```
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/forgot-password
POST /auth/reset-password

GET /users/me
PATCH /users/me
POST /users/avatar
GET /users/addresses
POST /users/addresses

GET /products
GET /products/:id
POST /admin/products (autenticado)
PATCH /admin/products/:id
DELETE /admin/products/:id
```

#### **Frontend (Sprint 1-2)**
```
□ Setup Next.js 14 (App Router)
  - Configuração TypeScript
  - Tailwind CSS setup
  - Shadcn/ui integration
  
□ Layout Base
  - Header com navegação
  - Footer
  - Layout responsivo
  
□ Autenticação UI
  - Página de registro
  - Página de login
  - Página de recuperação de senha
  - Context de autenticação
  
□ Homepage
  - Hero section
  - Categorias
  - Produtos em destaque (mockado)
  - CTAs principais
  
□ Páginas de Produto
  - Product Listing Page (grid)
  - Product Detail Page (básico)
  - Filtros simples
  - Busca
```

**Componentes Criados (Sprint 1-2):**
```
<Button> - Variantes: primary, secondary, tertiary
<Input> - Text, email, password
<Card> - Container genérico
<ProductCard> - Card de produto
<Header> - Navegação principal
<Footer> - Rodapé
<AuthForm> - Formulário de login/registro
<SearchBar> - Busca de produtos
<CategoryCard> - Card de categoria
```

**User Stories (Sprint 1-2):**
```
✓ Como usuário, quero me registrar para ter uma conta
✓ Como usuário, quero fazer login para acessar recursos protegidos
✓ Como usuário, quero recuperar minha senha se esquecer
✓ Como usuário, quero ver produtos disponíveis
✓ Como usuário, quero buscar produtos por nome
✓ Como usuário, quero ver detalhes de um produto
✓ Como admin, quero adicionar novos produtos
```

**Métricas de Sucesso (Sprint 1-2):**
- [ ] 100% das APIs documentadas (Swagger)
- [ ] Cobertura de testes > 70% (backend)
- [ ] Performance: LCP < 2.5s (frontend)
- [ ] 0 erros de TypeScript
- [ ] Todas user stories completadas

---

### Sprint 3-4 (Semanas 7-10): Carrinho e Checkout

#### **Backend (Sprint 3-4)**
```
□ Módulo de Carrinho
  - Adicionar item
  - Remover item
  - Atualizar quantidade
  - Persistência (DB + Redis)
  - Cálculo de subtotal
  
□ Módulo de Pedidos
  - Criar pedido
  - Listar pedidos do usuário
  - Detalhes de pedido
  - Status tracking
  - Histórico
  
□ Módulo de Pagamentos
  - Integração Multicaixa Express (stub inicial)
  - Webhook handler
  - Status de pagamento
  
□ Módulo de Entrega
  - Cálculo de frete por zona
  - Validação de endereço
  - Estimativa de entrega
  
□ Sistema de Email
  - Templates (SendGrid)
  - Confirmação de pedido
  - Atualização de status
```

**API Endpoints (Sprint 3-4):**
```
GET /cart
POST /cart/items
PATCH /cart/items/:id
DELETE /cart/items/:id
DELETE /cart

POST /orders
GET /orders
GET /orders/:id
PATCH /orders/:id/status (admin)

POST /payments/multicaixa
POST /webhooks/multicaixa
GET /payments/:orderId/status

POST /shipping/calculate
GET /shipping/zones
```

#### **Frontend (Sprint 3-4)**
```
□ Carrinho de Compras
  - Página de carrinho
  - Mini carrinho (dropdown)
  - Adicionar ao carrinho (animação)
  - Badge de quantidade
  - Cupom de desconto (UI)
  
□ Checkout Flow
  - Step 1: Endereço de entrega
  - Step 2: Método de pagamento
  - Step 3: Revisão e confirmação
  - Progresso visual
  - Validação de formulários
  
□ Páginas de Pedido
  - Confirmação de pedido
  - Rastreamento de pedido
  - Histórico de pedidos
  
□ Estado Global
  - Zustand store para carrinho
  - React Query para API calls
  - Persistência local
```

**Componentes Criados (Sprint 3-4):**
```
<Cart> - Carrinho completo
<MiniCart> - Dropdown do carrinho
<CartItem> - Item do carrinho
<CheckoutSteps> - Stepper de checkout
<AddressForm> - Formulário de endereço
<PaymentMethods> - Seleção de pagamento
<OrderSummary> - Resumo do pedido
<OrderCard> - Card de pedido histórico
<CouponInput> - Input de cupom
```

**User Stories (Sprint 3-4):**
```
✓ Como usuário, quero adicionar produtos ao carrinho
✓ Como usuário, quero ver meu carrinho e editar quantidades
✓ Como usuário, quero proceder ao checkout
✓ Como usuário, quero adicionar endereço de entrega
✓ Como usuário, quero escolher método de pagamento
✓ Como usuário, quero ver confirmação do meu pedido
✓ Como usuário, quero rastrear meu pedido
✓ Como usuário, quero ver histórico de pedidos
✓ Como usuário, quero aplicar cupom de desconto
```

**Métricas de Sucesso (Sprint 3-4):**
- [ ] Taxa de abandono de carrinho < 70% (baseline)
- [ ] Checkout completado em < 3 minutos
- [ ] 0 erros críticos no fluxo de pagamento
- [ ] Email de confirmação enviado em < 30s

---

## FASE 2: FEATURES AVANÇADAS
**Duração:** 6 semanas (3 sprints)  
**Objetivo:** Diferenciadores e otimizações

### Sprint 5-6 (Semanas 11-14): Admin Dashboard & CMS

#### **Backend (Sprint 5-6)**
```
□ Dashboard Analytics
  - Métricas em tempo real
  - Vendas por período
  - Produtos mais vendidos
  - Taxa de conversão
  - Relatórios exportáveis
  
□ CMS Headless
  - Gestão de conteúdo (blog)
  - Categorias de conteúdo
  - Tags
  - SEO metadata
  - Media library
  
□ Gestão de Estoque
  - Controle de inventário
  - Alertas de baixo estoque
  - Histórico de movimentações
  - Integração com pedidos
  
□ Gestão de Usuários (admin)
  - Listar usuários
  - Bloquear/desbloquear
  - Sistema de permissões (RBAC)
```

**API Endpoints (Sprint 5-6):**
```
GET /admin/dashboard/stats
GET /admin/dashboard/sales
GET /admin/dashboard/products
GET /admin/reports/sales (CSV export)

GET /admin/content/posts
POST /admin/content/posts
PATCH /admin/content/posts/:id
DELETE /admin/content/posts/:id
GET /content/posts (público)
GET /content/posts/:slug (público)

GET /admin/inventory
PATCH /admin/inventory/:productId
GET /admin/inventory/alerts

GET /admin/users
PATCH /admin/users/:id/status
```

#### **Frontend (Sprint 5-6)**
```
□ Admin Dashboard
  - Overview com métricas
  - Gráficos (Recharts)
  - Tabelas de dados
  - Filtros por data
  - Export de relatórios
  
□ Gestão de Produtos (admin)
  - Listagem com busca/filtros
  - Formulário de criação/edição
  - Upload múltiplo de imagens
  - Gestão de estoque
  - Preview de produto
  
□ CMS de Conteúdo
  - Editor rich-text (TipTap/Slate)
  - Upload de mídia
  - SEO fields
  - Preview
  - Agendamento de publicação
  
□ Blog Público
  - Listagem de posts
  - Post detail page
  - Categorias e tags
  - Busca de conteúdo
```

**User Stories (Sprint 5-6):**
```
✓ Como admin, quero ver métricas de vendas em tempo real
✓ Como admin, quero gerenciar produtos facilmente
✓ Como admin, quero controlar estoque e receber alertas
✓ Como admin, quero criar conteúdo educacional
✓ Como admin, quero exportar relatórios de vendas
✓ Como usuário, quero ler artigos sobre nutrição
✓ Como usuário, quero buscar receitas
```

---

### Sprint 7 (Semanas 15-16): Sistema de Assinaturas

#### **Backend (Sprint 7)**
```
□ Módulo de Assinaturas
  - Planos (Básico, Premium, Família)
  - Criação de assinatura
  - Modificação de plano
  - Pausa/cancelamento
  - Histórico de cobranças
  
□ Billing Recorrente
  - Integração com gateway (recorrência)
  - Tentativas de cobrança
  - Falha de pagamento (retry)
  - Notificações de cobrança
  
□ Customização de Assinatura
  - Preferências de frutas
  - Exclusões (alergias)
  - Frequência de entrega
  - Pular próxima entrega
```

**API Endpoints (Sprint 7):**
```
GET /subscriptions/plans
POST /subscriptions
GET /subscriptions/me
PATCH /subscriptions/:id
POST /subscriptions/:id/pause
POST /subscriptions/:id/cancel
PATCH /subscriptions/:id/preferences
POST /subscriptions/:id/skip-next
GET /subscriptions/:id/invoices
```

#### **Frontend (Sprint 7)**
```
□ Páginas de Assinatura
  - Landing page de planos
  - Comparação de planos
  - Fluxo de contratação
  - Customização de preferências
  
□ Dashboard de Assinatura
  - Status da assinatura
  - Próxima entrega
  - Modificar preferências
  - Pausa/cancelamento
  - Histórico de entregas
  - Faturas
```

**User Stories (Sprint 7):**
```
✓ Como usuário, quero comparar planos de assinatura
✓ Como usuário, quero assinar um plano mensal
✓ Como usuário, quero personalizar minhas preferências
✓ Como usuário, quero pausar minha assinatura
✓ Como usuário, quero pular uma entrega
✓ Como usuário, quero ver minhas faturas
✓ Como usuário, quero cancelar assinatura (self-service)
```

---

## FASE 3: MOBILE E POLIMENTO
**Duração:** 6 semanas (3 sprints)  
**Objetivo:** App mobile e otimizações

### Sprint 8-9 (Semanas 17-20): App Mobile

#### **Mobile (Sprint 8-9)**
```
□ Setup React Native
  - Expo vs bare workflow (decisão)
  - Configuração TypeScript
  - Navegação (React Navigation)
  - State management (Zustand)
  
□ Autenticação
  - Login/Registro
  - Biometria (Face ID / Touch ID)
  - Token management
  
□ Features Core
  - Homepage
  - Busca e listagem
  - Detalhes de produto
  - Carrinho
  - Checkout
  - Pedidos
  
□ Features Mobile-Specific
  - Push notifications (OneSignal/Firebase)
  - Deep linking
  - Câmera (scan de códigos?)
  - Geolocalização
  - Offline mode (basic)
```

**Telas Mobile (Sprint 8-9):**
```
Splash Screen
Onboarding (3 telas)
Login / Registro
Home (Bottom tabs)
Busca
Categorias
Produto Detail
Carrinho
Checkout (3 steps)
Pedidos
Perfil
Configurações
Notificações
```

**User Stories (Sprint 8-9):**
```
✓ Como usuário mobile, quero fazer login rapidamente
✓ Como usuário mobile, quero navegar produtos facilmente
✓ Como usuário mobile, quero adicionar ao carrinho com 1 tap
✓ Como usuário mobile, quero finalizar compra rapidamente
✓ Como usuário mobile, quero receber notificações de pedido
✓ Como usuário mobile, quero usar biometria para login
```

---

### Sprint 10 (Semanas 21-22): Otimizações e Testes

#### **Performance (Sprint 10)**
```
□ Frontend Optimization
  - Code splitting agressivo
  - Image optimization (WebP, srcset)
  - Lazy loading de componentes
  - Bundle size analysis
  - Lighthouse score > 90
  
□ Backend Optimization
  - Database query optimization
  - Indexing estratégico
  - Caching com Redis
  - API response compression
  - Rate limiting
  
□ SEO
  - Meta tags dinâmicos
  - Sitemap.xml
  - Robots.txt
  - Schema.org markup
  - Open Graph tags
```

#### **Testing (Sprint 10)**
```
□ Testes Automatizados
  - Unit tests (Jest) - target: 80% coverage
  - Integration tests (backend)
  - E2E tests (Cypress/Playwright)
    • Fluxo de compra completo
    • Registro e login
    • Adicionar ao carrinho
  
□ Testes Manuais
  - Cross-browser (Chrome, Safari, Firefox)
  - Responsividade (múltiplos devices)
  - Acessibilidade (WCAG AA)
  - Usabilidade (5 usuários beta)
```

#### **Segurança (Sprint 10)**
```
□ Security Audit
  - Penetration testing básico
  - OWASP Top 10 check
  - Dependency vulnerability scan
  - SSL/TLS configuration
  - Rate limiting e DDoS protection
  
□ Data Protection
  - GDPR compliance
  - Política de privacidade
  - Termos de uso
  - Cookie consent
```

**Métricas de Sucesso (Sprint 10):**
- [ ] Lighthouse score: Performance > 90, SEO > 95
- [ ] 0 vulnerabilidades críticas
- [ ] 80%+ test coverage
- [ ] < 5 bugs em testes de usabilidade

---

## FASE 4: PRÉ-LANÇAMENTO
**Duração:** 2-4 semanas  
**Objetivo:** Preparação para produção

### Semanas 23-24: Beta Testing & Ajustes

#### **Beta Testing**
```
□ Recrutamento
  - 50 usuários beta (amigos, família, early adopters)
  - Diversidade demográfica
  - Mix de tech-savvy e não-tech
  
□ Onboarding de Beta Users
  - Email de boas-vindas
  - Tutorial da plataforma
  - Canal de feedback (Slack/Discord)
  - Incentivo (desconto primeira compra)
  
□ Coleta de Feedback
  - Formulários pós-interação
  - Entrevistas (5-10 usuários)
  - Analytics tracking
  - Bug reporting
  
□ Iterações
  - Priorização de bugs (crítico, alto, médio, baixo)
  - Fixes imediatos para críticos
  - Melhorias de UX rápidas
  - Documentação de issues para pós-launch
```

#### **Conteúdo e Dados**
```
□ Seed Data
  - 30-50 produtos reais
  - Imagens profissionais
  - Descrições completas
  - Informações nutricionais
  
□ Conteúdo Educacional
  - 5-10 posts de blog
  - "8 Benefícios" de cada fruta principal
  - Receitas (5-10)
  - FAQs
  
□ Setup de Produtores
  - Onboarding de 5-10 produtores iniciais
  - Contratos assinados
  - Treinamento em app de produtores
  - Primeiro pedido teste
```

---

### Semanas 25-26: Deploy e Go-Live

#### **Deploy de Produção**
```
□ Infrastructure
  - Production environment setup (AWS/GCP)
  - Database migration to production
  - Load balancer configuration
  - CDN setup (Cloudflare)
  - SSL certificates
  - Backup systems active
  - Monitoring tools (Sentry, New Relic)
  
□ Security
  - Firewall rules
  - DDoS protection
  - Rate limiting
  - Security headers
  - Final penetration test
  
□ Performance
  - Auto-scaling configuration
  - Cache warming
  - Database connection pooling
  - CDN purge strategy
```

#### **Lançamento Suave (Soft Launch)**
```
Semana 25:
□ Dia 1-2: Deploy para produção (sem anunciar)
□ Dia 3: Teste interno com equipe (smoke tests)
□ Dia 4-5: Convidar beta testers (validação final)
□ Dia 6-7: Monitoramento intensivo, ajustes

Semana 26:
□ Segunda-feira: Lançamento para waitlist (500 pessoas)
□ Quarta-feira: Abertura ao público (com soft marketing)
□ Sexta-feira: Primeiros pedidos entregues
□ Fim de semana: Monitoramento 24/7
```

#### **Marketing de Lançamento**
```
Pré-lançamento (Semana 24):
□ Landing page "coming soon"
□ Email para waitlist (teaser)
□ Posts nas redes sociais (countdown)
□ Press release preparado

Lançamento (Semana 26):
□ Email blast para waitlist
□ Campanha nas redes (IG, FB, TikTok)
□ Influencer partnerships (5-10)
□ Promoção de lançamento (30% off primeira compra)
□ Press release enviado
```

#### **Monitoramento Pós-Lançamento**
```
Primeiras 24h:
□ Verificar uptime (target: 99.9%)
□ Monitorar tempo de resposta das APIs
□ Verificar taxa de conversão
□ Conferir erros (Sentry)
□ Suporte ao cliente ativo (WhatsApp/email)

Primeira semana:
□ Daily review de métricas
□ Priorização de bugs reportados
□ Hotfixes se necessário
□ Coleta de feedback de clientes
□ Ajuste de marketing baseado em dados

Primeiro mês:
□ Weekly retrospectivas
□ Análise de funil de conversão
□ Otimização de SEO
□ A/B tests em CTAs
□ Roadmap para features pós-launch
```

---

## FASE 5: PÓS-LANÇAMENTO
**Objetivo:** Iteração e crescimento

### Mês 2: Otimização
```
□ Análise de dados
  - Funil de conversão
  - Taxa de abandono
  - Produtos mais vendidos
  - Comportamento do usuário
  
□ Melhorias baseadas em dados
  - Otimizar checkout (reduzir atrito)
  - Melhorar busca (relevância)
  - Personalização de recomendações
  
□ Marketing
  - Campanha de remarketing
  - Email marketing (automações)
  - Expansão de influencers
  - Programa de referral
```

### Mês 3-6: Novos Features
```
□ Wishlist / Favoritos
□ Reviews e ratings de produtos
□ Programa de fidelidade (pontos)
□ Comparação de produtos
□ Recomendações personalizadas (ML)
□ Notificações de produtos em falta (back in stock)
□ Live chat / chatbot
□ Marketplace (produtos de parceiros)
□ App para produtores
```

---

## GESTÃO DE RISCOS

### Riscos Técnicos e Mitigações

| Risco | Impacto | Prob. | Mitigação |
|-------|---------|-------|-----------|
| **Atrasos de desenvolvimento** | Alto | Média | Buffer de 20% no cronograma, priorização rigorosa |
| **Bugs críticos pré-launch** | Alto | Média | Testes extensivos, beta testing, rollback plan |
| **Problemas de performance** | Alto | Baixa | Load testing, monitoring, auto-scaling |
| **Integração de pagamento falha** | Crítico | Baixa | Testes antecipados, sandbox extensivo, fallback manual |
| **Perda de dados** | Crítico | Muito Baixa | Backups automáticos, disaster recovery plan |
| **Ataque de segurança** | Alto | Baixa | Security audit, rate limiting, monitoring |
| **Sobrecarga no lançamento** | Médio | Média | Load balancer, soft launch, auto-scaling |

### Plano de Contingência

**Se atrasos > 2 semanas:**
- Reduzir escopo (mover features para pós-launch)
- Aumentar equipe (contractors temporários)
- Estender horários de trabalho (com compensação)

**Se bugs críticos em produção:**
- Protocolo de hotfix (< 4h para deploy)
- Rollback automático se erro rate > 5%
- Comunicação transparente com clientes

**Se problemas de performance:**
- Vertical scaling imediato
- Cache agressivo
- Degradação graciosa (desabilitar features não-críticas)

---

## MÉTRICAS DE SUCESSO

### Semana 1 Pós-Lançamento
```
□ Uptime: > 99%
□ Tempo de resposta médio: < 500ms
□ Taxa de conversão: > 1%
□ 0 bugs críticos
□ 100 primeiros pedidos
□ NPS: > 40
```

### Mês 1 Pós-Lançamento
```
□ 500 usuários registrados
□ 200 pedidos realizados
□ Taxa de conversão: > 2%
□ Ticket médio: 18.000 Kz
□ Taxa de retorno: > 20%
□ NPS: > 50
```

### Mês 3 Pós-Lançamento
```
□ 2,000 usuários ativos
□ 800 pedidos/mês
□ Taxa de conversão: > 3%
□ LTV/CAC > 3
□ 50 assinaturas ativas
□ NPS: > 60
```

---

## COMUNICAÇÃO E REPORTING

### Daily Standups (Todo dia, 9h30, 15min)
```
Formato:
1. O que fiz ontem?
2. O que vou fazer hoje?
3. Algum bloqueio?
```

### Sprint Planning (Início de sprint, 2h)
```
1. Review de sprint anterior
2. Refinamento de backlog
3. Seleção de user stories
4. Estimativa (story points)
5. Commitment
```

### Sprint Review (Fim de sprint, 1h)
```
1. Demo de features completas
2. Feedback de stakeholders
3. Acceptance testing
4. Ajustes necessários
```

### Sprint Retrospective (Fim de sprint, 1h)
```
1. O que funcionou bem?
2. O que pode melhorar?
3. Action items para próximo sprint
```

### Status Report Semanal (Email, Sexta-feira)
```
Para: Fundadores, Investidores
Conteúdo:
- Progresso geral (% completado)
- Features entregues esta semana
- Bloqueios e riscos
- Próximos passos
- Métricas (se em produção)
```

---

## CUSTOS DE DESENVOLVIMENTO

### Investimento Inicial (One-time)
```
Design UI/UX:            $3,000
Frontend Dev:            $12,000
Backend Dev:             $14,000
Mobile Dev:              $15,000
Testing & QA:            $4,000
DevOps Setup:            $3,000
Project Management:      $3,000
──────────────────────
TOTAL:                   $54,000

(Baseado em 24 semanas, equipe de 9 pessoas)
```

### Custos Mensais Recorrentes (Pós-Launch)
```
Infraestrutura:          $300
Ferramentas (Figma, etc):$150
Equipe mínima (2 devs):  $4,000
Suporte:                 $1,000
──────────────────────
TOTAL:                   $5,450/mês
```

---

## CHECKLIST DE GO-LIVE

### Técnico
```
□ Todos testes passando (unit, integration, E2E)
□ Cobertura de testes > 75%
□ Performance Lighthouse > 90
□ Sem vulnerabilidades críticas
□ Backup automático funcionando
□ Monitoring ativo (Sentry, New Relic)
□ SSL configurado
□ CDN ativo
□ Database otimizado (indexes)
□ Rate limiting configurado
```

### Conteúdo
```
□ 30+ produtos cadastrados
□ Imagens de alta qualidade
□ Descrições completas
□ 5+ posts de blog
□ FAQs respondidas
□ Políticas (privacidade, termos) publicadas
```

### Legal
```
□ Registro comercial válido
□ Licença sanitária obtida
□ Termos de uso aprovados por jurídico
□ Política de privacidade (GDPR/LGPD)
□ Contratos com produtores assinados
```

### Marketing
```
□ Domínio etuti.ao registrado
□ Redes sociais criadas e ativas
□ 500+ pessoas na waitlist
□ 5-10 influencers confirmados
□ Material de marketing preparado
```

### Operações
```
□ 5-10 produtores onboarded
□ 3 vans refrigeradas disponíveis
□ Equipe de entrega treinada
□ Armazém refrigerado operacional
□ Processo de fulfillment definido
```

### Financeiro
```
□ Conta bancária empresarial aberta
□ Integração Multicaixa testada
□ Sistema de faturação configurado
□ Contabilidade setup
```

---

## PRÓXIMOS PASSOS IMEDIATOS

### Esta Semana
1. ✅ Aprovar este roadmap
2. ✅ Confirmar orçamento ($54K + $5.5K/mês)
3. ✅ Iniciar contratação de equipe
4. ✅ Setup de ferramentas (Figma, Jira, GitHub)

### Próximas 2 Semanas
1. ✅ Contratar equipe core (mínimo 4 devs, 1 designer)
2. ✅ Kickoff meeting
3. ✅ Setup de infraestrutura
4. ✅ Começar design system
5. ✅ Primeiro sprint planning

---

## CONCLUSÃO

Este roadmap é um plano vivo e será ajustado conforme:
- Feedback de stakeholders
- Desafios técnicos encontrados
- Mudanças de prioridade de negócio
- Feedback de usuários beta

**Princípios que guiam este roadmap:**
1. 🎯 **MVP First**: Lançar rápido, iterar depois
2. 📊 **Data-Driven**: Decisões baseadas em métricas
3. 👥 **User-Centric**: Usuário sempre no centro
4. 🔄 **Agile**: Adaptação rápida a mudanças
5. ✅ **Quality**: Nunca comprometer qualidade core

**"Ship fast, learn faster"** 🚀

---

**Preparado por**: Tech Lead ETUTI  
**Data**: 02 Fevereiro 2026  
**Versão**: 1.0  
**Próxima Revisão**: Após Sprint 2
