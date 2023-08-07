import { Footer } from "@/components/Footer";
import Cardgrid from "@/components/Cardgrid";
import { Component2 } from "@/components/about/aboutcomponent2";
import React, { useEffect, useState } from "react";
import { Component3 } from "../../components/about/aboutcomponent3";
import Form from "../../components/about/inputform";
import HeroChild from "@/components/about/heroSection/index";
import HeroSectionForAbout from "@/components/views/About/HeroSection";
import TextEffectSectionForAbout from "@/components/views/About/TextEffect";
import Navbar from "@/components/views/Navbar";
import HeroSection from "@/components/views/HeroSection";

export default function Index() {
	useEffect(() => {
		const elements = document.querySelectorAll(".animation_triggering_class");
		// Create an intersection observer

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Add the "animate" class when the element is in the viewport
					entry.target.classList.add("animate");
				} else {
					entry.target.classList.remove("animate");
				}
			});
		});
		// Observe each element
		elements.forEach((element) => {
			observer.observe(element);
		});
		const elements2 = document.querySelectorAll(".scale_triggering_class");
		// Create an intersection observer
		const observer2 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Add the "animate" class when the element is in the viewport
					entry.target.classList.add("scale");
				} else {
					entry.target.classList.remove("scale");
				}
			});
		});
		elements2.forEach((element) => {
			observer2.observe(element);
		});
	}, []);
	return (
		<>
			<Navbar page="index" />
			<HeroSectionForAbout />
			{/* <HeroSection /> */}
			<TextEffectSectionForAbout />
			<Component2 />
			<Component3 />
			<Form />
		</>
	);
}
