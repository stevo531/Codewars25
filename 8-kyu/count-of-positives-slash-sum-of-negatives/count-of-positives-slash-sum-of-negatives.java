public class Kata
{
    public static int[] countPositivesSumNegatives(int[] input)
    {
         if(input == null || input.length == 0){
        return new int[0]; //return an array with count of positives and sum of negatives
    }
      int[] sumAndCount = new int[2];
      for(int i=0; i<input.length; i++){
        if(input[i] >0){
          sumAndCount[0]++;
        }
        else if(input[i] <0) {
          sumAndCount[1] += input[i];   
        }
      }
   
      return sumAndCount;
    }
}