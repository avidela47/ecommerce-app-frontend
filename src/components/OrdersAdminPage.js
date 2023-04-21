import React, { useEffect, useState } from "react";
import { Badge, Button, Modal, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "../axios";
import Loading from "./Loading";
import Pagination from "./Pagination";

function OrdersAdminPage() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const products = useSelector((state) => state.products);
    const [orderToShow, setOrderToShow] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    function markShipped(orderId, ownerId) {
        axios
            .patch(`/orders/${orderId}/mark-shipped`, { ownerId })
            .then(({ data }) => setOrders(data))
            .catch((e) => console.log(e));
    }

    function showOrder(productsObj) {
        let productsToShow = products.filter((product) => productsObj[product._id]);
        productsToShow = productsToShow.map((product) => {
            const productCopy = { ...product };
            productCopy.count = productsObj[product._id];
            delete productCopy.description;
            return productCopy;
        });
        console.log(productsToShow);
        setShow(true);
        setOrderToShow(productsToShow);
    }

    useEffect(() => {
        setLoading(true);
        axios
            .get("/orders")
            .then(({ data }) => {
                setLoading(false);
                setOrders(data);
            })
            .catch((e) => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (orders.length === 0) {
        return <h1 className="text-center pt-4">Aún no hay pedidos</h1>;
    }

    function TableRow({ _id, count, owner, total, status, products, address }) {
        return (
            <tr>
                <td>{_id}</td>
                <td>{owner?.name}</td>
                <td>{count}</td>
                <td>$ {total}</td>
                <td>{address}</td>
                <td>
                    {status === "procesando" ? (
                        <Button variant="outline-primary" size="sm" onClick={() => markShipped(_id, owner?._id)}>
                            Marcar como enviado
                        </Button>
                    ) : (
                        <Badge bg="success">Enviado</Badge>
                    )}
                </td>
                <td>
                    <span style={{ cursor: "pointer" }} onClick={() => showOrder(products)}>
                    Ver pedido <i className="fa fa-eye"></i>
                    </span>
                </td>
            </tr>
        );
    }

    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre Cliente</th>
                        <th>Cantidad</th>
                        <th>Total Compra</th>
                        <th>Direccion</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <Pagination data={orders} RenderComponent={TableRow} pageLimit={1} dataLimit={10} tablePagination={true} />
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalle de la compra</Modal.Title>
                </Modal.Header>
                {orderToShow.map((order) => (
                    <>
                    <div className="order-details__container d-flex justify-content-around py-2">
                        <img src={order.pictures[0].url} style={{ maxWidth: 100, height: 100, objectFit: "cover" }} alt=''/>
                        <p>
                            <span>{order.count} unidad/es de: </span> {order.name}<hr></hr>
                        </p>
                        </div>
                        <div className="order-details__container d-flex justify-content-around py-2">
                        <p>Total a pagar: $ {Number(order.price) * order.count}</p>
                        
                    </div>
                    </>
                ))}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default OrdersAdminPage;
