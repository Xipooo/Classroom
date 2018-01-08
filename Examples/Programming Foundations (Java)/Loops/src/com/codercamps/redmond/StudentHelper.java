package com.codercamps.redmond;
import java.util.Scanner;

public class StudentHelper {
	@SuppressWarnings("resource")
	public static String ReadInputString() {
		Scanner scan = new Scanner(System.in);
		String scanned = scan.nextLine();
		return scanned;
	}
}
