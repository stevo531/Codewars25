 
import java.util.ArrayList;
import java.util.Collections;
​
class sorter {
​
  public static ArrayList<String> sort(ArrayList<String> textbooks) {
for(int i=0; i<textbooks.size(); i++){
  textbooks.set(i, textbooks.get(i).toLowerCase();
}
   Collections.sort(textbooks);
    return textbooks;
  }
}