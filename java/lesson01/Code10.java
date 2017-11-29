package lesson01;

public class Code10 {

	public static void main(String[] args) {

		for(int n=2; n <=100000; n++) {

			//2,3,..., sqrt(n)약수라는것은 항상 쌍으로 존재하기에 둘 모두가 루트 n 보다 클 수 없다. 

			boolean isPrime = true;
			for(int i=2; i*i<=n && isPrime; i++) {
				// i가 루트 n보다 작다는 것은 결국 i의 제곱이 n보다 작다
				if( n % i == 0) 
					isPrime = false;
			}
			if(isPrime)
				System.out.println(n);	
		}
	}

}
