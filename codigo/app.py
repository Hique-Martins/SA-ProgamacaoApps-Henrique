def menu():
    print("================================")
    print("      FABRICA DE CHOCOLATE")
    print("================================")
    print("1 - Cadastrar produção")
    print("2 - Listar produções")
    print("3 - Sair")

    opcao = input("Escolha uma opção: ")
    
    return opcao

def cadastrar_producao():
    print("=== CADASTRO DE PRODUÇÃO ===")

    tipo = input("Qual o tipo de chocolate? ")
    quantidade = input("Quantos chocolates foram produzidos? ")

    print("Chocolate:", tipo)
    print("Quantidade:", quantidade)

escolha = menu()

print("Você escolheu:", escolha)

if escolha == "1":
    print("Você escolheu cadastrar produção")

elif escolha == "2":
    print("Você escolheu listar produções")

elif escolha == "3":
    print("Encerrando o sistema")
