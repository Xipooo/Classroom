package com.codercamps.redmond.interfaces;

public class Square implements IShape {
	
	private float _length;

	public Square(float length) {
		_length = length;
	}
	
	public float area() {
		return _length * _length;
	}
}
