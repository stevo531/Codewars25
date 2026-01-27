import java.util.List;
​
// TODO: complete this object/class
​
import java.util.Collections;
public class PaginationHelper<I> {
  private List<I> collection;
  private int itemsPerPage;
 
  public PaginationHelper(List<I> collection, int itemsPerPage) {
  this.collection = collection;
    this.itemsPerPage = itemsPerPage;                        
  }
  
  public int itemCount() {
    return collection.size();
  }
 
  public int pageCount() {
    return(int) Math.ceil((double) itemCount() / itemsPerPage);
  }
​
  public int pageItemCount(int pageIndex) {
    if(pageIndex < 0 ||pageIndex>=pageCount()) return -1;
    int startIndex = pageIndex * itemsPerPage;
    int endIndex= Math.min(startIndex + itemsPerPage, itemCount());
    return endIndex - startIndex;
      }
  
  public int pageIndex(int itemIndex) {
    if(itemIndex < 0 || itemIndex >= itemCount()) return -1;
    return itemIndex / itemsPerPage;
  }
}