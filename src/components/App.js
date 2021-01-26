import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import CourseManagementPage from "./ManageCoursePage";
import Header from "./common/Header";
import NotFoundPage from "./NotFoundPage";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/courses" component={CoursesPage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/course/:slug" component={CourseManagementPage} />
				<Route path="/course" component={CourseManagementPage} />
				<Redirect from="/about-page" to="/about" />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	);
}

export default App;
