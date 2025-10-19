import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Form from "./pages/form";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "./styles/app.module.scss";
import { useEffect } from "react";
import api from "./utils/api";
import { useDispatch } from "react-redux";
import { setError, setLoading, setJobs } from "./redux/slices/job-slice";
import { setupListeners } from "@reduxjs/toolkit/query";





const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch(setLoading());


    api.get("/jobs")
    .then((res) => dispatch(setJobs(res.data)))
    .catch((err) => dispatch(setError(err.message)));
  })


  return (
    <BrowserRouter>
    <div className={styles.layout}> 
    <Header />
<main className={styles.page}>
    <Routes>

      <Route  path="/" element={ <Home />} />
      <Route  path="/create" element={ <Form />} />
      <Route  path="/edit/:id" element={ <Form />} />

    </Routes>

    </main>
    
    

</div>
    </BrowserRouter>


  );
};

export default App;