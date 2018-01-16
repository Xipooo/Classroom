package com.codercamps.redmond.collections;

import java.util.*;

public class Startup {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<IShape> arrayList = new ArrayList<IShape>();		
		
		arrayList.add(new Circle(4f));
		arrayList.add(new Square(3f));
		arrayList.add(new Circle(5f));
		arrayList.add(new Square(2.5f));
		
		for (IShape shape : arrayList) {
			System.out.println(shape.area());
		}
		
		arrayList.remove(0);
	}

}
