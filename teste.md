Para transformar seus decoradores customizados em uma biblioteca que possa ser reutilizada em outros projetos TypeScript, você precisará seguir alguns passos para organizar, empacotar e publicar sua biblioteca. Aqui está um guia passo a passo para fazer isso:

### 1. Estruturar a Biblioteca

Primeiro, você precisa organizar seus decoradores em uma estrutura de pasta clara. Aqui está um exemplo de como você poderia estruturar:

```
/my-custom-validators
  /src
    - index.ts
    - LengthRange.ts
    - MaxLengthCustom.ts
  /dist
  package.json
  tsconfig.json
  README.md
```

**Detalhes dos Arquivos:**
- **index.ts**: Este arquivo servirá como ponto de entrada da sua biblioteca, onde você exportará todos os decoradores.
- **LengthRange.ts** e **MaxLengthCustom.ts**: Arquivos contendo os códigos dos seus decoradores.
- **package.json**: Arquivo de configuração do projeto npm.
- **tsconfig.json**: Configuração do compilador TypeScript.
- **README.md**: Documentação sobre como usar a biblioteca.

### 2. Configuração do `package.json`

Você precisará de um `package.json` para gerenciar as dependências e definir scripts de build. Aqui está um exemplo básico:

```json
{
  "name": "my-custom-validators",
  "version": "1.0.0",
  "description": "Custom validators for class-validator.",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "prepublishOnly": "npm run build"
  },
  "files": [
    "dist/**/*"
  ],
  "peerDependencies": {
    "class-validator": "^0.13.1"
  },
  "devDependencies": {
    "typescript": "^4.0.0"
  }
}
```

### 3. Configuração do `tsconfig.json`

O `tsconfig.json` deve ser configurado para compilar seus arquivos TypeScript para JavaScript. Aqui está um exemplo básico:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "commonjs",
    "target": "es2017",
    "declaration": true,
    "strict": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

### 4. Escrever o Código Fonte

Dentro do arquivo `index.ts`, você exportará todos os decoradores que você criou:

```typescript
export * from './LengthRange';
export * from './MaxLengthCustom';
```

E cada um dos outros arquivos TypeScript conterá o código para cada decorador, como mostrado nas etapas anteriores.

### 5. Documentação

Escreva um `README.md` claro, descrevendo o que sua biblioteca faz, como instalar e como usar os decoradores. Inclua exemplos de código para facilitar para os usuários.

### 6. Compilar e Publicar

Antes de publicar, você deve compilar seu projeto:

```bash
npm run build
```

Após verificar se tudo está compilando corretamente, você pode publicar sua biblioteca no npm:

```bash
npm login
npm publish
```

### 7. Usar a Biblioteca em Outros Projetos

Após publicar, qualquer pessoa (incluindo você em outros projetos) pode instalar sua biblioteca usando npm ou yarn:

```bash
npm install my-custom-validators
```

E então, importar e usar os decoradores como qualquer outra biblioteca:

```typescript
import { LengthRange, MaxLengthCustom } from 'my-custom-validators';

class User {
  @LengthRange(5, 15)
  username: string;

  @MaxLengthCustom(20)
  bio: string;
}
```

Seguindo esses passos, você cria uma biblioteca bem organizada e reutilizável que pode ajudar a manter a consistência e reduzir duplicações em seus projetos TypeScript.