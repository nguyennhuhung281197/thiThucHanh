import {Route, Routes} from "react-router-dom";
import ListStudents from "./pages/ListStudents";
import CreateStudents from "./pages/CreateStudents";
import Edit from "./pages/Edit";
import Detail from "./pages/Detail";


function App() {
    return (

        <>

            <Routes>
                    <Route path={"/"} element={<ListStudents/>}></Route>
                    <Route path={"/create"} element={<CreateStudents/>}></Route>
                    <Route path={"/edit/:id"} element={<Edit/>}></Route>
                    <Route path={"/detail/:id"} element={<Detail/>}></Route>
            </Routes>


        </>
    )
}

export default App;
