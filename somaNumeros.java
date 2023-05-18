import java.util.Scanner;

public class somaNumeros {
    public static int somarNumeros(int... numeros) { 
        int soma = 0;
        for (int numero : numeros) {
            soma += numero;
        }
        return soma;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Quantos números você deseja somar? ");
        int quantidade = scanner.nextInt();

        int[] numeros = new int[quantidade];
        for (int i = 0; i < quantidade; i++) {
            System.out.print("Digite o número " + (i + 1) + ": ");
            numeros[i] = scanner.nextInt();
        }

        int resultado = somarNumeros(numeros);
        System.out.println("A soma dos " + quantidade + " números é igual a: " + resultado);

        scanner.close();
    }
}
