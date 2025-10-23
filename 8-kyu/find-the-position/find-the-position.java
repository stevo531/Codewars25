import java.util.Arrays;
public class Kata
{
  public static String position(char alphabet)
  {
   ArrayList<String> alpha = new ArrayList<>(Arrays.asList("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"));
  for(int i=0; i<alpha.size(); i++){
    if(alpha.get(i).equals(alphabet)){
      return "Position of alphabet: "+ i+1;
    }
​
      }
    return "invalid";
  }
}