import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik,Field, Form, ErrorMessage } from "formik";

const RegistrationForm = () => {

    return <Formik>
        <Form>
            <FormGroup>
                <Label htmlFor="lname">First Name</Label>
                <Field  >Helle</Field>
            </FormGroup>
        </Form>
    </Formik>
};

export default RegistrationForm;