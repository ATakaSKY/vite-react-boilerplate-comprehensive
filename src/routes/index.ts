import { Router } from "@tanstack/router";
import { IndexRoute } from "./IndexRoute";
import { rootRoute } from "./RootRoute";
import { ChartRoute } from "./ChartRoute";

const routeTree = rootRoute.addChildren([IndexRoute, ChartRoute]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: typeof router;
	}
}

export { router };
