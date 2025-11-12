import Container from "react-bootstrap/esm/Container"
import Button from "react-bootstrap/Button"
import FetchProducts from './fetch'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
import { useState, useEffect } from "react"
import Alert from "react-bootstrap/Alert"
import DisplayProducts from "./displayProducts"


export default function Home() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [dataP, setDataP] = useState([])
    const [error, setError] = useState(false)

    const PegarProdutos = async () => {
        setLoading(true)
        const response = await FetchProducts()
        setData(response)
        setLoading(false)
    }

    useEffect(() => {
        console.log(data)
        if (data.message != undefined) {
            setError(true)
        }
        else if (data.data != undefined) {
            setDataP(data.data)
        }
    }, [data])
    return (
        <Container>
            <Row className="margin-bottom 10px">
                <Col md="8" lg="8" sm="8" className="text-center">
                    <h1>Catálogo de Produtos </h1>
                </Col>
                <Col md="4" lg="4" sm="4" className="text-start">
                    <Button variant="primary" onClick={PegarProdutos}>Buscar</Button>
                </Col>
            </Row>
            <Row>
                {loading ? (
                    <Container className="mt-5 text-center">
                        <Spinner animation="border" role="status" />
                    </Container>
                ) : (
                    (error ? (
                        <Container className="mt-5">
                            <Alert variant="danger"> Erro ao obter produtos! </Alert>
                        </Container>
                    ) : (
                        <DisplayProducts data={dataP} />
                    ))
                )}
            </Row>
        </Container>
    )
}