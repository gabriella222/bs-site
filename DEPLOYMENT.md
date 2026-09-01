# Deploy & Hosting da Landing Page

## 🚀 Opções de Deployment

### 1. GitHub Pages (Grátis)

#### Passo 1: Criar repositório
```bash
git init
git add .
git commit -m "Initial commit: Landing page Auto Mecânica BS"
git branch -M main
git remote add origin https://github.com/seu-usuario/bs-site.git
git push -u origin main
```

#### Passo 2: Habilitar GitHub Pages
1. Vá para Settings do repositório
2. Em "Pages", selecione "Deploy from a branch"
3. Escolha "main" branch
4. Clique em Save

Seu site estará em: `https://seu-usuario.github.io/bs-site/`

---

### 2. Netlify (Grátis)

#### Opção A: Drag & Drop
1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou registre-se
3. Arraste a pasta `bs_site` para o campo de upload
4. Seu site estará online em segundos!

#### Opção B: Git
1. Conecte seu repositório GitHub
2. Defina o diretório raiz como `/` (ou específico se em subpasta)
3. Clique em "Deploy"

---

### 3. Vercel (Grátis)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Configure e deploy

---

### 4. Hostinger / DomínioTemas / 000Webhost (Baixo Custo)

#### Via FTP/SFTP
1. Conecte via FTP client (FileZilla, WinSCP)
2. Suba os arquivos:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Acesse via seu domínio

#### Credenciais necessárias
- Host FTP (fornecido pelo provedor)
- Usuário FTP
- Senha FTP
- Porta FTP (normalmente 21)

---

### 5. Seu Próprio Servidor

#### VPS Linux com Nginx
```bash
# SSH no servidor
ssh usuario@seu-servidor.com

# Instale Nginx
sudo apt update && sudo apt install nginx

# Copie os arquivos
scp -r bs_site/ usuario@seu-servidor.com:/var/www/

# Configure Nginx
sudo nano /etc/nginx/sites-available/default
```

Configuração Nginx:
```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    
    root /var/www/bs_site;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
}
```

Reinicie:
```bash
sudo systemctl restart nginx
```

---

## 🔐 SSL/HTTPS Setup

### Opção 1: Let's Encrypt (Grátis)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com
```

### Opção 2: Cloudflare (Grátis)
1. Crie conta em [cloudflare.com](https://cloudflare.com)
2. Adicione seu domínio
3. Atualize nameservers do seu registrador
4. Ative SSL grátis em "SSL/TLS"

---

## 📊 Monitoramento

### Google Analytics
Adicione ao `<head>` do `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione sua propriedade
3. Verifique a propriedade
4. Envie seu sitemap

### Sitemap XML
Crie `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://seu-dominio.com</loc>
        <lastmod>2026-08-31</lastmod>
        <priority>1.0</priority>
    </url>
</urlset>
```

---

## 📧 Formulário de Contato (Opcional)

Se quiser adicionar um formulário (sem backend):

### Usando Formspree.io
```html
<form action="https://formspree.io/f/SEU_FORM_ID" method="POST">
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

### Usando Netlify Forms
Adicione `netlify` ao form:
```html
<form name="contact" netlify>
    <input type="email" name="email" required>
    <textarea name="message" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

---

## 🔄 Atualizações Futuras

### Adicionar Blog
1. Crie pasta `/blog`
2. Estruture posts como `.html`
3. Crie index com listagem

### Adicionar Agendamento Online
1. Integre com Cal.com ou Calendly
2. Embed widget no `<div id="agendamento"></div>`

### Adicionar Chat Bot
1. Integre WhatsApp Business API
2. Ou use Crisp/Zendesk

---

## 🎯 Dicas de SEO

### Meta Tags Atualizadas
Adicione ao `<head>`:
```html
<meta name="description" content="Auto Mecânica BS - Serviços automotivos especializados em Piracicaba. Diagnóstico, revisão, manutenção. Whatsapp (19) 98920-3474">
<meta name="keywords" content="mecânica, oficina, piracicaba, serviços automotivos">
<meta name="author" content="Auto Mecânica BS">
<meta property="og:title" content="Auto Mecânica BS">
<meta property="og:description" content="Serviços automotivos de qualidade">
<meta property="og:image" content="https://seu-dominio.com/og-image.png">
<meta property="og:url" content="https://seu-dominio.com">
<meta name="twitter:card" content="summary_large_image">
```

### Schema Markup
Adicione JSON-LD (antes do `</body>`):
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Auto Mecânica BS",
    "image": "https://www.figma.com/api/mcp/asset/1ea83402-24ab-45cc-9a6f-72017116e429.png",
    "description": "Serviços automotivos especializados",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. Antônio Bacchi, 939",
        "addressLocality": "Piracicaba",
        "addressRegion": "SP",
        "postalCode": "13424-070",
        "addressCountry": "BR"
    },
    "telephone": "(19) 98920-3474",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
    }
}
</script>
```

---

## 📱 PWA (Progressive Web App)

Crie `manifest.json`:
```json
{
    "name": "Auto Mecânica BS",
    "short_name": "Auto Mecânica",
    "description": "Serviços automotivos especializados",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#05070b",
    "theme_color": "#00e1ff",
    "icons": [
        {
            "src": "/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

Adicione no `<head>`:
```html
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#00e1ff">
```

---

## 💾 Backup & Versionamento

```bash
# Backup completo
tar -czf bs_site_backup_$(date +%Y%m%d).tar.gz bs_site/

# Upload para cloud
gsutil -m cp -r bs_site gs://seu-bucket/

# ou com AWS S3
aws s3 sync bs_site s3://seu-bucket/
```

---

## 🐛 Troubleshooting Deployment

### 404 Not Found
- Verifique se `index.html` está na raiz
- Verifique permissões (chmod 644 para arquivos)

### CSS/JS não carregam
- Verifique paths relativos
- Pode precisar de trailing slashes

### Imagens não carregam
- URLs do Figma expiram após 7 dias
- Faça download dos assets

### Performance lenta
- Comprima imagens
- Minifique CSS/JS (opcional)
- Enable gzip compression

---

**Pronto para ir ao ar!** 🚀
