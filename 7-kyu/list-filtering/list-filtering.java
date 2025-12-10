import java.util.List;
import java.util.ArrayList;
​
public class Kata {
  
  public static List<Object> filterList(final List<Object> list) {
    // Return the List with the Strings filtered out
    List<Object> result = new ArrayList<>();
    for(Object val : list) {
   if(val instanceof Integer) {
     result.add(val);
   }
}
    return result;
    }
  }
​