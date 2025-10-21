 
public class Sum {
​
  public static int arrayPlusArray(int[] arr1, int[] arr2) {
     int total = 0;
for(int i=0; i<arr1.length; i++){
  total +=arr1[i];
}
    for(int i=0; i<arr2.length; i++){
      total +=arr2[i];
    }
    return total;
  }
​
}