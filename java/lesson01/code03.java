package lesson01;

import java.util.Scanner;

public class code03 {

	public static void main(String[] args) {
		String str = "Hello";
		String input = null;

		Scanner kb = new Scanner(System.in);
		
		System.out.print("please type a string:");
		input = kb.next();
		if(str.equals(input)) { 
			System.out.println("String match:-");
		}
		else {
			System.out.println("String do not match: -(");
		}
		kb.close();
	}
}
