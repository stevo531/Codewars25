public class Kata {
  public static void _if(Boolean bool, Runnable func1, Runnable func2) {
    // ...
    public static func1(){
      System.out.println("true");
    }
    public static  func2() {
      System.out.println("false");
    
    }
    if(bool) {
     System.out.println(func1);
    }
    System.out.println(func2);
  }
}