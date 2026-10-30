# Portfólio · Marx Vinicius Bispo | MV NEXUS

Site estático (HTML, CSS e JavaScript), sem build. Fundo em partículas com three.js (carregado por CDN).

## Estrutura
- `index.html`: conteúdo (sobre, tecnologias, formação, contato)
- `css/style.css`: estilos (mobile first)
- `js/data.js`: **seus dados**: contato, lista de projetos (`WORKS`) e detalhes de cada um (`DET`)
- `js/main.js`: comportamento (partículas, filtros, janela de projeto)
- `assets/`: imagens e o vídeo da logo

## Adicionar ou editar um projeto
1. Coloque a imagem de capa em `assets/` (ideal: 640×400, formato .webp ou .jpg).
2. Em `js/data.js`, copie uma linha de `WORKS` e ajuste `title`, `cat`, `desc`, `url` e `img` (ex.: `"assets/meu-projeto.webp"`).
3. Em `DET`, use o mesmo título como chave para preencher problema (`p`), funcionalidades (`f`), tecnologias (`t`) e status (`s`).
4. Faça commit e push: a Vercel publica sozinha.

## Publicar (GitHub + Vercel)
1. No GitHub, crie um repositório (ex.: `portfolio`) e envie todos os arquivos desta pasta (Add file > Upload files, ou `git push`).
2. Em vercel.com: **Add New > Project**, importe o repositório.
3. **Framework Preset: Other**, sem comando de build e sem pasta de saída. Clique em **Deploy**.

Cada novo push no GitHub gera uma nova versão do site.
