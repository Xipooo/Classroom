package com.codercamps.redmond;

public class Startup {

	public static void main(String[] args) {
		String basicString = "Hi, I'm a string";
		System.out.println(basicString);

		String fancyString = new String("Hi, I'm also a string.");
		System.out.println(fancyString);
		
		String uppercaseString = basicString.toUpperCase();
		System.out.println(uppercaseString);
		
		String string1 = "";
		System.out.println(string1.isEmpty());
		
		String string2 = "Text!";
		System.out.println(string2.isEmpty());
		
		String quote = "The quick brown fox jumps over the lazy dog.";
		quote = quote.replace('o', '?');
		System.out.println(quote);
	}

}
