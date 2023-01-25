# Next.js | Boilerplate

### Dependências e passo a passo de configurações utilizadas:

---

#### _.editorconfig_

> Utilizado pra identar e configurar estilos de escrita do código, como espaço, identação, etc.

Crie um arquivo chamado _.editorconfig_ no root do projeto e insira o código abaixo 👇

```
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

Para instalar, rode o comando abaixo no terminal e configure conforme as opções fornecidas no próprio terminal.

```
npx eslint --init
```

---

#### _.eslint-plugin-react-hooks_

> Plugin adicional do eslint que ajuda a verificar erros e inconsistências no uso dos hooks

Para instalar, rode o comando abaixo no terminal 👇

```
yarn add eslint-plugin-react-hooks --dev
```

Na sequência, configure o arquivo _.eslintcr.json_ com as regras abaixo 👇

```
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

_.Prettier_

> Utilizado para formatação visual do código (uso de aspas simples ou aspas duplas, virgula, etc). Diferente do eslint que é utilizado para encontrar erros, tais como erros de tipagem, o Prettier é mais sobre formatação.

Para instalar, rode o comando abaixo no terminal 👇

```
yarn add --dev --exact prettier
```

Após isso, crie um novo arquivo _.prettierrc_ com as regras abaixo 👇

```
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

Depois disso precisamos configurar o eslint com as novas configurações do prettier. Para isso usaremos o "eslint-plugin-prettier", que rodará o prettier como uma regra do eslint.

```
yarn add --dev eslint-plugin-prettier eslint-config-prettier
```

Após rodar o comando, usaremos a configuração abaixo no arquivo _.eslintrc.json_

```
"extends": ["plugin:prettier/recommended"]
```
Configuraremos também o arquivo settings.json da pasta .vscode, conforme dados abaixo
```
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
___
_husky_ & _lint-staged_
> Impede que façamos um commit com erros do prettier e do eslint.

```
npx husky-init && yarn
yarn add lint-staged --dev
```
Depois disso configure o package.json conforme abaixo:
```
"scripts": {
    "lint": "eslint src --max-warnings=0",
  },
```
O package.json conforme abaixo:
```
"lint-staged": {
  "src/**/*": [
    "yarn lint --fix"
  ]
}
```

E no arquivo _pre-commit_ configuraremos assim

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install lint-staged
```
___

_Jest_
> Usaremos o Jest para testar nosso código

```
yarn add --dev jest @babel/preset-typescript @types/jest
yarn add -D jest-environment-jsdom
```
Criaremos a pasta .jest com o arquivo setup.js na raiz do projeto, e depois, no arquivo _eslint_ colocaremos a configuração abaixo
```
"env": {
    "jest": true,
    "node": true
  },
```
Na sequencia criaremos o arquivo _jest.config.js_
```
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
```
{
  "presets": ["next/babel", "@babel/preset-typescript"]
}
```

Por fim, colocaremos um novo script no package.json
```
 "scripts": {
    "test": "jest"
  },
```
___
_React Testing Library_

Instalação
```
yarn add --dev @testing-library/react @testing-library/jest-dom
```
Configure o .jest/setup.ts
```
import '@testing-library/jest-dom';
```

Crie um arquivo config/CSSStub.js e insira a configuração abaixo:
```
module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  }
}
```