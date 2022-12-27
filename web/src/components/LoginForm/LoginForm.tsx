import useViewport from "../../hooks/useViewport";
import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { FormCheckBox } from "./FormCheckBox";
import { FormTextBox } from "./FormTextBox";

export function LoginForm() {
  const viewport = useViewport();

  return (
    <form
      action=""
      className={`flex flex-col bg-black bg-opacity-30 items-center justify-center ${
        viewport === "mobile"
          ? "w-screen h-screen gap-2"
          : "h-[95%] w-1/2 self-end rounded-md mr-4 gap-4 shadow-2xl drop-shadow-2xl"
      }`}
    >
      <h1 className="text-pokeball-white font-black text-2xl whitespace-nowrap">
        Wellcome to showdown!
      </h1>
      <div className={`flex flex-col p-8 bg-gradient-to-t from-[#f27038] to-blue-500 h-5/6 w-5/6 rounded overflow-hidden`}>
        <div className="flex flex-col gap-3">
          <h2 className="self-center text-xl font-bold mb-4">Login</h2>
          <div className="h-16 flex mb-4 bg-white text-black rounded-md items-center justify-center">
            Login with google
          </div>
          <FormTextBox
            htmlFor="teste"
            label="username"
            name="teste"
            id="teste"
            key="1"
            placeholder="ashketchup"
          />
          <FormTextBox
            htmlFor="teste"
            label="password"
            name="teste"
            id="teste"
            key="2"
            placeholder="***********"
          />

          <div className="flex justify-around w-full mt-4 self-center ">
            <div className="flex items-center gap-2">
              <FormCheckBox />
              <label className="text-md -mt-1 font-semibold" htmlFor="remember">
                remember me
              </label>
            </div>

            <Link text="forgot password?" />
          </div>
        </div>

        {/* <div className="flex flex-col gap-3">
          <Link
            text="Don't have a account? register here"
            className="self-center hover:cursor-pointer underline mt-4 font-semibold"
          />
        </div> */}
        <div className="self-center mt-6">
            <Button> Register here</Button>
        </div>
        
        <img className="w-[200px] h-[200px] self-start rotate-45 " src="data:image/png;base64,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"></img>
      </div>
    </form>
  );
}
