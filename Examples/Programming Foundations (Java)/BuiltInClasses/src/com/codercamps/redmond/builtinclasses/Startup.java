package com.codercamps.redmond.builtinclasses;

import java.util.Hashtable;

public class Startup {

	public static void main(String[] args) {

		Hashtable<String, String> englishDictionary = new Hashtable<String, String>();
		englishDictionary.put("persist", "to go on resolutly or stubbornly in spite of opposition, importunity, or warning.");
		
		int result = 0;
		try {
			result = 1 / 0;
		} catch (Exception e) {
			System.out.println("There was an error");
			result = -1;
		}
		finally {
			//
		}

		String[] cities = { "Tokyo", "Dehli", "Shanghai", "Mexico City", "Sao Paulo" };
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < cities.length; i++) {
			sb.append(cities[i]);
			sb.append(", ");
		}
		System.out.println(sb);
		

	}

}
