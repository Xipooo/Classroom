package com.codercamps.redmond.classesdemo;
import java.util.Scanner;

public class UserInput {
	@SuppressWarnings("resource")
	public String ReadInputString() {
		Scanner scan = new Scanner(System.in);
		
		return scan.nextLine();
	}
}
