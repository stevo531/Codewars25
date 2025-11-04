import java.util.ArrayList;
public class Kata {
​
  public static int[] arrayDiff(int[] a, int[] b) {
 if(a.length == 0) return new int[]{};
    if(b.length == 0) return a;
    ArrayList<Integer> listB = new ArrayList<>();
    for(int x : b) {
   listB.add(x);
        }
    ArrayList<Integer> listA = new ArrayList<>();
    for(int y: a) {
      if(!listB.contains(y)) listA.add(y);
    }
    int[] arr = new int[listA.size()];
    for(int i=0; i<listA.size(); i++) {
      arr[i] = listA.get(i);
    }
    return arr;
        }
     }
​
​