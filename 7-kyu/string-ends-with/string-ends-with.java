public class Kata {
  public static boolean solution(String str, String ending) {
    String[] splitString = str.split(ending);
    if(splitString){
    return true;
  }
    else {
      return false;
    }
    }
}