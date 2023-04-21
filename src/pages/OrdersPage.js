import React, { useEffect, useState } from "react";
import { Badge, Container, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../axios";
import Loading from "../components/Loading";
import "./OrdersPage.css";

function OrdersPage() {
    const user = useSelector((state) => state.user);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`/users/${user._id}/orders`)
            .then(({ data }) => {
                setLoading(false);
                setOrders(data);
            })
            .catch((e) => {
                setLoading(false);
                console.log(e);
            });
    }, [user._id]);

    if (loading) {
        return <Loading />;
    }

    if (orders.length === 0) {
        return <h1 className="text-center pt-3">Aún no hay pedidos</h1>;
    }

    return (
        <Container>
            <h1 className="text-center">Tus ordenes</h1>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr>
                            <td>{order._id}</td>
                            <td>{user.email}</td>
                            <td>
                                <Badge className="Badge" bg={`${order.status === "procesando" ? "advertencia" : "finalizado"}`} text="dark">
                                    {order.status}
                                </Badge>
                            </td>
                            <td>{order.date}</td>
                            <td>$ {order.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default OrdersPage;
