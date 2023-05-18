import java.util.Scanner;

public class fibonacci {
    public static int fibo(int n) {
        if (n == 0 || n == 1) {
            return n;
        } else {
            return fibo(n - 1) + fibo(n - 2);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número inteiro: ");
        int n = scanner.nextInt();

        int fibonacci = fibo(n);
        System.out.println("O número de Fibonacci correspondente é: " + fibonacci);

        scanner.close();
    }
}
