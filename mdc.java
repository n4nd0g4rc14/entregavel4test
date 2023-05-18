import java.util.Scanner;

public class mdc {
    public static int calcularMDC(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return calcularMDC(b, a % b);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int a = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        int b = scanner.nextInt();

        int mdc = calcularMDC(a, b);
        System.out.println("O máximo divisor comum entre " + a + " e " + b + " é: " + mdc);

        scanner.close();
    }
}
