import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/esm/Col"
import Form from 'react-bootstrap/Form';


export default function DisplayProducts(props) {
    const [data, setData] = useState([])
    const [filtro, setFiltro] = useState("")
    useEffect(() => {
        setData(props.data)
    }, [props.data])
    console.log(props.data)
    if (props.data.length == 0) return (<> </>)
    return (
        <Container>
            <Form.Select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="">Selecione Categoria</option>
                <option value="eletronicos">Eletrônicos</option>
                <option value="livros">Livros</option>
                <option value="moveis">Moveis</option>
            </Form.Select>
            {data.filter(item => {
                if (filtro != "") return item.category == filtro
                return item
            })
                .map((item) => (
                    <Card className="mt-2">
                        <Card.Body>
                            <Row className="mb-3">
                                <Col className="text-start">
                                    <b>Nome: </b> {item.name}
                                </Col>
                                <Col className="text-start">
                                    <b>Categoria: </b> {item.category}
                                </Col>
                                <Col className="text-start">
                                    <b>Preço: </b>  {item.price}
                                </Col>
                            </Row>
                            <Col className="text-start"> <b>Descrição: </b> {item.marketing_description} </Col>

                        </Card.Body>
                    </ Card>
                ))
            }
        </Container >
    )
}