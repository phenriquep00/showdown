import { Button } from "../components/Button/Button";
import { LoginForm } from "../components/LoginForm/LoginForm";

export function TestPage() {
    return (
        <div className="page flex flex-col items-center justify-around">
            <LoginForm />
        </div>
    )
}