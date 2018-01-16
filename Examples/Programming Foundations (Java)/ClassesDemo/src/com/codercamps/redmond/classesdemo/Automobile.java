package com.codercamps.redmond.classesdemo;

public class Automobile {
	private int milesPerHour = 0;
	
	public void Accellerate(int amountToAccellerate) {
		milesPerHour = milesPerHour + amountToAccellerate; 
		if (milesPerHour > 100) {
			milesPerHour = 100;
		}
	}
	public void Accellerate(String amountToAccellerate) {
		milesPerHour = milesPerHour + Integer.parseInt(amountToAccellerate);
	}
	
	public void Brake() {
		milesPerHour = 0;
	}
}
