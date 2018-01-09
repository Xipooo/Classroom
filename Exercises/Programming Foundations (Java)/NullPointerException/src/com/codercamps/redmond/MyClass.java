package com.codercamps.redmond;

public class MyClass {
	private MyOtherClass _otherClass;


	public MyClass(MyOtherClass otherClassObject) {
		_otherClass = otherClassObject;
	}

	public MyClass() {}
	
	
	public String parseMessage() {
		return _otherClass.getMessage();
	}
}
