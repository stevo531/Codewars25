public class Vowels {
​
  public static int getCount(String str) {
 int count = 0;
    String lowerCaseStr = str.toLowerCase();
    for(int i=0; i<lowerCaseStr.length(); i++){
    char character = lowerCaseStr.charAt(i);
      if(character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u'){
        count++;
      }
    }
    return count;
}
}