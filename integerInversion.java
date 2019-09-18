/**
 * @param (x): 传递进入reverse函数的目标数字
 * @return: 返回颠倒之后的数字
 */
public class integerInversion {
    public static void main(String args[]){
        long rev = reverse(123);
        System.out.println(rev);
    }

    static public int reverse(int x) {
        int ans = 0;
        while (x != 0) {
            int pop = x % 10;   // 将数字从最后一位一个一个的取出再插入ans变量，最后在int类型下x将被取完，(int)x=0;
            if (ans > Integer.MAX_VALUE / 10 || (ans == Integer.MAX_VALUE / 10 && pop > 7))
                return 0;
            if (ans < Integer.MIN_VALUE / 10 || (ans == Integer.MIN_VALUE / 10 && pop < -8))
                return 0;
            ans = ans * 10 + pop;
            x /= 10;        //将取出的数字退格
        }
        return ans;
    }
}
