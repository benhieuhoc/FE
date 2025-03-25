import MenuLayout from "./menu";
import Bodylayout from "./Body";
import { Container } from "react-bootstrap";

const Layoutmain = ({children}) => {
    return(
        <Container style={{margin: 20}}>
            <div style={{ marginTop: 0 }}>
                <MenuLayout/>
                <Bodylayout
                    content={children}
                />
            </div>
        </Container>
    )
}

export default Layoutmain;
