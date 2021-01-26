import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
const ManageCoursePage = (props) => {
	const [errors, setErrors] = useState({});
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: "",
	});

	function handleChange({ target }) {
		const updatedCourse = {
			...course,
			[target.name]: target.value,
		};
		setCourse(updatedCourse);
	}

	function handelSubmit(event) {
		event.preventDefault();
		courseApi.saveCourse(course).then(() => {
			props.history.push("/courses");
		});
	}

	function formIsValid() {
		const _errors = {};

		if (!course.title) _errors.title = "Title is required";
		if (!course.authorId) _errors.authorId = "Author ID is required";
		if (!course.category) _errors.category = "Category is required";

		setErrors(_errors);
		// Form is valid if the errors object has no properties
		return Object.keys(_errors).length === 0;
	}

	return (
		<>
			<h2>Manage Course </h2>
			<CourseForm
				errors={errors}
				course={course}
				onChange={handleChange}
				onSubmit={handelSubmit}
			/>
		</>
	);
};

export default ManageCoursePage;
