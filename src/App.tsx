import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { List, ListItem, Link, Grid } from "@mui/material";
import {
  FormikComponents,
  FormikMaterial,
  FormikSchema,
  FormikSimple,
  FormikAutoFocus,
} from "./Formik";
import {
  RHFMaterial,
  RHFSchema,
  RHFSimple,
  RHFAutoFocus,
  RHFCustom,
} from "./RHF";
import {
  FinalFormMaterial,
  FinalFormAutofocus,
  FinalFormSchema,
  FinalFormSimple,
} from "./FinalForm";
const FormikPerf = lazy(() => import("./Formik/Performance/Performance"));
const FormikTenField = lazy(() => import("./Formik/Performance/TenField"));
const FormikTwentyField = lazy(() => import("./Formik/Performance/TwentyField"));
const FormikThirtyField = lazy(() => import("./Formik/Performance/ThirtyField"));
const FormikThirtyFastField = lazy(() => import("./Formik/Performance/ThirtyFastField"));
const RHFPerf = lazy(() => import("./RHF/Performance/Performance"));
const RHFTenField = lazy(() => import("./RHF/Performance/TenField"));
const RHFTwentyField = lazy(() => import("./RHF/Performance/TwentyFields"));
const RHFThirtyField = lazy(() => import("./RHF/Performance/ThirtyFields"));
const FFTPerf = lazy(() => import("./FinalForm/Performance/Performance"));
const FFTenField = lazy(() => import("./FinalForm/Performance/TenField"));
const FFTwentyField = lazy(() => import("./FinalForm/Performance/TwentyField"));
const FFThirtyField = lazy(() => import("./FinalForm/Performance/ThirtyField"));


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
              <Link href="/formik/components">
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
              <Link href="/rhf/autofocus">RHF: AutoFocus</Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/schema">RHF: Schema</Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/material">RHF: Material</Link>
            </ListItem>
            <ListItem>
              <Link href="/rhf/custom">RHF: Custom</Link>
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/formik/simple" element={<FormikSimple />} />
          <Route path="/formik/autofocus" element={<FormikAutoFocus />} />
          <Route path="/formik/schema" element={<FormikSchema />} />
          <Route path="/formik/material" element={<FormikMaterial />} />
          <Route path="/formik/performance" element={<FormikPerf />} />
          <Route
            path="/formik/tenfieldperformance"
            element={<FormikTenField />}
          />
          <Route
            path="/formik/tweentyfieldperformance"
            element={<FormikTwentyField />}
          />
          <Route
            path="/formik/thirtyfieldperformance"
            element={<FormikThirtyField />}
          />
          <Route
            path="/formik/thirtyfastfieldsperformance"
            element={<FormikThirtyFastField/>}
          />
          <Route path="/formik/components" element={<FormikComponents />} />
          <Route path="/rhf/simple" element={<RHFSimple />} />
          <Route path="/rhf/schema" element={<RHFSchema />} />
          <Route path="/rhf/material" element={<RHFMaterial />} />
          <Route path="/rhf/performance" element={<RHFPerf />} />
          <Route path="/rhf/custom" element={<RHFCustom />} />
          <Route path="/rhf/autofocus" element={<RHFAutoFocus />} />
          <Route
            path="/rhf/tenfieldperformance"
            element={<RHFTenField />}
          />
          <Route
            path="/rhf/tweentyfieldperformance"
            element={<RHFTwentyField />}
          />
          <Route
            path="/rhf/thirtyfieldperformance"
            element={<RHFThirtyField />}
          />

          <Route path="/finalform/simple" element={<FinalFormSimple />} />
          <Route path="/finalform/autofocus" element={<FinalFormAutofocus />} />
          <Route path="/finalform/schema" element={<FinalFormSchema />} />
          <Route path="/finalform/material" element={<FinalFormMaterial />} />
          <Route
            path="/finalform/performance"
            element={<FFTPerf />}
          />
          <Route
            path="/finalform/tenfieldperformance"
            element={<FFTenField />}
          />
          <Route
            path="/finalform/tweentyfieldperformance"
            element={<FFTwentyField />}
          />
          <Route
            path="/finalform/thirtyfieldperformance"
            element={<FFThirtyField />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
