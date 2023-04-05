import java.util.LinkedList;

class FindMidInLL {
    public int findMid(LinkedList<Integer> ll) {
        if (ll == null || ll.size() == 0) {
            return -1; // return -1 if the list is empty
        }

        int n = ll.size();
        int midIndex = (n - 1) / 2;
        return ll.get(midIndex);
    }
    
    public static void main(String[] args) {
        LinkedList<Integer> ll = new LinkedList<>();
        ll.addFirst(28);
        ll.addFirst(81);
        ll.addFirst(69);
        ll.addFirst(12);
        ll.addFirst(122);

        FindMidInLL f = new FindMidInLL();
        int mid = f.findMid(ll);
        System.out.println(mid); // prints 81
    }
}
