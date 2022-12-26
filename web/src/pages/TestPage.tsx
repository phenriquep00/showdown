import { Button } from "../components/Button/Button";

export function TestPage() {
    return (
        <div className="page flex flex-col items-center justify-around">
            <Button as="primary"/>
            <Button as="secondary" />
            <Button as="tertiary" />
        </div>
    )
}