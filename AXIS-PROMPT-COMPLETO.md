# AXIS™ — Plataforma Terapêutica Multidimensional
## Prompt Completo de Desenvolvimento | Márcia Britto

---

# PARTE 1 — VISÃO GERAL DA PLATAFORMA

## CONTEXTO DO PROJETO

Você está desenvolvendo a plataforma **AXIS™**, criada por **Márcia Britto**, terapeuta multidimensional e pesquisadora espiritual com mais de 15 anos de experiência. O site atual está publicado em:

**https://marciabrittoaxis7.netlify.app/**

Sua missão é **REFINAR, EVOLUIR E TRANSFORMAR** o site existente em uma plataforma premium futurista multidimensional — **sem apagar o conteúdo atual, sem remover imagens, sem remover as mesas já cadastradas**.

---

## REGRAS ABSOLUTAS — NÃO VIOLAR

- NÃO apagar o conteúdo atual do site
- NÃO remover as imagens existentes das mesas
- NÃO remover a foto da criadora Márcia Britto
- NÃO simplificar o layout ou reduzir funcionalidades
- NÃO recriar do zero ignorando a estrutura atual
- NÃO usar preto absoluto dominante (usar azul cósmico profundo)
- NÃO criar visual amador, com excesso de neon ou aparência poluída
- NÃO parecer site esotérico genérico, blog espiritual simples ou template comum

---

## OBJETIVO PRINCIPAL

Criar uma plataforma SaaS terapêutica de nível internacional que una:

- Espiritualidade moderna
- Tecnologia energética
- Mesas radiestésicas
- Apometria
- Formação terapêutica
- Consciência multidimensional
- Experiência visual cinematográfica
- Organização premium de alto padrão

Transmitindo: **AUTORIDADE · SOFISTICAÇÃO · TECNOLOGIA VIBRACIONAL · EXCLUSIVIDADE · EXPERIÊNCIA PREMIUM**

A plataforma deve parecer um **instituto vibracional futurista**, não um site esotérico comum.

---

## FUNCIONALIDADES COMPLETAS OBRIGATÓRIAS

```
✅ Home premium cinematográfica
✅ Área institucional (Método AXIS™)
✅ Catálogo completo das mesas AXIS™
✅ Sistema de cursos e formações
✅ Área de alunos protegida
✅ Login e cadastro com Supabase Auth
✅ Painel administrativo completo
✅ Dashboard com métricas premium
✅ Biblioteca de apostilas
✅ Downloads protegidos
✅ Área de vídeos e aulas
✅ Sistema de agendamento integrado ao WhatsApp
✅ Sistema de depoimentos com aprovação
✅ Formulário de contato e gestão de leads
✅ Integração WhatsApp flutuante
✅ Responsividade total (mobile, tablet, desktop)
✅ SEO avançado
✅ Performance otimizada
✅ PWA instalável
```

---

# PARTE 2 — ESPECIFICAÇÕES TÉCNICAS COMPLETAS

## STACK TECNOLÓGICA OBRIGATÓRIA

```
Frontend:   React + Next.js + TailwindCSS + Framer Motion + Lucide Icons
Backend:    Supabase (Auth + Database + Storage + RLS + Realtime)
Deploy:     Netlify
Mobile:     PWA (Progressive Web App)
```

### Configuração PWA (manifest.json)

```json
{
  "name": "AXIS™ — Plataforma Terapêutica Multidimensional",
  "short_name": "AXIS™",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#050505",
  "theme_color": "#D4AF37",
  "description": "Plataforma terapêutica multidimensional criada por Márcia Britto"
}
```

---

## IDENTIDADE VISUAL

### Paleta de Cores

```css
--bg-deep:      #050505       /* Preto premium suavizado */
--cosmic:       #081326       /* Azul cósmico profundo */
--gold:         #D4AF37       /* Dourado metálico */
--gold-light:   #f0cc5a       /* Dourado suave */
--gold-dim:     rgba(212,175,55,0.12)
--gold-border:  rgba(212,175,55,0.22)
--violet:       #7B4DFF       /* Violeta refinado */
--violet-dim:   rgba(123,77,255,0.12)
--white:        #F5F5F5       /* Branco gelo */
--white-dim:    rgba(245,245,245,0.55)
--glass:        rgba(255,255,255,0.03)
```

