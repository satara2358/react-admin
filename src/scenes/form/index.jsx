import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import useMediaQuery from "@mui/material/useTouchRipple";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
}

const phoneRegExp = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

const userSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup
    .string()
    .email("Invalid Email")
    .required("Required"),
  contact: Yup
    .string()
    .matches(phoneRegExp, "El numero no es valido")
    .required("Required"),
  address1: Yup.string().required("Required"),
  address2: Yup.string().required("Required"),
});

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  
  const handleFormSubmit = (values) => {
    console.log(values);
  }

  return (
    <Box m="20px">
      <Header title="Crear Usuario" subtitle="Crear Nuevo Perfil de Usuario" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box 
              display="grid" 
              gap="30px" 
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div" : { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Correo Electronico"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contacto"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dirección 1"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Dirección 2"
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button 
                type="submit"
                color="primary"
                variant="contained"
                >
                Crear Usuario
            </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
    )
  }

export default Form;


