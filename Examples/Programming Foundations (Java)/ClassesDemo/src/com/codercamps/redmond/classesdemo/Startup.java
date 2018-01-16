package com.codercamps.redmond.classesdemo;

public class Startup {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		UserInput ui = new UserInput();
		
		System.out.println("Please enter a mph to accellerate by:");
		String mph = ui.ReadInputString();
		
		int mphInt = Integer.parseInt(mph);
		
		Automobile car = new Automobile();
		car.Accellerate(mphInt);

		
		String firstName = "Tyler";
		String lastName = "";
		
		Student tylerFuqua = new Student();
		tylerFuqua.setFirstName(firstName);
		tylerFuqua.setLastName(lastName);
		tylerFuqua.setCourseFocus("Java");
		
		System.out.println("Please enter a last name:");
		String newLastName = ui.ReadInputString();
		
		tylerFuqua.setLastName(newLastName);
		
		System.out.println(tylerFuqua.getFirstName() + " " + tylerFuqua.getLastName() + " is studying " + tylerFuqua.getCourseFocus());
	}

}
