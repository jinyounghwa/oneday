package lesson01;

public class Code10 {

	public static void main(String[] args) {

		for(int n=2; n <=100000; n++) {

			//2,3,..., sqrt(n)�����°��� �׻� ������ �����ϱ⿡ �� ��ΰ� ��Ʈ n ���� Ŭ �� ����. 

			boolean isPrime = true;
			for(int i=2; i*i<=n && isPrime; i++) {
				// i�� ��Ʈ n���� �۴ٴ� ���� �ᱹ i�� ������ n���� �۴�
				if( n % i == 0) 
					isPrime = false;
			}
			if(isPrime)
				System.out.println(n);	
		}
	}

}
