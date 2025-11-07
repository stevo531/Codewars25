public class FileNameExtractor {
    public static String extractFileName(String dirtyFileName) {
    int start = dirtyFileName.indexOf("_");
      int end = dirtyFileName.lastIndexOf(".");
      if(start>0 && start < end) return dirtyFileName.substring(start+1, end);
      return "No File_Name";
}
  
}