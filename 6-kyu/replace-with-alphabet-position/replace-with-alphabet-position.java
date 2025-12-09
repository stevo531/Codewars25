class Kata {
    static String alphabetPosition(String text) {
      // Implement me! :)
      //String[] textArr = text.split("");
      StringBuilder result = new StringBuilder(); 
      for(char i : text.toLowerCase().toCharArray()){
     //  int index = text.indexOf(i);
        if(i >= 'a' && i<= 'z'){
          int position = i - 'a' + 1;
          result.append(position).append(" ");
        }
      }
      return result.toString().trim();
    }
}
​