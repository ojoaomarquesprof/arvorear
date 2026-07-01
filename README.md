# Clínica Arvorear

Site institucional da Clínica Arvorear, desenvolvido para apresentar a proposta clínica, o espaço, a abordagem multidisciplinar e facilitar o primeiro contato com as famílias.

## Stack

- Next.js 15 com App Router
- React 19 e TypeScript
- Tailwind CSS
- Framer Motion, com respeito a `prefers-reduced-motion`
- React Hook Form + Zod para validação do formulário
- Lucide React para ícones

## Como rodar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
copy .env.example .env.local
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

No macOS ou Linux, use `cp .env.example .env.local` no lugar de `copy`.

## Variáveis de ambiente

Edite `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://dominio-oficial.com.br
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/perfil-oficial/
```

- `NEXT_PUBLIC_SITE_URL` alimenta canonical, Open Graph, JSON-LD, sitemap e robots. Use a URL HTTPS sem barra no final.
- `NEXT_PUBLIC_INSTAGRAM_URL` é opcional. O link só aparece quando contém uma URL válida do Instagram.
- Sem uma URL pública válida, o projeto continua funcionando localmente, mas gera instruções `noindex` para evitar indexação acidental de localhost.

Depois de alterar variáveis, reinicie o servidor de desenvolvimento.

## Onde trocar os dados de contato

Os dados centrais estão em [`lib/site-config.ts`](lib/site-config.ts):

- nome da clínica;
- responsável/fundadora;
- telefone exibido;
- número internacional usado no `wa.me`;
- e-mail;
- endereço;
- mensagem inicial do WhatsApp.

O Instagram e o domínio público ficam nas variáveis de ambiente. Antes da publicação, confirme telefone, e-mail, endereço, mapa e perfil do Instagram com a clínica.

## Onde trocar imagens e identidade visual

Os arquivos de marca e as fotografias estão em `public/assets/arvorear`:

- `brand/logos/`: logos e símbolos;
- `brand/banners/`: imagens institucionais;
- `espaco/`: fotos reais da clínica;
- `espaco/conceito-3d/`: renders de conceito, não usados como fotografias reais no site.

Referências principais no código:

- hero: `components/sections/hero.tsx`;
- galeria: lista `spaceGallery` em `lib/site-data.ts`;
- contato/fachada: `components/sections/contact.tsx`;
- logo do site: `components/logo.tsx`;
- favicon: `app/icon.svg`;
- imagem social (Open Graph/Twitter): `app/layout.tsx`.

Ao substituir uma imagem, preserve a proporção aproximada, use WebP ou AVIF quando possível e atualize o texto alternativo.

## SEO, LGPD e conversão

O projeto inclui:

- metadata do Next.js, canonical, Open Graph e Twitter Card;
- JSON-LD do tipo `MedicalClinic` apenas com dados públicos já fornecidos;
- `sitemap.xml`, `robots.txt`, favicon e manifest;
- botão flutuante e CTAs de WhatsApp com mensagem pré-preenchida;
- formulário processado somente no navegador, sem backend e sem armazenamento local;
- página `/politica-de-privacidade`;
- avisos éticos de que o site não realiza diagnóstico e de que o primeiro contato não substitui avaliação profissional.

## Comandos de qualidade

```bash
npm run typecheck
npm run lint
npm run build
```

Para testar o build localmente:

```bash
npm run start
```

## Deploy na Vercel

1. Envie o repositório para GitHub, GitLab ou Bitbucket.
2. Na Vercel, selecione **Add New > Project** e importe o repositório.
3. Mantenha o preset **Next.js** e os comandos detectados automaticamente.
4. Em **Settings > Environment Variables**, cadastre `NEXT_PUBLIC_SITE_URL` e, se confirmado, `NEXT_PUBLIC_INSTAGRAM_URL` para Production, Preview e Development.
5. Faça o primeiro deploy.
6. Configure o domínio oficial em **Settings > Domains**.
7. Atualize `NEXT_PUBLIC_SITE_URL` para o domínio definitivo e faça um novo deploy.
8. Confirme `/robots.txt`, `/sitemap.xml`, a imagem de compartilhamento e os links de contato no domínio publicado.

## Checklist de entrega

- [ ] Domínio oficial configurado em `NEXT_PUBLIC_SITE_URL`
- [ ] Telefone e número internacional do WhatsApp confirmados
- [ ] E-mail confirmado e testado
- [ ] Endereço e resultado do Google Maps confirmados
- [ ] Instagram oficial configurado ou variável mantida vazia
- [ ] Nome/cargo da responsável aprovados
- [ ] Imagens e autorizações de uso aprovadas
- [ ] Política de Privacidade revisada pela responsável pela clínica
- [ ] Testes em celular, tablet e desktop concluídos
- [ ] `npm run lint` e `npm run build` passando
- [ ] Favicon, metadata, Open Graph, sitemap e robots verificados em produção
- [ ] Formulário e mensagem final do WhatsApp testados sem enviar dados reais

## Observação sobre o formulário

O formulário não envia dados a uma API. Ele valida os campos no navegador e monta uma URL do WhatsApp para revisão do visitante. Se futuramente houver backend, CRM, analytics ou pixel de publicidade, será necessário atualizar a implementação, a política de privacidade e o mecanismo de consentimento.
