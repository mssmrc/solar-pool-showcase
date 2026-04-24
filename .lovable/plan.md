# Site — Aquecimento Solar para Piscinas

Site institucional moderno e clean, com paleta azul piscina + branco e detalhes em amarelo solar, transmitindo confiança, tecnologia e bem-estar.

## Identidade visual
- **Paleta**: azul piscina como cor principal, branco/off-white de fundo, amarelo/laranja solar como acento (CTAs, destaques).
- **Tipografia**: sans-serif moderna, títulos com peso forte e bom espaçamento.
- **Estilo**: cards com cantos arredondados, sombras suaves, muito espaço em branco, fotos grandes e em destaque, microanimações sutis (hover, fade-in ao rolar).
- **Responsivo**: mobile-first, navegação adaptada para celular (menu hambúrguer).

## Estrutura — 3 páginas

### 1. Home (`/`)
- **Header** fixo com logo, navegação (Home, Vitrine, Contato) e botão "Fale no WhatsApp".
- **Hero**: imagem grande de uma piscina aquecida, título forte (ex: "Aproveite sua piscina o ano todo"), subtítulo curto e dois CTAs: "Ver projetos" e "Pedir orçamento".
- **Sobre / Diferenciais**: 3-4 cards com ícones (instalação especializada, manutenção, garantia, economia de energia).
- **Como funciona**: passo a passo simples (avaliação → projeto → instalação → manutenção).
- **Cases em destaque**: 3-4 cards com foto, título do projeto, cidade e data, link "Ver detalhes" levando à vitrine.
- **CTA final**: bloco em destaque convidando a entrar em contato pelo WhatsApp.
- **Footer** com contato resumido, redes sociais e copyright.

### 2. Vitrine (`/vitrine`)
- Título e subtítulo introdutórios.
- **Filtros** no topo (chips/botões):
  - Por tipo: Residencial, Comercial, Clube/Condomínio.
  - Por região/cidade (lista das cidades atendidas).
- **Grid de cards** com foto principal, título, tipo, cidade e data da instalação.
- Ao clicar, abre **página de detalhe do case** (`/vitrine/$caseId`) com:
  - Galeria de fotos (carrossel + miniaturas).
  - Descrição do projeto.
  - Tipo, cidade, data da instalação.
  - CTA "Quero um projeto assim" → WhatsApp.
- Os filtros usam search params na URL (compartilháveis e indexáveis).
- **Conteúdo inicial**: usaremos placeholders de cases (texto fictício + imagens stock de piscinas) prontos para você substituir depois pelos dados e fotos reais.

### 3. Contato (`/contato`)
- Título e mensagem acolhedora.
- **Área de atuação**: lista clara das cidades/regiões atendidas + uma seção visual (mapa simples ou bloco destacado).
- **Informações de contato**: telefone/WhatsApp (clicável), e-mail, horário de atendimento, redes sociais.
- **Formulário simples** com os campos: Nome, Telefone, E-mail, Observações.
  - Validação em tempo real (campos obrigatórios, e-mail e telefone formatados).
  - Ao enviar, **abre o WhatsApp** da empresa em nova aba com a mensagem já formatada incluindo todos os dados preenchidos. Sem necessidade de banco de dados.
- Bloco de FAQ rápido (3-4 perguntas comuns: tempo de instalação, garantia, manutenção, economia).

## SEO e compartilhamento
- Cada página com seu próprio título, descrição e meta tags Open Graph (para aparecer bem ao compartilhar no WhatsApp/redes).
- URLs limpas e amigáveis (`/vitrine`, `/contato`, `/vitrine/projeto-residencial-campinas`).

## Configurações que precisarei de você (depois de aprovar o layout)
- Nome da empresa e logo (se houver).
- Número do WhatsApp, e-mail e telefone.
- Lista de cidades/regiões de atendimento.
- Fotos e descrições reais dos cases (substituirão os placeholders).
- Textos institucionais finais (sobre a empresa, diferenciais).

Posso prosseguir com essa estrutura?