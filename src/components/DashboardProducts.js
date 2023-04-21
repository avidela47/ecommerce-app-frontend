import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../services/appApi";
import "./DashboardProducts.css";
import Pagination from "./Pagination";

function DashboardProducts() {
    const products = useSelector((state) => state.products);
    const user = useSelector((state) => state.user);
    // removing the product
    const [deletProduct, { isLoading }] = useDeleteProductMutation();
    function handleDeleteProduct(id) {
        // logic here
        if (window.confirm("Estas seguro")) deletProduct({ product_id: id, user_id: user._id });
    }

    function TableRow({ pictures, _id, name, price }) {
        return (
            <tr>
                <td>
                    <img src={pictures[0].url} className="dashboard-product-preview" alt=""/>
                </td>
                <td>{_id}</td>
                <td>{name}</td>
                <td>$ {price}</td>
                <td>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDeleteProduct(_id, user._id)} disabled={isLoading}>
                        Borrar
                    </Button>
                    <Link to={`/product/${_id}/edit`} className="btbd btn btn-outline-warning btn-sm">
                        Editar
                    </Link>
                </td>
            </tr>
        );
    }

    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Imagen producto</th>
                    <th>ID Producto</th>
                    <th>Nombre Producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <Pagination data={products} RenderComponent={TableRow} pageLimit={1} dataLimit={5} tablePagination={true} />
            </tbody>
        </Table>
    );
}

export default DashboardProducts;
