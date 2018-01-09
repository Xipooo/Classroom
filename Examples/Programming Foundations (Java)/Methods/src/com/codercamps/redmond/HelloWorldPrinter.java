package com.codercamps.redmond;

public class HelloWorldPrinter {
	
	private String _textToPrint;
	
	public void printHelloWorld() {
		System.out.println(_textToPrint);
	}
	public HelloWorldPrinter(String textToPrint) {
		_textToPrint = textToPrint;
	}
}
