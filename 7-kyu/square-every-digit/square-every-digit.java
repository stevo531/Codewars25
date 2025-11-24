public class SquareDigit {
​
  public int squareDigits(int n) {
//    return 0; // TODO Implement me
    String[] nString = Integer.toString(n).split("");
    String finalStr = "";
    int finalNum = 0;
    for(String i : nString) {
        int square = Integer.parseInt((i));
      square*=Integer.parseInt(i);
      finalStr+=Integer.toString(square);
    }
    finalNum+=Integer.parseInt(finalStr);
    return finalNum;
  }
}