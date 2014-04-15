package com.aprendoz;

import com.aprendoz_desarrollo.data.Persona;

public class MyPersona extends Persona {

	private Double revenues;


	public MyPersona() {

		this.revenues = 2000000.00;

	}

	public Double getRevenues() {
		return revenues;
	}

	public void setRevenues(Double revenues) {
		this.revenues = revenues;
	}
}