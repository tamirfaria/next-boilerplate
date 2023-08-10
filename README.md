# Next.js | Boilerplate

## Dependências e passo a passo de configurações utilizadas

---

### _.editorconfig_

> Utilizado pra identar e configurar estilos de escrita do código, como espaço, identação, etc.

📄 .editorconfig

```bash
# editorconfig.org
root = true

[*]
indent_style = spaces
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

---

#### _.eslint_

> Utilizado para encontrar erros de escrita e formatação no código

```bash
npx eslint --init
```

---

#### _.eslint-plugin-react-hooks_

> Plugin adicional do eslint que ajuda a verificar erros e inconsistências no uso dos hooks

```bash
yarn add eslint-plugin-react-hooks --dev
```

📄 .eslintcr.json

```bash
"settings": {
    "react": {
      "version": "detect"
    }
  },

"plugins": ["react-hooks"],

  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
```

---

### _.Prettier_

> Utilizado para formatação visual do código (uso de aspas simples ou aspas duplas, virgula, etc). Diferente do eslint que é utilizado para encontrar erros, tais como erros de tipagem, o Prettier é mais sobre formatação.

```bash
yarn add --dev --exact prettier
```

📄 .prettierrc

```bash
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

Depois disso precisamos configurar o eslint com as novas configurações do prettier. Para isso usaremos o "eslint-plugin-prettier", que rodará o prettier como uma regra do eslint.

```bash
yarn add --dev eslint-plugin-prettier eslint-config-prettier
```

📄 eslintrc.json

```bash
"extends": ["plugin:prettier/recommended"]
```

📄 .vscode/settings.json

```bash
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### _husky_ & _lint-staged_
>
> Impede que façamos um commit com erros do prettier e do eslint.

```bash
npx husky-init && yarn
yarn add lint-staged --dev
```

📄 package.json

```bash
"scripts": {
    "lint": "eslint src --max-warnings=0",
  },

  "lint-staged": {
  "src/**/*": [
    "yarn lint --fix"
  ]
}
```

📄 .husky/pre-commit

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```

### _Jest_
>
> Usaremos o Jest para testar nosso código

```bash
yarn add --dev jest @babel/preset-typescript @types/jest
yarn add -D jest-environment-jsdom
```

Criaremos a pasta .jest com o arquivo setup.js na raiz do projeto, e depois, no arquivo _.eslintrc.json_ colocaremos a configuração abaixo

```bash
"env": {
    "jest": true,
    "node": true
  },
```

Na sequencia criaremos o arquivo _jest.config.js_

```bash
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/config/CSSStub.js'
  }
}

```

Na sequencia criaremos o arquivo _.babelrc_

```bash
{
  "presets": ["next/babel", "@babel/preset-typescript"]
}
```

Por fim, colocaremos um novo script no package.json

```bash
 "scripts": {
    "test": "jest"
  },
```

### _React Testing Library_

Instalação

```bash
yarn add --dev @testing-library/react @testing-library/jest-dom
```

Configure o .jest/setup.ts

```bash
import '@testing-library/jest-dom';
```

Crie um arquivo config/CSSStub.js e insira a configuração abaixo:

```bash
module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  }
}
```

### _Styled Components_
>
> Biblioteca de estilização que utiliza "CSS in JS"

```bash
yarn add --dev @types/styled-components babel-plugin-styled-components
```

```bash
yarn add styled-components
```

📄 .babelrc

```bash
{
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true
      }
    ]
  ],
  "presets": ["next/babel", "@babel/preset-typescript"]
}
```

📄 next.config.js

```bash
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
```

📄 src/app/_document.tsx

```bash
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }
}

```
