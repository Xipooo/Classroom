package com.codercamps.redmond.collections;

public class Circle implements IShape {
	private float _radius;
	
	public Circle(float radius) {
		_radius = radius;
	}
	
	public float area() {
		return 3.14f * _radius * _radius;
	}
}
