# Auto Mecânica BS - Landing Page

Landing page profissional para Auto Mecânica BS, desenvolvida com fidelidade total ao design Figma.

## 📋 Estrutura do Projeto

```
bs_site/
├── index.html          # Estrutura HTML completa
├── styles.css          # Estilos CSS responsivos
├── script.js           # Interatividade e funcionalidades
└── README.md           # Este arquivo
```

## ✨ Características

### Design
- ✅ Fidelidade total ao design Figma
- ✅ Cores precisas (#05070b, #00e1ff, #25d366, etc.)
- ✅ Tipografia Inter com pesos 400-900
- ✅ Espaçamentos e dimensões exatos
- ✅ Ícones e imagens do Figma (assets originais)
- ✅ Sombras e efeitos visuais

### Funcionalidades
- ✅ Navegação suave (smooth scroll)
- ✅ Integração WhatsApp
- ✅ Links para Google Maps
- ✅ Links para chamadas telefônicas (mobile)
- ✅ Animações de scroll
- ✅ Efeitos hover interativos
- ✅ Ativa navegação (active link highlighting)
- ✅ Parallax no hero

### Responsividade
- ✅ Desktop (1920px+)
- ✅ Laptop (1440px)
- ✅ Tablet (1024px, 768px)
- ✅ Mobile (480px)

## 🚀 Como Usar

### 1. Abrir no Navegador
Simplesmente abra o arquivo `index.html` em qualquer navegador moderno:
- Chrome
- Firefox
- Safari
- Edge

### 2. Servir Localmente (Recomendado)
Para melhor experiência com recursos locais:

**Python 3:**
```bash
cd c:\Users\gabri\Desktop\bs_site
python -m http.server 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

**PHP:**
```bash
php -S localhost:8000
```

Então acesse: `http://localhost:8000`

## 📱 Seções da Página

1. **Navegação** - Header sticky com links de navegação
2. **Hero Section** - Seção destacada com CTA principal
3. **Serviços** - Grid com 8 serviços oferecidos
4. **Diferenciais** - 4 principais pontos fortes
5. **Marcas** - 10 marcas de veículos atendidas
6. **Depoimentos** - 3 testimoniais de clientes
7. **CTA Final** - Última chamada para ação + Informações de contato
8. **Footer** - Rodapé com copyright

## 🔧 Customização

### Alterar Número WhatsApp
Em `script.js`, linha ~2:
```javascript
const WHATSAPP_PHONE = '5519989203474'; // Altere aqui
```

### Alterar Mensagem WhatsApp
Em `script.js`, linha ~3:
```javascript
const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar uma revisão na Auto Mecânica BS.';
```

### Alterar Cores
Em `styles.css`, na seção `:root`:
```css
--color-cyan: #00e1ff;
--color-green: #25d366;
--color-blue: #0066ff;
/* etc. */
```

### Alterar Conteúdo
Edite o texto diretamente em `index.html`. Todas as seções estão bem comentadas.

## 📊 Compatibilidade

- ✅ Browsers modernos (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablet (iPad, Android tablets)
- ✅ JavaScript ES6+ necessário

## 🎨 Assets Utilizados

Todos os ícones e imagens são carregados diretamente do Figma via URLs:
- Logo e imagens de fundo
- Ícones de serviços
- Ícones de diferenciais
- Ícones de contato
- Stars e avatares

Os assets têm validade de 7 dias no servidor Figma. Para uso permanente, você pode:
1. Fazer download dos assets
2. Colocá-los na pasta do projeto
3. Alterar as URLs no HTML

## 🔗 Links de Navegação

- **Sobre Nós** - #sobre
- **Serviços** - #servicos
- **Diferenciais** - #diferenciais
- **Marcas** - #marcas
- **Depoimentos** - #depoimentos

## 📞 Contato

- **Telefone:** (19) 98920-3474
- **WhatsApp:** https://wa.me/5519989203474
- **Endereço:** R. Antônio Bacchi, 939 - Paulicéia, Piracicaba - SP, 13424-070
- **Horário:** Seg à Sex: 08:00 às 18:00

## 📝 Notas de Desenvolvimento

### Estrutura CSS
- Variáveis CSS para valores reutilizáveis
- Sistema de spacing consistente
- Breakpoints responsivos bem definidos
- Nomenclatura BEM simplificada

### JavaScript
- Vanilla JS (sem dependências)
- Intersection Observer para animações
- Event listeners organizados
- Código comentado e modular

### Performance
- Sem dependências externas pesadas
- CSS otimizado
- Imagens carregadas sob demanda
- Carregamento font Google otimizado

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique se tem acesso à internet (imagens do Figma)
- Após 7 dias, as URLs podem expirar. Faça download dos assets.

### Animações não funcionam
- Verifique se o JavaScript está habilitado
- Abra o DevTools (F12) e procure por erros

### Layout desalinhado em mobile
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique o zoom (deve estar em 100%)

## 📄 Licença

Este projeto foi desenvolvido especificamente para Auto Mecânica BS.

---

**Desenvolvido com ❤️ para Auto Mecânica BS**