### Tipografia

```css
Títulos:   'Cormorant Garamond', serif — elegância atemporal
Corpo:     'Josefin Sans', sans-serif — modernidade premium
```

### Estilo Visual Obrigatório

Aplicar em todos os componentes:
- **Glassmorphism** — `backdrop-filter: blur(20px)` com transparências refinadas
- **Glow suave** — `box-shadow` dourado/violeta discreto
- **Geometria sagrada** — padrões animados no background
- **Partículas** — estrelas sutis animadas
- **Gradientes cósmicos** — azul profundo + violeta + dourado
- **Bordas finas** — `1px solid var(--gold-border)`
- **Animações** — fade-in elegante, hover suave, transições 0.3s

---

## BANCO DE DADOS SUPABASE — SQL COMPLETO

```sql
-- ═══════════════════════════════
-- TABELA: profiles (usuários)
-- ═══════════════════════════════
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT DEFAULT 'client' CHECK (role IN ('client','therapist','admin','student')),
  avatar_url TEXT,
  bio TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: tables_axis (mesas terapêuticas)
-- ═══════════════════════════════
CREATE TABLE tables_axis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  long_description TEXT,
  image_url TEXT,
  category TEXT,
  benefits TEXT[],
  frequencies TEXT[],
  symbols TEXT[],
  tags TEXT[],
  is_active BOOLEAN DEFAULT TRUE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: courses (cursos e formações)
-- ═══════════════════════════════
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  description TEXT,
  image_url TEXT,
  price DECIMAL(10,2),
  level TEXT CHECK (level IN ('iniciante','intermediario','avancado')),
  duration_hours INTEGER,
  certificate BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: lessons (aulas dos cursos)
-- ═══════════════════════════════
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  pdf_url TEXT,
  duration_minutes INTEGER,
  order_index INTEGER DEFAULT 0,
  is_free BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: downloads (apostilas e materiais)
-- ═══════════════════════════════
CREATE TABLE downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  file_url TEXT,
  file_type TEXT, -- pdf | video | image | audio
  category TEXT,
  is_protected BOOLEAN DEFAULT TRUE,
  required_role TEXT DEFAULT 'client',
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: sessions (sessões terapêuticas)
-- ═══════════════════════════════
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES profiles(id),
  therapist_id UUID REFERENCES profiles(id),
  table_id UUID REFERENCES tables_axis(id),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','paid','in_progress','completed','cancelled')),
  energy_level INTEGER CHECK (energy_level BETWEEN 0 AND 100),
  notes TEXT,
  session_date DATE,
  session_time TIME,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: diagnostics (diagnósticos energéticos)
-- ═══════════════════════════════
CREATE TABLE diagnostics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id),
  client_id UUID REFERENCES profiles(id),
  campo_energetico INTEGER,
  emocional INTEGER,
  mental INTEGER,
  espiritual INTEGER,
  fisico INTEGER,
  coerencia INTEGER,
  chakra_raiz INTEGER,
  chakra_sacral INTEGER,
  chakra_plexo INTEGER,
  chakra_coracao INTEGER,
  chakra_garganta INTEGER,
  chakra_terceiro_olho INTEGER,
  chakra_coroa INTEGER,
  bloqueios TEXT[],
  interferencias TEXT[],
  observacoes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: reports (relatórios terapêuticos)
-- ═══════════════════════════════
CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES sessions(id),
  client_id UUID REFERENCES profiles(id),
  diagnostico TEXT,
  intervencao TEXT,
  recomendacoes TEXT,
  pdf_url TEXT,
  is_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: testimonials (depoimentos)
-- ═══════════════════════════════
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  location TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  avatar_url TEXT,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: appointments (agendamentos)
-- ═══════════════════════════════
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES profiles(id),
  service TEXT NOT NULL,
  table_id UUID REFERENCES tables_axis(id),
  appointment_date DATE,
  appointment_time TIME,
  modality TEXT CHECK (modality IN ('online','presencial')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending','confirmed','completed','cancelled')),
  notes TEXT,
  whatsapp_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: contacts (leads e contatos)
-- ═══════════════════════════════
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  source TEXT DEFAULT 'site' CHECK (source IN ('site','instagram','whatsapp','indicacao','outro')),
  is_read BOOLEAN DEFAULT FALSE,
  is_archived BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- TABELA: blog_posts (blog e conteúdo)
-- ═══════════════════════════════
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  image_url TEXT,
  category TEXT,
  seo_title TEXT,
  seo_description TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ═══════════════════════════════
-- ROW LEVEL SECURITY (RLS)
-- ═══════════════════════════════

-- Habilitar RLS em todas as tabelas
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE tables_axis ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE diagnostics ENABLE ROW LEVEL SECURITY;
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso
CREATE POLICY "Usuário vê próprio perfil" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admin vê todos os perfis" ON profiles
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Mesas visíveis publicamente" ON tables_axis
  FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Admin gerencia mesas" ON tables_axis
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Cliente vê próprias sessões" ON sessions
  FOR SELECT USING (client_id = auth.uid());

CREATE POLICY "Terapeuta vê todas as sessões" ON sessions
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('therapist','admin'))
  );
```

