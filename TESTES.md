# Checklist de Testes - Landing Page Auto Mecânica BS

## ✅ Testes Funcionais

### Navegação
- [ ] Clique em "Sobre Nós" → deve scrollar suavemente
- [ ] Clique em "Serviços" → deve navegar para #servicos
- [ ] Clique em "Diferenciais" → deve navegar para #diferenciais
- [ ] Clique em "Marcas" → deve navegar para #marcas
- [ ] Clique em "Depoimentos" → deve navegar para #depoimentos
- [ ] Links navegação mudam de cor ao passar

### Botões WhatsApp
- [ ] Clique no botão "Agendar Revisão Agora" (hero) → abre WhatsApp
- [ ] Clique no botão "Chamar no WhatsApp" (CTA final) → abre WhatsApp
- [ ] Mensagem pré-formatada aparece no chat
- [ ] Número correto: (19) 98920-3474

### Contato
- [ ] Clique no número de telefone (desktop) → abre WhatsApp
- [ ] Clique no endereço → abre Google Maps
- [ ] Dados corretos aparecem (R. Antônio Bacchi, 939)

### Links
- [ ] Instagram handle "Oficina Mecânica especializada"
- [ ] Todos os links internos funcionam
- [ ] Nenhum erro 404

---

## 🎨 Testes Visuais

### Cores
- [ ] Background escuro: #05070b
- [ ] Texto branco: #ffffff
- [ ] Destaque ciano: #00e1ff
- [ ] Botão verde: #25d366
- [ ] Borders cinzentos: #1e293b

### Tipografia
- [ ] Logo em 16px Bold
- [ ] Títulos de seção em 36px Extra Bold
- [ ] Texto regular em 16px
- [ ] Todos em font Inter

### Espaçamentos
- [ ] Padding horizontal 120px (desktop)
- [ ] Gaps entre elementos consistentes
- [ ] Grid cards alinhados
- [ ] Sem overflow horizontal

### Imagens
- [ ] Logo carrega corretamente
- [ ] Hero background visível
- [ ] Ícones aparecem em cores corretas
- [ ] Nenhuma imagem distorcida

---

## 📱 Testes de Responsividade

### Desktop (1920px)
- [ ] Layout completo visível
- [ ] 4 colunas serviços
- [ ] 3 colunas depoimentos
- [ ] Sem scroll horizontal
- [ ] Navigation sticky funciona

### Laptop (1440px)
- [ ] Padding reduzido: 80px
- [ ] 3 colunas serviços
- [ ] 2 colunas depoimentos
- [ ] Tudo alinhado corretamente

### Tablet (1024px)
- [ ] Menu responsivo
- [ ] 2 colunas serviços
- [ ] 1 coluna diferenciais
- [ ] CTA final com flex-column

### Tablet Pequeno (768px)
- [ ] Padding reduzido: 40px
- [ ] Todo conteúdo em 1 coluna
- [ ] Texto redimensionado
- [ ] Tudo legível

### Mobile (480px)
- [ ] Padding mínimo: 16px
- [ ] Font sizes reduzidas
- [ ] Botões ocupam largura total
- [ ] Hero title 20px
- [ ] Sem elementos escondidos importante

### Mobile Pequeno (320px)
- [ ] Não é quebrado
- [ ] Texto legível
- [ ] Botões clicáveis
- [ ] Imagens escalam corretamente

---

## ⚡ Testes de Performance

### Carregamento
- [ ] Página carrega em menos de 3 segundos
- [ ] Nenhuma requisição falhada (F12 → Network)
- [ ] Console não mostra erros (F12 → Console)
- [ ] Sem warnings críticos

### Animações
- [ ] Scroll suave funciona
- [ ] Parallax hero visível
- [ ] Fade-in seções ao scroll
- [ ] Hover elevação cartões funciona
- [ ] Nenhuma animação travada

### Interatividade
- [ ] Cliques em botões imediatos
- [ ] Links navegam rápido
- [ ] Nenhum delay perceptível
- [ ] Touch events funcionam (mobile)

---

## 🔍 Testes de Acessibilidade

