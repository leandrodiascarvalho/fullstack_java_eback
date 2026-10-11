package fundamentos;
import java.util.Scanner;

public class CadastroCliente {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Bem-vindo ao cadastro de clientes");

        System.out.print("Digite seu nome: ");
        String nomeCompleto = scanner.nextLine();

        System.out.print("Digite seu CPF: ");
        String cpf = scanner.nextLine();

        System.out.print("Digite sua idade: ");
        int idade = scanner.nextInt();

        System.out.print("Digite sua altura: ");
        double altura = scanner.nextDouble();

        System.out.print("Digite seu peso: ");
        double peso = scanner.nextDouble();

        String[] estadosCivis = {
                "Solteiro(a)",
                "Divorciado(a)",
                "Separado(a)",
                "Viúvo(a)",
                "Separado(a) judicialmente"
        };

        int opcaoEstadoCivil;

        do {
            for (int i = 0; i < estadosCivis.length; i++) {
                System.out.println((i + 1) + " - " + estadosCivis[i]);
            }
            System.out.print("Escolha uma opção: ");
            opcaoEstadoCivil = scanner.nextInt();

            if (opcaoEstadoCivil < 1 || opcaoEstadoCivil > 5) {
                System.out.println("Opção inválida. Tente novamente.");
            }
        } while (opcaoEstadoCivil < 1 || opcaoEstadoCivil > 5);


        String estadoCivil = estadosCivis[opcaoEstadoCivil - 1];

        System.out.println("\n" + nomeCompleto + ", seu cadastro foi realizado com sucesso!");

        System.out.println("\n===== COMPROVANTE DO CADASTRO =====");
        System.out.println("Nome: " + nomeCompleto);
        System.out.println("CPF: " + cpf);
        System.out.println("Idade: " + idade);
        System.out.println("Altura: " + altura);
        System.out.println("Peso: " + peso);
        System.out.println("Estado civil: " + estadoCivil);
    }
    }