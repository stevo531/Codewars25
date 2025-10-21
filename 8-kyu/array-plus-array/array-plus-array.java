public class Sum {
public static int total = 0;
  public static int arrayPlusArray(int[] arr1, int[] arr2) {
for(int i=0; i<arr1.length; i++){
  total +=arr1[i];
}
    for(int i=0; i<arr2.length; i++){
      total +=arr2[i];
    }
    return total;
  }
arrayPlusArray(new int[]{1,2,3}, new int[]{4,5,6}));
}