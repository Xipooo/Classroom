package com.codercamps.redmond;

public class Startup {

	public static void main(String[] args) {
		Student newStudent = new Student("James", "Gosling", "Java");
		newStudent.printInfo();

		Student cSharpStudent = new Student("Anders", "Hejlsberg", "C#");
		cSharpStudent.printInfo();
		
		Student studentInstructor = new Student("Steve", "Bishop", "Instructor");
		studentInstructor.printInfo();
		
		studentInstructor.setCourseFocus("Teacher");
		System.out.println(studentInstructor.getFirstName() + " " + studentInstructor.getLastName() + " is teaching.");

		String result = StringFun.shout("Good morning, Ignacio.");
		System.out.println(result);
	}

}
