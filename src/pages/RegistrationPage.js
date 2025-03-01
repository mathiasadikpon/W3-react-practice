import { Container } from "reactstrap";
import RegistrationForm from "../myDoc/RegistrationForm";

const RegistrationPage = () => {
    return <Container>
        <h2 style={{color:"blue"}}>Register your account</h2>
        <RegistrationForm />
    </Container>
};

export default RegistrationPage;