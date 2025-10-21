import java.util.ArrayList;
public class Kata
{
  public static String position(char alphabet)
  {
    
   // String[] letters = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
    ArrayList<String> finalLetters = {"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"};
 for(int i=0; i<finalLetters.length; i++){
   if(finalLetters.get(alphabet)){
     return "Position of alphabet: "+ finalLetters.get(alphabet);
   }
 }
  }
}