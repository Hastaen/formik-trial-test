import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { List, ListItem, Link, Grid } from "@mui/material";
import {
  FormikComponents,
  FormikMaterial,
  FormikSchema,
  FormikSimple,
  FormikTenFieldsPerformance,
  FormikThirtyFieldsPerformance,
  FormikTwentyFieldsPerformance,
  FormikPerformance,
  FormikAutoFocus,
  FormikThirtyFastFieldsPerformance,
} from "./Formik";
import {
  RHFMaterial,
  RHFSchema,
  RHFSimple,
  RHFTenFieldsPerformance,
  RHFThirtyFieldsPerformance,
  RHFTwentyFieldsPerformance,
  RHFPerformance,
} from "./RHF";
import {
  FinalFormMaterial,
  FinalFormPerformance,
  FinalFormAutofocus,
  FinalFormSchema,
  FinalFormSimple,
  FinalFormTenFieldsPerformance,
  FinalFormThirtyFieldsPerformance,
  FinalFormTwentyFieldsPerformance,
} from "./FinalForm";

export const App = () => {
  return (
    <BrowserRouter>
      <Grid container alignItems="start" direction="row" spacing={2}>
        <Grid item xs={3} sm={3} md={3}>
          Formik examples
          <List>
            <ListItem>
              <Link href="/formik/simple">Formik: Simple</Link>
            </ListItem>
            <ListItem>
              <Link href="/formik/autofocus">Formik: AutoFocus</Link>
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
              <Link href="/formik/tenfieldperformance">
                Formik: 10 field Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/formik/tweentyfieldperformance">
                Formik: 20 fields Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/formik/thirtyfieldperformance">
                Formik: 30 fields Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/formik/thirtyfastfieldsperformance">
                Formik: 30 fastfields Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/formik/FormikComponents">
                Formik: FormikComponents
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          React Hook Form examples
          <List>
            <ListItem>
              <Link href="/rhf/simple">RHF: Simple</Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/schema">RHF: Schema</Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/material">RHF: Material</Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/performance">RHF: Performance</Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/tenfieldperformance">
                RHF: 10 field Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/tweentyfieldperformance">
                RHF: 20 fields Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/thirtyfieldperformance">
                RHF: 30 fields Performance
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          React Final Form examples
          <List>
            <ListItem>
              <Link href="/finalform/simple">Final Form: Simple</Link>
            </ListItem>
            <ListItem>
              <Link href="/finalform/autofocus">Final Form: Autofocus</Link>
            </ListItem>
            <ListItem>
              <Link href="/finalform/schema">Final Form: Schema</Link>
            </ListItem>
            <ListItem>
              <Link href="/finalform/material">Final Form: Material</Link>
            </ListItem>
            <ListItem>
              <Link href="/finalform/performance">Final Form: Performance</Link>
            </ListItem>
            <ListItem>
              <Link href="/finalform/tenfieldperformance">
                Final Form: 10 field Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/finalform/tweentyfieldperformance">
                Final Form: 20 fields Performance
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/finalform/thirtyfieldperformance">
                Final Form: 30 fields Performance
              </Link>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Routes>
        <Route path="/formik/simple" element={<FormikSimple />} />
        <Route path="/formik/autofocus" element={<FormikAutoFocus />} />
        <Route path="/formik/schema" element={<FormikSchema />} />
        <Route path="/formik/material" element={<FormikMaterial />} />
        <Route path="/formik/performance" element={<FormikPerformance />} />
        <Route
          path="/formik/tenfieldperformance"
          element={<FormikTenFieldsPerformance />}
        />
        <Route
          path="/formik/tweentyfieldperformance"
          element={<FormikTwentyFieldsPerformance />}
        />
        <Route
          path="/formik/thirtyfieldperformance"
          element={<FormikThirtyFieldsPerformance />}
        />
        <Route
          path="/formik/thirtyfastfieldsperformance"
          element={<FormikThirtyFastFieldsPerformance />}
        />
        <Route path="/formik/components" element={<FormikComponents />} />
        <Route path="/rhf/simple" element={<RHFSimple />} />
        <Route path="/rhf/schema" element={<RHFSchema />} />
        <Route path="/rhf/material" element={<RHFMaterial />} />
        <Route path="/rhf/performance" element={<RHFPerformance />} />
        <Route
          path="/rhf/tenfieldperformance"
          element={<RHFTenFieldsPerformance />}
        />
        <Route
          path="/rhf/tweentyfieldperformance"
          element={<RHFTwentyFieldsPerformance />}
        />
        <Route
          path="/rhf/thirtyfieldperformance"
          element={<RHFThirtyFieldsPerformance />}
        />
        <Route
          path="/rhf/thirtyfieldperformance"
          element={<RHFThirtyFieldsPerformance />}
        />
        <Route path="/finalform/simple" element={<FinalFormSimple />} />
        <Route path="/finalform/autofocus" element={<FinalFormAutofocus />} />
        <Route path="/finalform/schema" element={<FinalFormSchema />} />
        <Route path="/finalform/material" element={<FinalFormMaterial />} />
        <Route
          path="/finalform/performance"
          element={<FinalFormPerformance />}
        />
        <Route
          path="/finalform/tenfieldperformance"
          element={<FinalFormTenFieldsPerformance />}
        />
        <Route
          path="/finalform/tweentyfieldperformance"
          element={<FinalFormTwentyFieldsPerformance />}
        />
        <Route
          path="/finalform/thirtyfieldperformance"
          element={<FinalFormThirtyFieldsPerformance />}
        />
        <Route
          path="/finalform/thirtyfieldperformance"
          element={<FinalFormThirtyFieldsPerformance />}
        />
      </Routes>
    </BrowserRouter>
  );
};
