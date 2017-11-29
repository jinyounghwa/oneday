package lesson01;

import java.util.Scanner;

public class code02 {

	public static void main(String[] args) {

		int number = 123;

		Scanner kb = new Scanner(System.in);

		System.out.print("please enter an integer:");

		int input = kb.nextInt();

		if(input == number) {
			System.out.println("Numbers match!:-)");
		}else {
			System.out.println("Numbers do not match:-)");
		}
		kb.close();
	}

}
