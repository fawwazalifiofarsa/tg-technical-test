import java.util.Arrays;
import java.util.Scanner;

public class anagramDetection {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("First string: ");
        String str1 = scanner.nextLine();
        System.out.print("Second string: ");
        String str2 = scanner.nextLine();
        boolean result = areAnagrams(str1, str2);
        System.out.println("The strings are anagrams: " + result);
        scanner.close();
    }

    public static boolean areAnagrams(String str1, String str2) {
        str1 = str1.replaceAll("\\s", "").toLowerCase();
        str2 = str2.replaceAll("\\s", "").toLowerCase();

        if (str1.length() != str2.length()) {
            return false;
        }

        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        return Arrays.equals(arr1, arr2);
    }
}
