import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class arrayManipulation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input array size: ");
        int size = scanner.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < arr.length; i++) {
            System.out.print("Input element for index-"+i+": ");
            arr[i] = scanner.nextInt();
        }
        System.out.print("Target sum: ");
        int targetSum = scanner.nextInt();
        List<int[]> pairs = findPairsWithSum(arr, targetSum);
        System.out.println("Pairs that sum up to the target:");
        System.out.print("[");
        for (int i = 0; i < pairs.size(); i++) {
            System.out.print(Arrays.toString(pairs.get(i)));
            if (i < pairs.size() - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
        scanner.close();
    }

    public static List<int[]> findPairsWithSum(int[] arr, int targetSum) {
        List<int[]> pairs = new ArrayList<>();
        Map<Integer, Boolean> numMap = new HashMap<>();

        for (int num : arr) {
            int complement = targetSum - num;
            if (numMap.containsKey(complement)) {
                pairs.add(new int[] {complement, num});
            }
            numMap.put(num, true);
        }

        return pairs;
    }
}