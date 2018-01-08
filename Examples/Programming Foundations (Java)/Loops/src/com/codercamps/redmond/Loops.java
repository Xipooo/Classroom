package com.codercamps.redmond;

public class Loops {

	public static void main(String[] args) {
		// While loop
		boolean keepLooping = true;
		String userInput;
		
		while (keepLooping) {
			userInput = StudentHelper.ReadInputString();

			if (userInput.equals("quit")) {
				keepLooping = false;
			} else {
				System.out.println("Echo: " + userInput);
			}
		}
		
		//Do Loop
		do {
			System.out.println("Computer: Hi");
			userInput = StudentHelper.ReadInputString();
			System.out.println("You: " + userInput);
			
		} while(userInput.equals("Hi"));
		
		//For loop
		for (int count = 10; count > 0; count--) {
			System.out.println(count);
		}
	}
}
