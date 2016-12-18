/*Same as Q1 & Q2

Java solution*/

O(logN)complexity:
public class Solution extends GuessGame {
    public int guessNumber(int n) {
        int start = 1;
        int end = n;
        int mid;
        while(start <= end) {
            mid = start + (end - start)/2;
            if(guess(mid) == 0) return mid;
            if(guess(mid) == 1) start = mid + 1;
            else end = mid - 1;
        }
        return -1;
    }
}