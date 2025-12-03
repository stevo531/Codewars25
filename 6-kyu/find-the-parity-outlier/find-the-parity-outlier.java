import java.util.ArrayList;
public class FindOutlier {
  static int find(int[] integers) {
    int even = 0;
    int odds = 0;
    for(int n=0; n<integers.length; n++) {
if(integers[n] % 2 == 0) even++;
    else{ odds++; }
      }
      boolean comparison = even > odds;
      
      for(int i = 0; i<integers.length; i++) {
        if(comparison && integers[i] % 2 ==0) i++;
        if(!comparison && integers[i] % 2 !=0) i++;
        if(!comparison && integers[i]%2==0) return integers[i];
        if(comparison && integers[i]%2!=0) return integers[i];
      
    
  }
    return 0;
}
public static void main(String[] args) {
    int[] ints = {132,22,12,9,24,12,2};
    System.out.println(find(ints));
}
  }