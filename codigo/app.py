
import os

producoes = []

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
    os.system("cls")

    print("=== CADASTRO DE PRODUÇÃO ===")

    tipo = input("Qual o tipo de chocolate? ")
    quantidade = input("Quantos chocolates foram produzidos? ")

    producoes.append([tipo, quantidade])

    print("\nProdução cadastrada com sucesso!")
    input("\nPressione ENTER para voltar ao menu...")


def listar_producoes():
    os.system("cls")

    print("==============================")
    print("    PRODUÇÕES CADASTRADAS")
    print("==============================")

    if len(producoes) == 0:
        print("Nenhuma produção cadastrada.")

    for producao in producoes:
        print("Chocolate:", producao[0])
        print("Quantidade:", producao[1])
        print("----------------------")

    input("\nPressione ENTER para voltar ao menu...")


while True:
    os.system("cls")
    escolha = menu()

    if escolha == "1":
        cadastrar_producao()

    elif escolha == "2":
        listar_producoes()

    elif escolha == "3":
        os.system("cls")
        print("================================")
        print("                                ")
        print("       SISTEMA ENCERRADO!       ")
        print("                                ")
        print("================================")
        break

    else:
        print("Opção inválida!")
        input("\nPressione ENTER para continuar...")

