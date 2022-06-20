import { BrowserRouter, Routes, Route } from "react-router-dom";
import Material from "./Formik/Material/Material";
import Schema from "./Formik/Schema/Schema";
import Simple from "./Formik/Simple/Simple";
import {Performance, TenFieldsPerformance, TwentyFieldsPerformance, ThirtyFieldsPerformance} from "./Formik/Performance/Performance";
import FormikComponents from "./Formik/FormikComponents/FormikComponents";
import "./App.css";
import { List, ListItem, Link } from "@mui/material";

export const App = () => {
  return (
    <BrowserRouter>
      <List>
        <ListItem>
          <Link href="/formik/simple">Formik: Simple</Link>
        </ListItem>
        <ListItem>
          <Link href="/formik/schema">Formik: Schema</Link>
        </ListItem>
        <ListItem>
          <Link href="/formik/material">Formik: Material</Link>
        </ListItem>
        <ListItem>
          <Link href="/formik/performance">Formik: Performance</Link>
        </ListItem>
        <ListItem>
          <Link href="/formik/tenfieldperformance">Formik: 10 field Performance</Link>
        </ListItem>
        <ListItem>
          <Link href="/formik/tweentyfieldperformance">Formik: 20 fields Performance</Link>
        </ListItem>
        <ListItem>
          <Link href="/formik/thirtyfieldperformance">Formik: 30 fields Performance</Link>
        </ListItem>
        <ListItem>
          <Link href="/formik/FormikComponents">Formik: FormikComponents</Link>
        </ListItem>
      </List>
      <Routes>
        <Route path="/formik/simple" element={<Simple />} />
        <Route path="/formik/schema" element={<Schema />} />
        <Route path="/formik/material" element={<Material />} />
        <Route path="/formik/performance" element={<Performance />} />
        <Route path="/formik/tenfieldperformance" element={<TenFieldsPerformance />} />
        <Route path="/formik/tweentyfieldperformance" element={<TwentyFieldsPerformance />} />
        <Route path="/formik/thirtyfieldperformance" element={<ThirtyFieldsPerformance />} />
        <Route path="/formik/FormikComponents" element={<FormikComponents />} />
      </Routes>
    </BrowserRouter>
  );
};
