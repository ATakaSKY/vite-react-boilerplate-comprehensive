import { Route } from "@tanstack/router";
import { rootRoute } from "./RootRoute";
import Charts from "../pages/Charts";

export const ChartRoute = new Route({
	getParentRoute: (): typeof rootRoute => rootRoute,
	path: "/charts",
	component: Charts,
});
