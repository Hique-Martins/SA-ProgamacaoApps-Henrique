
# Devolutiva formativa — Atividade 02 da SA

**Estudante:** Henrique Gabriel Martins  
**Turma:** Rio Negrinho — Manhã  
**Unidade Curricular:** Programação de Aplicativos  
**Projeto:** ChocoGestão — Fábrica de Chocolate  
**Atividade:** Interface funcional  
**Arquivos analisados:** `codigo/app.py`, `interface/index.html`, `interface/script.js` e `interface/style.css`

## O que você já conseguiu desenvolver

Henrique, seu projeto apresentou uma evolução importante em relação à atividade anterior.

Você criou uma interface web com cadastro, listagem e exclusão de produções, utilizando HTML, CSS e JavaScript.

Pontos positivos identificados:

- Organizou o HTML em seções para menu, cadastro, listagem e encerramento.
- Criou uma navegação entre telas utilizando HTML e CSS.
- Utilizou JavaScript para processar o formulário.
- Implementou funções como `salvarProducoes()` e `mostrarProducoes()`.
- Utilizou `localStorage` para manter os registros no navegador.
- Aplicou arrays e objetos para organizar as produções.
- Implementou validação de nomes e quantidades.
- Criou verificação para evitar o cadastro duplicado de tipos de chocolate.
- Implementou exclusão de registros mediante confirmação.
- Separou HTML, CSS e JavaScript em arquivos próprios.

## O que foi ajustado desde a última devolutiva

### 1. Chamada da função de cadastro — ATENDIDO

Na atividade anterior, a função de cadastro existia, mas não era chamada pelo menu Python.

**Correção identificada:** a versão atual chama `cadastrar_producao()` quando a opção 1 é escolhida.

### 2. Armazenamento dos registros — ATENDIDO

Anteriormente, as produções não eram armazenadas.

**Correção identificada:** o código Python utiliza uma lista, enquanto a interface JavaScript utiliza armazenamento local.

### 3. Listagem das produções — ATENDIDO

A versão atual apresenta uma função para listar as produções em Python.

Na interface web, o JavaScript também permite visualizar os registros cadastrados.

### 4. Repetição do menu — ATENDIDO

O Python agora utiliza `while True`, permitindo repetir as operações até a escolha da saída.

### 5. Validação da quantidade — PARCIALMENTE ATENDIDO

A interface JavaScript valida quantidades inteiras e positivas.

Entretanto, o código Python ainda recebe a quantidade por `input()` e a armazena como texto, sem aplicar a mesma regra.

**Como melhorar:** adicionar validação equivalente à versão Python.

## O que precisa ser corrigido

### 6. Evitar diferenças entre as versões

O projeto possui uma versão Python e uma versão web com regras de validação diferentes.

**Como melhorar:** documentar o funcionamento de cada versão e manter regras equivalentes para os cadastros.

### 7. Organizar o fluxo principal do Python

O laço principal funciona, mas ainda está diretamente no arquivo.

**Como melhorar:** criar uma função `principal()` e utilizar `if __name__ == "__main__":` para iniciar a aplicação.

### 8. Melhorar a documentação

**Como melhorar:** explicar no README como executar o Python e como abrir a interface web. Informar também que os dados da interface são armazenados no navegador.

## Oportunidades de melhoria

### 9. Melhorar a persistência dos dados

O uso de `localStorage` permite manter registros entre recarregamentos da página.

**Como melhorar:** incluir uma opção de limpar os registros e explicar que os dados permanecem apenas naquele navegador.

### 10. Ampliar os testes de validação

**Como melhorar:** testar nomes repetidos com letras maiúsculas e minúsculas, quantidades fracionadas, valores negativos e campos vazios.

### 11. Melhorar a documentação das funções

Os comentários existentes ajudam a identificar as funcionalidades.

**Como melhorar:** utilizar comentários mais explicativos nas validações e documentar o que cada função recebe e produz.

## Testes recomendados

1. Cadastrar uma produção válida.
2. Tentar cadastrar quantidade zero.
3. Informar quantidade negativa ou fracionada.
4. Tentar cadastrar o mesmo chocolate duas vezes.
5. Cadastrar dois tipos diferentes.
6. Listar as produções.
7. Excluir um registro e cancelar outra exclusão.
8. Atualizar a página e verificar os dados.
9. Repetir os testes na versão Python.
10. Encerrar o programa Python pela opção correta.

## Prioridades para a próxima versão

1. **Manter as validações consistentes nas duas versões.**
2. **Criar uma função principal no Python.**
3. **Documentar a utilização do armazenamento local.**
4. **Ampliar os testes das entradas inválidas.**
5. **Explicar as funcionalidades no README.**

## Mensagem final

Henrique, você corrigiu vários pontos apresentados na avaliação anterior.

O projeto evoluiu de um menu inicial incompleto para uma solução que permite cadastrar, consultar e excluir produções.

Continue aplicando funções, validações e testes, garantindo que o comportamento esperado seja mantido em todas as versões da aplicação.
