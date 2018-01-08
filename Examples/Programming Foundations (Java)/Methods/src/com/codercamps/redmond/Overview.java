package com.codercamps.redmond;

public class Overview {

	public static void main(String[] args) {
		HelloWorldPrinter helloWorldPrinter = new HelloWorldPrinter("Hello world");
		
		helloWorldPrinter.printHelloWorld();

		Maths maths = new Maths();
		int sum = maths.add(1, 2);
		
		System.out.println(sum);
	}
}
