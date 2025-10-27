import java.util.ArrayList;
import java.util.Collections;
public class Kata {
    public static int findShort(String s) {
      String[] separate = s.split("\\s+");
      ArrayList<Integer> count = new ArrayList<Integer>();
      for(String word : separate){
        count.add(word.length());
      }
        return Collections.min(count);
    }
}