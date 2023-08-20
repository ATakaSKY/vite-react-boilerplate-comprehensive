import type { FunctionComponent } from "../common/types";
import MyResponsiveBar from "../components/charts/bar/Bar";
import MyResponsiveBump from "../components/charts/bump";
import { barData } from "../mock/charts/bar";
import { bumpData } from "../mock/charts/bump";

const Charts = (): FunctionComponent => {
	return (
		<>
			<div className="p-10">
				<MyResponsiveBump data={bumpData} />
			</div>

			<div className="p-10">
				<MyResponsiveBar data={barData} />
			</div>
		</>
	);
};

export default Charts;
