# Testes E2E - MyFarm

Projeto de testes automatizados E2E do MyFarm com Cypress

## Configurar projeto

```bash
# instalar dependencias
npm install
```

## Executar testes - CLI

```bash
# Allure reporter (local)
npm run test:allure

# Junit reporter (azure)
npm run test:azure
```

## Abrir interface do Cypress

```bash
# cypress runner
npm run cypress:open
```

## Abrir interface do Allure

```bash
# após executar npm run test:allure
npm run allure:open
```

## Apagar reports

```bash
# apagar arquivos de reports nos diretorios
delete:reports
```
