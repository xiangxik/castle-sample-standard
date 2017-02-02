package com.whenling.sample.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.whenling.sample.security.AdminDetailsService.CurrentUserDetails;

@Controller
@RequestMapping
public class IndexController {

	@RequestMapping(value = { "", "/", "/login" }, method = RequestMethod.GET)
	public String loginPage() {
		return "/login";
	}

	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public String dashboardPage(@AuthenticationPrincipal CurrentUserDetails currentUserDetails, Model model) {
		model.addAttribute("currentUser", currentUserDetails == null ? null : currentUserDetails.getCustomUser());
		return "/index";
	}

}
