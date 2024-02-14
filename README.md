# React Chat APP

React Chat App, um projeto de simulação de um aplicativo de conversa, utilizando React.
O Intuito é testar as habilidades em front end e implementar uma interface que contém todo o sistema de autenticação, incluido OAuth, uma LandingPage e a aplicação em si, que neste caso é um Chat App.

## Tecnologias utilizadas


Como banco de dados foi utilizado Postgresql serveless.

O Postgresql é um sistema gerenciador de banco de dados e relacional de código aberto.

<a alt="postgres logo" href="https://www.postgresql.org/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/177543?s=200&v=4" width="45"></a>

---
Para o Front end foi utilizado NextJS.

O NextJS é um framework React, uma poderosa ferramenta de desenvolvimento, onde é possível renderizar componentes e realizar o data fetching no lado do servidor
disponibilizando uma melhor performance para aplicação.

<a alt="Next logo" href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" width="45"></a>

--- 

Para os componentes foi utilizado a biblioteca Chakra UI.

Uma biblioteca de componentes completa, versátil e de fácil implementação.

<a alt="Chakra UI logo" href="https://chakra-ui.com/" target="_blank" rel="noreferrer"><img src="https://avatars.githubusercontent.com/u/54212428?s=200&v=4" width="45"></a>

---

## Instalação do Repositório

Para instalar as dependências no repositório:

- Utilizando npm:

  `npm i`

- Utilizando Yarn:

  `Yarn`

Após a instalação das dependências sera necessário utilizar um banco de dados para armazenar as informações de usuário
Para este projeto foi utilizado o postgres serverless:

<b>Recomendação:</b>

Utilizar o console da Neon, que permite você criar uma base dados postgres gratuitamente sem a necessidade de instala-lo em sua máquina.

`https://neon.tech/`

Acesse o link acima, crie uma conta, e uma base dados, após isso será necessário criar um arquivo .env contendo as váriavés para acessar a base de dados remotamente:

exemplo de env
```
  DATABASE_URL= ****
  DIRECT_URL= ***
```

O Próximo passo é adicionar uma secret para o Next Auth, para isto basta executar o comando:

`openssl rand -base64 32`

e armarzenar no arquivo .env criado anteriormente

exemplo de env
```
  AUTH_SECRET= ****
```

O próximo passo é configurar o OAuth no github e na Google

- No Github:
  
  Clique em <i>'settings'</i>, clicando na sua foto no canto superior direito da tela

  Depois Clique em <i>'Developer Settings'</i> e em seguida <i>'OAuth Apps'</i>

  Agora selecione <i>'New OAuth App'</i>

  Entre com os seguintes valores nos campos:
  ```
    Application name: chat-app-react
    HomePage URL: http://localhost:3000
    Authorization callback URL: http://localhost:3000/api/auth/callback/github
  ```
  Após isso copie o Client ID e o Client secret e armazine no arquivo .env criado anteriormente

  exemplo de env
  ```
  GITHUB_SECRET= ****
  GITHUB_ID= ****
  ```

- Para a Google seguir este tutorial:

  https://developers.google.com/my-business/content/oauth-setup?hl=pt-br

  Depois, na tela de credenciais utilizar os seguintes valores
  ```
    Nome: Cliente web 1 (opcional)
    Origens Javascript authorizadas > URIs: http://localhost:3000
    URIs de redirecionamento autorizados > URIs: http://localhost:3000/api/auth/callback/google
  ```

  Copiar o Google ID e Google Secrete gerado e adicioná-los ao arquivo .env criado anteriormente

    exemplo de env
  ```
    GOOGLE_SECRET= ****
    GOOGLE_ID= ****
  ```

  Ao final seu arquivo .env deve conter no mínimo estas váriáveis para funcionamento do projeto
  ```
    DATABASE_URL=
    DIRECT_URL=

    AUTH_SECRET=
    GITHUB_SECRET=

    GOOGLE_SECRET=
    GOOGLE_ID=
  ```

  com estas configurações, se tudo estiver correto é só rodar o projeto utilizando

  `npm run dev`

  -ou-

  `yarn dev`