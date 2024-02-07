# Spotify - Imersão Front-End Alura

## Objetivo

- Clone do Spotify desenvolvido durante a Imersão de Front-end da **Alura**, onde o objetivo foi construir o layout e adicionar um pouco de funcionalidade na pesquisa por artistas a partir de uma "API" mockada com JSON Server.

## ⚒ Linguagens e Ferramentas

- HTML5
- CSS3
- JavaScript

## 💡 Aprendizados

- CSS e Pseudo-classes.
- Media Queries (Responsividade até 1015px).
- Manipulação do DOM.
- **Mockado dados em JSON com json-server para simular uma API (api-artists).**
- Consumir API com fetch.

## 🖥️ Como executar localmente

Clone o projeto:

```
git clone https://github.com/VTEXsx/Spotify-imersaoAlura.git
```

Navegar até a raiz do projeto:

```
cd spotify-imersaoAlura
```

Instale as dependências (versão mais estável do JSON Server caso já não tenha instalado):

```
npm install -g json-server@0.17.4
```

Valide se está na versão 0.17.4:

```
npx json-server --version
```

Inicie o servidor:

```
npx json-server --watch api-artists/artists.json --port 3000
```

E por fim, execute aplicação com **Live Server**.
