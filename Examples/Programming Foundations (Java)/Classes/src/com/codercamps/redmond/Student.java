package com.codercamps.redmond;

public class Student {
	private String firstName;
	private String lastName;
	private String courseFocus;
	
	public Student(String first, String last, String course) {
		firstName = first;
		lastName = last;
		courseFocus = course;
	}
	
	public Student() {
		firstName = "";
		lastName = "";
		courseFocus = "";
	}
	
	public void printInfo() {
		System.out.println(firstName + " " + lastName + " is studying " + courseFocus);
	}
	public String getFirstName() {
		return firstName;
	}
	public String getLastName() {
		return lastName;
	}

	public void setCourseFocus(String newCourseFocus) {
		courseFocus = newCourseFocus;
	}
}
