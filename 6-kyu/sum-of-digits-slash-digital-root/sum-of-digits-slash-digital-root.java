public class DRoot {
    public static int digital_root(int n) {
        while (n >= 10) {
            String[] digits = String.valueOf(n).split("");
            int sum = 0;
            for (String digit : digits) {
                sum += Integer.parseInt(digit);
            }
            n = sum;
        }
        return n;
    }
}