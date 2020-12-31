import { Form } from "react-bootstrap";


function SearchBox(props) {
    const {placeholder} = props;

    return (
        <div className="c-searchbox">
            <Form.Control type="text" placeholder={placeholder} />        
        </div>
    )
}

export default SearchBox;