---

## SUPABASE STORAGE — BUCKETS

```
imagens/        → Fotos das mesas, banners, avatares (público)
apostilas/      → PDFs das mesas e materiais (protegido)
cursos/         → Vídeos e materiais dos cursos (protegido)
certificados/   → Certificados gerados (protegido)
relatorios/     → Relatórios terapêuticos em PDF (protegido)
```

---

## AUTENTICAÇÃO — CREDENCIAIS

```
Email Admin:   axissistemmetodomb@gmail.com
WhatsApp:      +55 65 99345-1066
```

### Redirecionamento por Role após Login

```javascript
const redirectByRole = (role) => {
  const routes = {
    admin:     '/admin',
    therapist: '/terapeuta',
    client:    '/cliente',
    student:   '/aluno'
  }
  return routes[role] || '/cliente'
}
```

---

## ESTRUTURA DE ROTAS COMPLETA

```
PÚBLICO:
/                      → Home premium cinematográfica
/metodo                → Método AXIS™ institucional
/mesas                 → Catálogo completo das mesas
/mesas/[slug]          → Mesa individual detalhada
/cursos                → Área de cursos e formações
/cursos/[slug]         → Curso com módulos e aulas
/biblioteca            → Apostilas e materiais gratuitos
/agenda                → Sistema de agendamento
/depoimentos           → Galeria de depoimentos
/contato               → Formulário de contato
/login                 → Autenticação unificada
/cadastro              → Criação de conta

PROTEGIDO — CLIENTE (/cliente):
/cliente               → Dashboard pessoal
/cliente/diagnostico   → Meu diagnóstico energético
/cliente/evolucao      → Minha linha do tempo energética
/cliente/mesas         → Mesas aplicadas e status
/cliente/relatorios    → Relatórios recebidos + download PDF

PROTEGIDO — TERAPEUTA (/terapeuta):
/terapeuta             → Dashboard operacional
/terapeuta/diagnostico → Criar diagnóstico do cliente
/terapeuta/leitura     → Leitura energética + chakras
/terapeuta/mesas       → Selecionar e aplicar mesas
/terapeuta/relatorio   → Gerar relatório + exportar PDF
/terapeuta/clientes    → Lista de clientes
/terapeuta/historico   → Histórico de sessões

PROTEGIDO — ADMIN (/admin):
/admin                 → Dashboard geral com métricas
/admin/usuarios        → Gestão completa de usuários
/admin/sessoes         → Gestão de todas as sessões
/admin/mesas           → CRUD completo das mesas
/admin/cursos          → Gestão de cursos
/admin/blog            → Gerenciador de posts
/admin/leads           → Lista de leads e contatos
/admin/configuracoes   → Config. do sistema + integrações
```

---

## COMPONENTES PRINCIPAIS

### 1. Hero Section (Home)

