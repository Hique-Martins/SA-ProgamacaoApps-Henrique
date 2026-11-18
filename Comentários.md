
# Devolutiva formativa — Atividade 01 da SA

**Estudante:** Henrique Gabriel Martins  
**Turma:** Rio Negrinho — Manhã  
**Unidade Curricular:** Programação de Aplicativos  
**Projeto:** Fábrica de Chocolate  
**Código analisado:** `codigo/app.py`  
**Referência:** Situação de Aprendizagem nº 1 — *Da Ideia ao Código*

## O que você já conseguiu desenvolver

Henrique, você iniciou um sistema para uma fábrica de chocolates. Seu código demonstra os primeiros passos na criação de menus, funções e estruturas condicionais em Python.

Pontos positivos identificados:

- Criou uma função `menu()` para apresentar as opções e receber a escolha do usuário.
- Utilizou `input()` para trabalhar com informações digitadas.
- Aplicou `if` e `elif` para identificar a opção escolhida.
- Criou uma função inicial `cadastrar_producao()` para solicitar o tipo e a quantidade de chocolates produzidos.
- Utilizou `return` na função do menu para devolver a opção selecionada.
- Escolheu um contexto relacionado à Situação de Aprendizagem.

## O que precisa ser corrigido

### 1. Chamar a função de cadastro

Você criou a função `cadastrar_producao()`, mas a opção 1 do menu apenas apresenta a mensagem de que o cadastro foi escolhido.

**Como melhorar:** chamar `cadastrar_producao()` quando o usuário selecionar a opção 1. Isso permitirá utilizar a funcionalidade que já começou a desenvolver.

### 2. Implementar o armazenamento das produções

Atualmente, a função de cadastro solicita informações e as apresenta na tela, mas não as armazena. Além disso, a opção de listar produções ainda não apresenta registros.

**Como melhorar:** criar uma lista para guardar os dados. Cada produção pode ser representada por um dicionário com `tipo` e `quantidade`.

### 3. Manter o menu funcionando até o usuário sair

O programa executa o menu apenas uma vez. Depois de selecionar uma opção, ele encerra.

**Como melhorar:** utilizar um `while True` para repetir a apresentação do menu até a opção de saída ser escolhida.

### 4. Validar a quantidade produzida

A quantidade recebida em `cadastrar_producao()` é armazenada apenas como texto e não passa por validação.

**Como melhorar:** converter a quantidade para inteiro, verificar se é maior que zero e tratar entradas inválidas com `try/except ValueError`.

## Oportunidades de melhoria

### 5. Criar uma função de listagem

Depois de armazenar as produções, será possível implementar `listar_producoes()`.

**Como melhorar:** percorrer os registros com `for`, exibindo o tipo e a quantidade. Se não houver registros, apresentar uma mensagem adequada.

### 6. Organizar o fluxo principal

As condições do menu estão diretamente no final do arquivo.

**Como melhorar:** criar uma função `principal()` que controle a repetição do menu e chame as demais funções. Utilizar `if __name__ == "__main__":` para iniciar o programa.

### 7. Documentar as funcionalidades

O README apresenta a identificação do projeto, mas ainda não explica seu funcionamento.

**Como melhorar:** descrever o objetivo da fábrica, as operações disponíveis e a forma de executar o código. Adicionar comentários simples às regras que precisem de explicação.

## Testes recomendados

1. Abrir o menu e escolher cadastrar produção.
2. Informar um tipo válido de chocolate.
3. Tentar digitar letras na quantidade.
4. Tentar cadastrar quantidade zero ou negativa.
5. Cadastrar duas produções diferentes.
6. Listar os registros armazenados.
7. Utilizar uma opção de menu inexistente.
8. Encerrar o programa pela opção de saída.

## Prioridades para a próxima versão

1. **Fazer a opção 1 chamar a função de cadastro.**
2. **Criar uma lista para armazenar as produções.**
3. **Implementar a listagem dos registros.**
4. **Utilizar um laço de repetição para manter o menu ativo.**
5. **Validar as quantidades e testar o programa completo.**

## Mensagem final

Henrique, você já começou a utilizar conceitos fundamentais, como **funções, entrada de dados, condições e retorno de valores**. Esses conhecimentos são a base para desenvolver programas maiores.

Agora, seu principal objetivo deve ser **concluir uma funcionalidade completa**, desde a entrada das informações até seu armazenamento e consulta. Avance aos poucos, executando e testando o código a cada alteração. Assim, você poderá compreender melhor como as diferentes partes do sistema trabalham juntas.