### Teclado
- [ ] Tab navega por todos os elementos
- [ ] Enter ativa botões
- [ ] Space ativa botões
- [ ] Sem foco perdido

### Leitores de Tela
- [ ] Alt text em todas as imagens
- [ ] Semantic HTML (nav, section, etc.)
- [ ] Headings em ordem (h1, h2, etc.)
- [ ] Labels descritivas

### Contraste
- [ ] Texto branco em fundo escuro ✓
- [ ] Destaque ciano legível ✓
- [ ] Sem problemas de contraste

---

## 🌐 Testes Cross-Browser

### Chrome
- [ ] Layout correto
- [ ] Animações suaves
- [ ] Imagens carregam
- [ ] Sem console errors

### Firefox
- [ ] Layout correto
- [ ] Animações suaves
- [ ] Imagens carregam
- [ ] Sem console errors

### Safari
- [ ] Layout correto
- [ ] Animações suaves
- [ ] Imagens carregam
- [ ] Sem console errors

### Edge
- [ ] Layout correto
- [ ] Animações suaves
- [ ] Imagens carregam
- [ ] Sem console errors

### Safari Mobile (iOS)
- [ ] Layout responsivo
- [ ] Touch funciona
- [ ] WhatsApp abre
- [ ] Tudo legível

### Chrome Mobile (Android)
- [ ] Layout responsivo
- [ ] Touch funciona
- [ ] WhatsApp abre
- [ ] Tudo legível

---

## 📊 Testes de SEO

### Meta Tags
- [ ] Title correto no <title>
- [ ] Meta description presente
- [ ] Viewport meta tag presente
- [ ] Charset UTF-8 definido

### Estrutura
- [ ] Apenas um <h1> por página
- [ ] Headings em ordem lógica
- [ ] Alt text em imagens
- [ ] Links com text descritivo

### Performance SEO
- [ ] PageSpeed Insights > 80
- [ ] Lighthouse score > 80
- [ ] Core Web Vitals ótimos
- [ ] Mobile-friendly

---

## 🔐 Testes de Segurança

### Headers
- [ ] HTTPS habilitado (em produção)
- [ ] X-Frame-Options configurado
- [ ] X-Content-Type-Options configurado
- [ ] CSP headers presentes

### Conteúdo
- [ ] Sem dados sensíveis expostos
- [ ] Nenhuma credencial no código
- [ ] Links validados
- [ ] Sem conteúdo malicioso

---

## 📋 Checklist Final

### Antes de Deploy
- [ ] Todos os erros acima testados ✓
- [ ] Console do browser limpo
- [ ] Nenhum arquivo quebrado
- [ ] Todos os assets carregam
- [ ] Responsividade em todos os devices
- [ ] Performance aceitável
- [ ] SEO checado

### Deploy
- [ ] Arquivos uploadados corretamente
- [ ] Domínio/URL configurado
- [ ] SSL/HTTPS ativo
- [ ] Sitemap.xml indexado
- [ ] Google Analytics configurado
- [ ] Google Search Console verificado

### Pós-Deploy
- [ ] Testar em navegadores reais
- [ ] Testar em celulares reais
- [ ] Monitorar performance
- [ ] Verificar analytics
- [ ] Manter backups regulares

---

## 🐛 Problemas Comuns & Soluções

### Problema: Imagens não carregam
**Solução:** URLs do Figma expiram. Download os assets e suba junto com os arquivos.

### Problema: CSS não aplica
**Solução:** Verifique path relativo (styles.css está na raiz)

### Problema: WhatsApp não abre
**Solução:** Teste em mobile. Desktop pode bloquear. Use número sem formatação.

### Problema: Layout quebrado no mobile
**Solução:** Limpe cache (Ctrl+Shift+Delete) e teste em modo privado

### Problema: Animações travadas
**Solução:** Desative extensões do navegador e teste incógnito

---

## 📞 Contato para Suporte

Qualquer problema, entre em contato:
- **WhatsApp:** (19) 98920-3474
- **Email:** Configurar email de contato
- **Endereço:** R. Antônio Bacchi, 939 - Piracicaba, SP

---

**Versão do Documento:** 1.0  
**Data:** 31 de Agosto de 2026  
**Status:** ✅ Pronto para Produção