```
Layout: 2 colunas (desktop) | 1 coluna (mobile)

COLUNA ESQUERDA:
- Badge animado "Plataforma Terapêutica Multidimensional"
- Título: AXIS™ (font-size: 120px, Cormorant Garamond, dourado)
- Subtítulo: "Ativação · Existência · Integração · Síntese"
- Texto institucional
- 3 botões: [Conhecer as Mesas] [Entrar na Plataforma] [Agendar Sessão]
- Estatísticas: 40+ Mesas | 500+ Vidas Transformadas | 15+ Anos de Pesquisa

COLUNA DIREITA:
- Foto real de Márcia Britto com pêndulo
- Glow dourado cinematográfico
- Anéis de geometria sagrada animados
- Label flutuante com nome e título
```

### 2. Menu Premium

```
- Position: fixed, top: 0
- Background: rgba(5,5,5,0.7) com backdrop-filter: blur(24px)
- Border-bottom: 1px solid gold-border
- Logo: AXIS™ (dourado, letter-spacing: 8px)
- Links: Home | Método | Mesas | Cursos | Formação | Biblioteca | Área do Aluno | Contato
- CTA: botão "Agendar" (dourado, border-radius: 30px)
- Hover: linha dourada animada embaixo do link
- Mobile: menu hamburguer com slide-down
```

### 3. Cards das Mesas

```
- Imagem real da mesa (aspect-ratio: 4/3, object-fit: cover)
- Categoria (font-size: 8px, letter-spacing: 3px, dourado)
- Nome da mesa (Cormorant Garamond, 20px)
- Descrição curta (11px, line-height: 1.7)
- Tags (chips pequenos, borda sutil)
- Link "Explorar Frequência →"
- Hover: translateY(-6px) + border-color: gold + box-shadow dourado
```

### 4. Painel de Diagnóstico (Terapeuta)

```
- Formulário com nome, data nascimento, contato, tipo de sessão, queixa principal
- Sliders energéticos (0-100%) para: Campo Energético, Emocional, Mental, Espiritual, Físico, Coerência
- Chips de bloqueios identificados (toggle seleção)
- Avaliação dos 7 chakras com barras coloridas e sliders
- Campo de observações terapêuticas
- Select de mesa recomendada
- Botões: Salvar Diagnóstico | Ir para Leitura | Gerar Relatório
```

### 5. Gerador de Relatório

```
- Preview em tempo real (editável)
- Header AXIS™ com dados da sessão
- Seções: Diagnóstico | Intervenção | Recomendações
- Assinatura de Márcia Britto
- Controles laterais para editar cada seção
- Botões: Gerar PDF | Salvar Histórico | Enviar ao Cliente
```

---

## CONFIGURAÇÃO NETLIFY

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NEXT_PUBLIC_SUPABASE_URL = ""
  NEXT_PUBLIC_SUPABASE_ANON_KEY = ""

[[plugins]]
  package = "@netlify/plugin-nextjs"

[[redirects]]
  from = "/admin/*"
  to = "/admin/index.html"
  status = 200
  conditions = {Role = ["admin"]}

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
NEXT_PUBLIC_WHATSAPP=5565993451066
NEXT_PUBLIC_SITE_URL=https://marciabrittoaxis7.netlify.app
```

---

## SUPABASE CLIENT (supabaseClient.js)

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
})

// Hook de autenticação
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

// Hook de perfil
export const getProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}
```

---

## ESTRUTURA DE PASTAS DO PROJETO

