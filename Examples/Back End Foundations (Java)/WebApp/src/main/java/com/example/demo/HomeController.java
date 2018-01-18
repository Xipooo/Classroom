package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping({"/", "/home", "/homepage"})
public class HomeController {
	@RequestMapping(method=RequestMethod.GET)
	public String home(Model model) {
		model.addAttribute("homeModel", new HomeModel());
		return "home";
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public String homeSubmit(@ModelAttribute HomeModel homeModel) {
		return "result";
	}
}
