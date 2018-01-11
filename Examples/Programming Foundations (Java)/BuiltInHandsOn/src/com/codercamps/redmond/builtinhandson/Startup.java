package com.codercamps.redmond.builtinhandson;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Startup {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String[] songs = {"Rock With You", "Smooth Criminal", "Wanna Be Startin' Something", "Thriller", "Beat It"};
		StringBuilder sb = new StringBuilder();
		StringBuilder songsSB = new StringBuilder();
		
		for(int i = 0; i < songs.length;i++) {
			sb.append(songs[i]);
			sb.append(", ");
		}
		
		FileWriter outputStream;
		FileReader inputStream;
		BufferedReader reader;
		
		try {
			outputStream = new FileWriter("songs.txt");
			outputStream.write(sb.toString());
			outputStream.close();
			
			inputStream = new FileReader("songs.txt");
			reader = new BufferedReader(inputStream);
			String line;
			while((line = reader.readLine()) != null) {
				songsSB.append(line);
			}
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			System.out.println("Error when writing songs.txt");
			e.printStackTrace();
		}
		finally {
			System.out.println(songsSB.toString());
		}
	}

}
