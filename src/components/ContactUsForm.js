import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./components.scss";
import arrowdown from "../assets/images/arrowdown.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { contactUs } from "../services/ContactUsServices";
import toast, { Toaster } from "react-hot-toast";
import { getKeyTranslation } from "./utils/Translations";
import "dayjs/locale/en";
import { Spinner } from "react-bootstrap";

const ContactUsForm = (props) => {
  const [initialValue, setInitialValue] = useState(dayjs(new Date()));
  const [selectedValue, setSelectedValue] = useState(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [btnLoad, setBtnLoad] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 3000,
      },
    },
  });
  const handleChangePicker = (newValue, f) => {
    setSelectedValue(newValue);
  };
  const nextDayExcludingWeekends = () => {
    var todayDate = new Date();
    var startDate = "",
      startDate = new Date(todayDate.setDate(todayDate.getDate() + 1));
    if (startDate.getDay() != 0 && todayDate.getDay() != 6) {
    } else if (startDate.getDay() == 0) {
      startDate = new Date(todayDate.setDate(todayDate.getDate() + 1));
    } else {
      startDate = new Date(todayDate.setDate(todayDate.getDate() + 2));
    }
    setInitialValue(dayjs(startDate));
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    p_number: "",
    topic: "Booking for a product demo session",
    preffered_date: initialValue,
    preffered_time: "",
    checkbox_commerial: false,
  };
  useEffect(() => {
    nextDayExcludingWeekends();
  }, []);
  const styledDatePicker = {
    cursor: "pointer",
    "& .MuiButtonBase-root": {
      "&:hover": {
        background: "white !important",
      },
    },
    "& .MuiTouchRipple-root ": {
      display: "none !important",
    },
    svg: {
      background: `url(${arrowdown})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      path: {
        color: "white",
        visibility: "hidden",
      },
      transform: pickerOpen ? "rotate(180deg)" : null,
      width: { xl: "1vw !important", sm: "16px !important" },
      height: { xl: "1vw !important", sm: "15px !important" },
    },
    input: { background: "#FFFFFF" },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiOutlinedInput-root": {
      background: "#ffffff",
      "& fieldset": {
        borderColor: "#E2E8F0",
        color: "#E2E8F0",
      },
      pointerEvents: "none !important",
      // "&:hover fieldset": {
      //   borderColor: "#3F626C",
      // },
      "&:active fieldset": {
        borderColor: "#3F626C",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3F626C",
      },
    },
    "& .Mui-error": {
      color: "#d32f2f",
      borderColor: "#d32f2f !important",
    },
  };
  const styledCalender = {
    sx: {
      "& .MuiPaper-root": {
        backgroundColor: "white",
        width: { xl: "17vw !important" },
        height: { xl: "auto !important" },
        padding: { xl: "15px !important" },
        "& .MuiCalendarOrClockPicker-root": {
          "& > :first-of-type": {
            width: { xl: "100% !important" },
            height: { xl: "100% !important" },
            maxHeight: { xl: "unset !important" },
          },
        },
        "& .MuiCalendarOrClockPicker-root ": {
          height: { xl: "100% !important" },
        },
        "& .MuiPickersCalendarHeader-labelContainer": {
          maxHeight: { xl: "unset !important" },
        },
        "& .PrivatePickersSlideTransition-root": {
          minHeight: { xl: "460px !important" },
        },
      },
      "& .MuiDayPicker-weekContainer": {
        // background: "red",
        "& .Mui-selected": {
          backgroundColor: "#3F626C !important",
          color: "#FAFAFA !important",
          "&:hover": {
            backgroundColor: "#3F626C !important",
            color: "#FAFAFA",
          },
        },
      },
      "& .MuiPickersCalendarHeader-root": {
        maxHeight: { xl: "unset !important" },
        "& .MuiTypography-root": {
          color: "#FAFAFA",
        },
        "& .MuiPickersCalendarHeader-label ": {
          color: "#3F626C !important",
          fontSize: { xl: "1vw !important" },
          maxHeight: { xl: "unset !important" },
        },
        svg: {
          height: { xl: "1vw !important" },
          width: { xl: "1vw !important" },
        },
        "& .PrivatePickersYear-root": {},
      },
      "& .MuiButtonBase-root": {
        "& .MuiSvgIcon-root": {
          color: "#3F626C !important",
        },
      },
      "& .MuiDayPicker-header": {
        justifyContent: { xl: "space-around !important" },
        padding: { xl: "20px 0 !important" },
        "& .MuiTypography-root": {
          fontSize: { xl: "1vw !important" },
        },
      },
      "& .MuiDayPicker-weekContainer": {
        "& .Mui-selected ": {
          backgroundColor: "#3F626C !important",
          color: "#ffffff !important",
        },
        justifyContent: { xl: "space-around !important" },
      },
      "& .PrivatePickersYear-root ": {
        "& .PrivatePickersYear-yearButton": {
          color: "#3F626C !important",
          height: { xl: "1.9vw !important" },
          width: { xl: "2.9vw !important" },
          fontSize: { xl: "1vw !important" },
        },
        "& .Mui-selected ": {
          backgroundColor: "#3F626C !important",
          color: "#ffffff !important",
        },
      },
      "& .MuiCalendarPicker-root": {
        backgroundColor: "white",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.06)",
        borderRadius: "8px",
        position: { xl: "relative !important" },
        width: { xl: "100% !important" },
        maxHeight: { xl: "unset !important" },
      },

      "& .MuiPickersDay-dayWithMargin": {
        color: "#3F626C",
        border: "none",
        fontSize: { xl: "1vw !important", sm: "14px !important" },
        height: { xl: "2vw !important" },
        width: { xl: "2vw !important" },
        fontWeight: "400",
        backgroundColor: "white !important",
        // "&:focus": {
        //   backgroundColor: "white !important",
        //   color: "#3F626C",
        // },
      },
      "& .MuiPickersDay-today": {
        color: "#3F626C",
        border: "1px solid #3F626C !important",
        // "&:focus": {
        //   backgroundColor: "white !important",
        //   color: "#3F626C",
        // },
      },
      "& .MuiPickersDay-root": {
        "& .Mui-disabled": {
          color: "#CBD5E0 !important",
        },
      },
    },
  };
  const phone_regex = /^\+?\d+$/;
  const name_regex_str =
    "^[^~+-=!@#$%&*_1234567890:|\\\"<>[\\]{}\\()';?//\\n]*[^~+-=!@#$%&*_1234567890:|\\\"<>[\\]{}\\()';?//\\s][^~+-=!@#$%&*_1234567890:|\\\"<>[\\]{}\\()';?//\\n]*$";
  let name_regex = new RegExp(name_regex_str);
  const validateSchema = Yup.object({
    first_name: Yup.string()
      .required("required")
      .max(30, "Must be less than 30 characters")
      .matches(name_regex, "Must not contain a number or a special character"),
    last_name: Yup.string()
      .required("required")
      .max(30, "Must be less than 30 characters")
      .matches(name_regex, "Must not contain a number or a special character"),
    email: Yup.string()
      .email("Must be valid email for example: email@yourdomain.com.")
      .max(60, "Must be less than 60 characters")
      .required("required"),
    p_number: Yup.string()
      .matches(
        phone_regex,
        "Must be only numbers and must not contain special characters."
      )
      .required("required")
      .max(60, "Must be less than 60 characters"),
    topic: Yup.string()
      .required("required")
      .max(60, "Must be less than 60 characters"),
  });
  const onSubmit = async (values) => {
    const obj = {
      firstName: values.first_name,
      lastName: values.last_name,
      email: values.email,
      phoneNumber: values.p_number,
      topic: values.topic,
      preferdDate: selectedValue
        ? new Date(
            new Date(selectedValue).setDate(
              new Date(selectedValue).getDate() + 1
            )
          )
        : selectedValue,
      preferdTime: values.preffered_time,
      futureOffers: values.checkbox_commerial,
    };
    setBtnLoad(true);
    let result = await contactUs(obj);
    if (!result) {
      props.setSubmissionFail(true);
      props.setSubmissionSuccess(false);
    }
    if (result?.status == 200) {
      setBtnLoad(false);
      props.setSubmissionSuccess(true);
      props.setSubmissionFail(false);
    } else if (result?.status == 500) {
      setBtnLoad(false);
      props.setSubmissionFail(true);
      props.setSubmissionSuccess(false);
    } else {
      setBtnLoad(false);
      toast.error(getKeyTranslation(result?.data?.message));
    }
  };

  const styledField = {
    input: {
      background: "#FFFFFF",
      "&::placeholder": {},
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E2E8F0",
        color: "#E2E8F0",
      },
      "&::placeholder": {
        color: "red !important",
      },
      "&:active fieldset": {
        borderColor: "#3F626C",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3F626C",
      },
    },
    "& .Mui-error": {
      input: {
        "&::placeholder": {
          color: "#F64256 !important",
          fontWeight: "400",
        },
      },
    },
    "& .MuiFormHelperText-root ": {
      color: "#4A5568 !important",
      marginLeft: "0px",
      marginRight: "0px",
    },
  };

  const disableWeekends = (date) => {
    const date_ = new Date(date);
    return date_.getDay() === 0 || date_.getDay() === 6;
  };
  const options = [
    {
      value: "08:00 - 10:00",
    },
    {
      value: "10:00 - 12:00",
    },
    {
      value: "13:00 - 15:00",
    },
    {
      value: "15:00 - 17:00",
    },
  ];
  const muiSelectStyling = (formik) => {
    return {
      borderColor: "#E2E8F0 !important",
      borderWidth: "1px !important",
      backgroundColor: "#FFFFFF",
      input: {
        height: "100%",
        opacity: formik.values.preffered_time == "" ? "0.5" : "0",
        paddingLeft: "12px",
        border: "none",
        svg: {
          background: `url(${arrowdown})`,
        },
      },
      svg: {
        background: `url(${arrowdown})`,
        backgroundPosition: "right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: { xl: "1vw !important", sm: "16px !important" },
        height: { xl: "1vw !important", sm: "15px !important" },
        top: { xl: "0.5vw !important" },
        marginTop: { xl: "0px !important", sm: "5px !important" },
        marginRight: { xl: "4px !important" },
        zIndex: "1",
        path: {
          opacity: 0,
        },
      },
      "&.MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#E2E8F0 !important",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#3F626C !important",
          borderWidth: "1px",
        },
        "& .MuiSelect-select": {
          height: { xl: "0.5vw !important" },
        },
      },
    };
  };
  const muiSelectInputPropsStyling = {
    placeholder: "Please select",
    sx: {
      height: "100%",
      fontSize: "1vw",
      opacity: "1",
      height: "20px",
      lineHeight: "initial",
    },
    MenuProps: {
      sx: {
        "& .MuiPaper-root ": {
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.06)",
          borderRadius: "8px",
          marginTop: "4px",
        },
      },
      MenuListProps: {
        sx: {
          marginTop: "2px",
          "& .Mui-selected": {
            backgroundColor: "#3F626C !important",
            color: "#ffffff !important",
            "&:hover": {
              backgroundColor: "#3F626C !important",
              color: "#ffffff",
            },
          },
          "& .MuiMenuItem-root ": {
            margin: "0 12px",
            borderRadius: "6px",
            minHeight: "auto !important",
            fontSize: { xl: "1vw !important" },
            // fontSize: "1vw !important",
            lineHeight: "initial !important",
            "&:hover": {
              backgroundColor: "#F7FAFC",
              color: "#2D3748",
            },
          },
        },
      },
    },
  };
  const lastDateOfYear = `12/31/${new Date().getFullYear() + 1}`;
  return (
    <>
      {/* start */}
      <Toaster position="top-right" reverseOrder={false} />
      <div className="contact-us-form h-100">
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={onSubmit}
          enableReinitialize={true}
        >
          {(formik) => (
            <Form className="text-start mx-auto d-flex h-100">
              <ThemeProvider theme={theme}>
                <Grid
                  container
                  spacing={2}
                  className="align-items-stretch h-100"
                >
                  <Grid item md={6} xs={12} className="mb-3">
                    <label>
                      First name<span style={{ color: "red" }}>&nbsp;*</span>
                    </label>
                    <br />
                    <TextField
                      size="small"
                      fullWidth
                      id="first_name"
                      name="first_name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.first_name &&
                        Boolean(formik.errors.first_name)
                      }
                      sx={styledField}
                      placeholder="First name"
                      helperText={
                        formik.touched.first_name &&
                        formik.errors.first_name !== "required" &&
                        formik.errors.first_name
                      }
                    />
                  </Grid>
                  <Grid item md={6} xs={12} className="mb-3">
                    <label>
                      Last name
                      <span style={{ color: "red" }}>&nbsp;*</span>
                    </label>
                    <br />
                    <TextField
                      size="small"
                      sx={styledField}
                      placeholder="Last name"
                      fullWidth
                      id="last_name"
                      name="last_name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.last_name &&
                        Boolean(formik.errors.last_name)
                      }
                      helperText={
                        formik.touched.last_name &&
                        formik.errors.last_name !== "required" &&
                        formik.errors.last_name
                      }
                    />
                  </Grid>
                  <Grid item xs={12} className="mb-3">
                    <label>
                      Work Email
                      <span style={{ color: "red" }}>&nbsp;*</span>
                    </label>
                    <br />
                    <TextField
                      size="small"
                      placeholder="Work Email"
                      sx={styledField}
                      fullWidth
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={
                        formik.touched.email &&
                        formik.errors.email !== "required" &&
                        formik.errors.email
                      }
                    />
                  </Grid>
                  <Grid item xs={12} className="mb-3">
                    <label>
                      Phone number
                      <span style={{ color: "red" }}>&nbsp;*</span>
                    </label>
                    <br />
                    <TextField
                      size="small"
                      placeholder="Phone number"
                      sx={styledField}
                      fullWidth
                      id="p_number"
                      name="p_number"
                      value={formik.values.p_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.p_number &&
                        Boolean(formik.errors.p_number)
                      }
                      helperText={
                        formik.touched.p_number &&
                        formik.errors.p_number !== "required" &&
                        formik.errors.p_number
                      }
                    />
                  </Grid>
                  <Grid item xs={12} className="mb-3">
                    <label>
                      Topic
                      <span style={{ color: "red" }}>&nbsp;*</span>
                    </label>
                    <br />
                    <TextField
                      size="small"
                      placeholder="Topic"
                      sx={styledField}
                      fullWidth
                      id="topic"
                      name="topic"
                      value={formik.values.topic}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.topic && Boolean(formik.errors.topic)
                      }
                      helperText={
                        formik.touched.topic &&
                        formik.errors.topic !== "required" &&
                        formik.errors.topic
                      }
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    className="date-picker-mui-customization mb-3"
                  >
                    <label>Preferred date</label>
                    <br />
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      // locale={ptBR}
                      adapterLocale="de"
                    >
                      <DesktopDatePicker
                        open={pickerOpen}
                        inputFormat="DD/MM/YYYY"
                        // dayOfWeekFormatter={formattedWeekDays}
                        inputProps={{
                          placeholder: "Please select",
                        }}
                        value={selectedValue}
                        PopperProps={styledCalender}
                        minDate={initialValue}
                        maxDate={new Date(lastDateOfYear)}
                        onChange={handleChangePicker}
                        onOpen={() => {
                          setPickerOpen(true);
                        }}
                        onClose={() => {
                          setPickerOpen(false);
                        }}
                        shouldDisableDate={disableWeekends}
                        renderInput={(params) => (
                          <TextField
                            readOnly={true}
                            disabled
                            onClick={() => {
                              setPickerOpen(!pickerOpen);
                            }}
                            autoComplete="off"
                            size="small"
                            fullWidth
                            sx={styledDatePicker}
                            {...params}
                            onKeyDown={(e) => {
                              e.preventDefault();
                            }}
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item md={6} xs={12} className="mb-3">
                    <label>Preferred time</label>
                    <br />
                    <FormControl className="w-100">
                      <Select
                        size="small"
                        sx={muiSelectStyling(formik)}
                        fullWidth
                        id="preffered_time"
                        name="preffered_time"
                        defaultValue={""}
                        value={formik.values.preffered_time}
                        onChange={formik.handleChange}
                        inputProps={muiSelectInputPropsStyling}
                      >
                        <MenuItem
                          value=""
                          sx={{
                            background: "#ffffff !important",
                            padding: "0 !important",
                          }}
                        ></MenuItem>
                        <MenuItem value={"08:00 - 10:00"}>
                          08:00 - 10:00
                        </MenuItem>
                        <MenuItem value={"10:00 - 12:00"}>
                          10:00 - 12:00
                        </MenuItem>
                        <MenuItem value={"13:00 - 15:00"}>
                          13:00 - 15:00
                        </MenuItem>
                        <MenuItem value={"15:00 - 17:00"}>
                          15:00 - 17:00
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <div className="d-flex">
                      <FormControlLabel
                        sx={{
                          marginRight: "0",
                        }}
                        control={
                          <Checkbox
                            checked={formik.values.checkbox_commerial}
                            name="checkbox_commerial"
                            id="checkbox_commerial"
                            style={{
                              color: "#3F626C",
                              paddingTop: "0px",
                            }}
                            sx={{
                              svg: {
                                fontSize: { xl: "1.6vw" },
                              },
                            }}
                            onChange={formik.handleChange}
                          />
                        }
                        onChange={formik.handleChange}
                      />
                      <div
                        style={{ color: "#3F626C" }}
                        className="checkbox-label"
                      >
                        Yes, I would like to receive commercial electronic
                        information and offers from Modest Minds
                      </div>
                    </div>
                  </Grid>
                  <div className="text-center w-100">
                    <button
                      className="btn-get-started text-center mt-4 btn-primary w-25"
                      type="submit"
                      disabled={btnLoad}
                    >
                      {btnLoad ? (
                        <Spinner
                          animation="border"
                          role="status"
                          style={{
                            height: "23px",
                            width: "23px",
                          }}
                        >
                          <span
                            className="visually-hidden"
                            style={{
                              height: "23px",
                              width: "23px",
                            }}
                          >
                            Loading...
                          </span>
                        </Spinner>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </Grid>
              </ThemeProvider>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ContactUsForm;
