public class Troll {
    public static String disemvowel(String str) {
        // Code away...
  String[] str2 = str.split("");
      String noVowels = "";
      for(int i=0; i<str2.length; i++) {
        if(!str2[i].toLowerCase().equals("a") && !str2[i].toLowerCase().equals("e") && !str2[i].toLowerCase().equals("i") && !str2[i].toLowerCase().equals("o") && !str2[i].toLowerCase().equals("u")){
          noVowels+=str2[i];
        }
      }
      return noVowels;
    }
}