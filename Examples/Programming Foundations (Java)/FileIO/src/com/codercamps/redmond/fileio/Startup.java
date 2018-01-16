package com.codercamps.redmond.fileio;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;

public class Startup {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		FileReader inputStream;
		FileWriter outputStream;
		StringBuilder fileContentsRead = new StringBuilder();
		BufferedReader reader;
		
		try {
			outputStream = new FileWriter("story.txt");
			outputStream.write("abcdefghijklmnopqrstuvwxyz zyxwvutsrqponmlkjihgfedcba");
			outputStream.close();
			
			
			inputStream = new FileReader("story.txt");
			reader = new BufferedReader(inputStream);
			String line;
			while ((line = reader.readLine()) != null) {
				fileContentsRead.append(line);
			}
			inputStream.close();
		}
		catch (Exception e) {
			System.out.println(e.getMessage());
		}
		finally {
			System.out.println(fileContentsRead);
		}
		
	}

}