```
/axis-platform
├── public/
│   ├── images/
│   │   ├── marcia-britto.png     ← foto oficial com pêndulo
│   │   ├── logo-axis.svg
│   │   └── mesas/                ← imagens reais das mesas
│   ├── manifest.json
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── WhatsAppFloat.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Toast.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── MetodoSection.jsx
│   │   │   ├── MesasSection.jsx
│   │   │   ├── FormacoesSection.jsx
│   │   │   └── DepoimentosSection.jsx
│   │   ├── mesas/
│   │   │   ├── MesaCard.jsx
│   │   │   └── MesaGrid.jsx
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── CadastroForm.jsx
│   │   │   └── RecuperarSenha.jsx
│   │   └── dashboard/
│   │       ├── Sidebar.jsx
│   │       ├── Topbar.jsx
│   │       └── StatCard.jsx
│   │
│   ├── pages/ (ou app/ se usar App Router)
│   │   ├── index.jsx              → Home
│   │   ├── metodo.jsx
│   │   ├── mesas/
│   │   │   ├── index.jsx
│   │   │   └── [slug].jsx
│   │   ├── cursos/
│   │   ├── biblioteca/
│   │   ├── agenda/
│   │   ├── contato/
│   │   ├── login.jsx
│   │   ├── cadastro.jsx
│   │   ├── admin/
│   │   │   ├── index.jsx          → Dashboard admin
│   │   │   ├── usuarios.jsx
│   │   │   ├── sessoes.jsx
│   │   │   ├── mesas.jsx
│   │   │   ├── blog.jsx
│   │   │   ├── leads.jsx
│   │   │   └── configuracoes.jsx
│   │   ├── terapeuta/
│   │   │   ├── index.jsx
│   │   │   ├── diagnostico.jsx
│   │   │   ├── leitura.jsx
│   │   │   ├── mesas.jsx
│   │   │   ├── relatorio.jsx
│   │   │   ├── clientes.jsx
│   │   │   └── historico.jsx
│   │   └── cliente/
│   │       ├── index.jsx
│   │       ├── diagnostico.jsx
│   │       ├── evolucao.jsx
│   │       ├── mesas.jsx
│   │       └── relatorios.jsx
│   │
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useProfile.js
│   │   ├── useMesas.js
│   │   └── useSession.js
│   │
│   ├── services/
│   │   ├── supabaseClient.js
│   │   ├── authService.js
│   │   ├── mesasService.js
│   │   ├── sessionService.js
│   │   └── reportService.js
│   │
│   ├── lib/
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   └── styles/
│       └── globals.css
│
├── netlify.toml
├── next.config.js
├── tailwind.config.js
├── .env.local
├── package.json
└── README.md
```

---

## INTEGRAÇÕES E CONTATOS

```
WhatsApp:   +55 65 99345-1066
Email:      axissistemmetodomb@gmail.com
Instagram:  @axismb
Site atual: https://marciabrittoaxis7.netlify.app
```

### Link WhatsApp padrão para agendamento

```javascript
const whatsappLink = (msg = '') =>
  `https://wa.me/5565993451066?text=${encodeURIComponent(
    msg || 'Olá Márcia! Gostaria de agendar um atendimento AXIS™.'
  )}`
```

---

## ARQUIVOS DE REFERÊNCIA VISUAL (HTML PROTÓTIPOS)

Os arquivos abaixo foram desenvolvidos como protótipos visuais completos e funcionais. Devem ser usados como referência fiel de design, animações e funcionalidades para a implementação em React/Next.js:

| Arquivo | Descrição |
|---|---|
| `axis-home.html` | Home premium cinematográfica completa |
| `axis-login.html` | Tela de login + cadastro + recuperação |
| `axis-terapeuta.html` | Painel do terapeuta com todas as seções |
| `axis-cliente.html` | Painel do cliente com evolução e relatórios |
| `axis-admin.html` | Painel administrativo completo |

**Reproduzir fielmente:** visual dourado/cósmico, tipografia Cormorant Garamond + Josefin Sans, animações de estrelas, bordas douradas, glassmorphism, sliders de chakras, chips de bloqueios, timeline de evolução, tabelas de usuários, modais de criação e sistema de toast.

---

## RESULTADO ESPERADO FINAL

Uma plataforma terapêutica multidimensional de nível internacional que:

- Transmita autoridade e sofisticação imediata ao carregar
- Funcione como um instituto vibracional futurista completo
- Tenha backend real com autenticação e persistência de dados
- Permita à terapeuta gerenciar toda a operação pelo painel admin
- Ofereça ao cliente uma experiência visual e funcional premium
- Seja totalmente responsiva e instalável como app (PWA)
- Esteja pronta para deploy no Netlify com Supabase integrado

---

**Criadora: Márcia Britto**
**Sistema: AXIS™ — Plataforma Terapêutica Multidimensional**
**Ano: 2026**
**Contato: axissistemmetodomb@gmail.com | (65) 99345-1066**
