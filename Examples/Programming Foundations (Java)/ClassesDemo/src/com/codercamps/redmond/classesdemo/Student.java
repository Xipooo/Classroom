package com.codercamps.redmond.classesdemo;

public class Student {
	private String firstName;
	private String lastName;
	private String courseFocus;
	
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	
	public String getCourseFocus() {
		return courseFocus;
	}
	
	public void setFirstName(String newFirstName) {
		firstName = newFirstName;
	}
	
	public void setLastName(String newLastName) {
		lastName = newLastName;
	}
	
	public void setCourseFocus(String newCourseFocus) {
		courseFocus = newCourseFocus;
	}
}
