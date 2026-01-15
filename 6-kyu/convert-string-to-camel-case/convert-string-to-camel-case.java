import java.lang.StringBuilder;
class Solution{
​
  static String toCamelCase(String s){
    String[] words = s.split("[\\W_]+");
    if(words.length == 0) return "";
    var stringBuilder = new StringBuilder();
    for(int i=0; i<words.length; i++){
      String word = words[i];
      if(word.isEmpty()) {
        continue;
      }
      if(i==0) {
        stringBuilder.append(word);
      }
      else {
        stringBuilder.append(Character.toUpperCase(word.charAt(0)));
        stringBuilder.append(word.substring(1).toLowerCase());
      }
    }
    return stringBuilder.toString();
    
  }
}