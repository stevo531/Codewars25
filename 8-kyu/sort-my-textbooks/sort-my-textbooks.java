import java.util.ArrayList;
import java.util.Collections;
​
class sorter {
​
  public static ArrayList<String> sort(ArrayList<String> textbooks) {
    textbooks = textbooks.toLowerCase();
   Collections.sort(textbooks);
    return textbooks;
  }
}