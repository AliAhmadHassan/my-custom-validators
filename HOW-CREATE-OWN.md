Para criar um novo projeto Node.js destinado a ser uma biblioteca de validações que você pode publicar no npm e em seu repositório Git pessoal, você precisará seguir alguns passos para configurar, desenvolver e preparar seu projeto para publicação. Vamos passar por esses passos detalhadamente:

### 1. Configuração Inicial

**Criar um Novo Diretório para o Projeto**

Comece criando um novo diretório para sua biblioteca e inicialize um projeto Node.js:

```bash
mkdir my-custom-validators
cd my-custom-validators
npm init -y
```

Isso cria um arquivo `package.json` básico.

**Configurar Git**

Inicialize o Git no diretório do projeto:

```bash
git init
echo "node_modules/" > .gitignore
```

O `.gitignore` evitará que os módulos Node.js sejam rastreados pelo Git.

### 2. Adicionar Dependências

Instale as dependências necessárias. No seu caso, você precisará do TypeScript e da `class-validator` como uma dependência de pares:

```bash
npm install --save-dev typescript
npm install --save-dev @types/node
npm install class-validator
```

Configurar TypeScript adicionando um `tsconfig.json`:

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

### 3. Estruturar o Projeto

Crie uma pasta `src` onde você colocará seu código TypeScript:

```bash
mkdir src
```

Dentro de `src`, crie os arquivos para os decoradores como discutido anteriormente.

### 4. Escrever o Código

Popule os arquivos TypeScript com os códigos dos decoradores, como os exemplos de `MaxLengthCustom` e `LengthRange` que fornecemos antes.

### 5. Preparar para a Publicação

No seu `package.json`, adicione ou ajuste os seguintes campos para se preparar para a publicação:

```json
{
  "name": "my-custom-validators",
  "version": "1.0.0",
  "description": "A custom validation library for Node.js using class-validator.",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc"
  },
  "files": [
    "dist/**/*"
  ],
  "peerDependencies": {
    "class-validator": "^0.13.1"
  },
  "devDependencies": {
    "typescript": "^4.0.0",
    "@types/node": "^14.0.0"
  }
}
```

### 6. Compilar o Projeto

Compile o projeto para garantir que tudo está configurado corretamente:

```bash
npm run build
```

### 7. Versionamento e Repositório Git

Adicione todos os arquivos ao Git e faça o commit inicial:

```bash
git add .
git commit -m "Initial commit of my custom validators library"
```

**Adicionar ao GitHub:**
1. Crie um novo repositório no GitHub.
2. Siga as instruções do GitHub para adicionar o repositório remoto e fazer o push do seu projeto local para o GitHub.

### 8. Publicar no npm

Antes de publicar no npm, certifique-se de estar logado:

```bash
npm login
```

Então, publique:

```bash
npm publish --access public
```

### 9. Documentação

Escreva um bom `README.md` explicando como instalar e usar sua biblioteca, incluindo exemplos de código.

### 10. Manutenção

Após a publicação, continue a manter e atualizar sua biblioteca conforme necessário, atendendo aos issues e contribuições da comunidade.

Seguindo esses passos, você terá criado e publicado sua própria biblioteca de validadores no npm, além de ter configurado um repositório público no GitHub para colaboração e distribuição.