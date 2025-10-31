 
public class Kata {
    public static String createPhoneNumber(int[] numbers) {
        String contact = "";
        for(int i=0 ; i<numbers.length; i++){
            if(i == 0) contact+= "(";
            if (i==3){ 
                contact+= ")";
                contact+= " ";
            }
            contact+=numbers[i];
           if(i==5) contact += "-"; 
          }
        return contact;
    }
}