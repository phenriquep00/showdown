import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TestPage } from "./pages/TestPage";

export function Router() {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />

            <Route path={"test/components"} element={<TestPage />}/>
        </Routes>
    )
}