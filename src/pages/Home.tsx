import { Link } from "@tanstack/router";
import type { FunctionComponent } from "../common/types";
import Form from "../components/forms/Form";
import Table from "../components/table";

const Home = (): FunctionComponent => {
	return (
		<>
			<Link to="/charts">Charts</Link>

			<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center ">
				<Table />
				<Form />
			</div>
		</>
	);
};

export default Home;
