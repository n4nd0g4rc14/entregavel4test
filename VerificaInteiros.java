import java.util.ArrayList;
import java.util.Scanner;

public class VerificaInteiros {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            ArrayList<Object> conjunto = new ArrayList<Object>();
            System.out.println("Digite o tamanho do conjunto: ");
            int n = sc.nextInt();
            for (int i = 0; i < n; i++) {
                System.out.println("Digite um valor: ");
                if (sc.hasNextInt()) {
                    conjunto.add(sc.nextInt());
                } else {
                    conjunto.add(sc.next());
                }
            }
            int count = 0;
            for (Object obj : conjunto) {
                if (obj instanceof Integer) {
                    count++;
                }
            }
            System.out.println("O conjunto possui " + count + " valores inteiros.");
        }
    }
}
