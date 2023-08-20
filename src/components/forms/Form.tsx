import { useForm } from "react-hook-form";
import { ReactHookFormDevelopmentTools } from "../utils/development-tools/ReactHookFormDevelopmentTools";

const Form = (): React.ReactElement => {
	const { register, control, handleSubmit } = useForm({
		mode: "onChange",
	});
	return (
		<>
			<form onSubmit={handleSubmit((d) => console.log(d))}>
				<h1>React Hook Form DevTools</h1>

				<label>Test</label>
				<input {...register("test")} />

				<input type="submit" />
			</form>
			<ReactHookFormDevelopmentTools control={control} placement="top-right" />
		</>
	);
};

export default Form;
