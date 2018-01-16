package com.codercamps.redmond.generics;

public class Box<T> {
	private T _object;
	
	public void set(T object) {
		_object = object;
	}
	
	public T get() {
		return _object;
	}
}
