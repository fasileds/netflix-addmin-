import "./productsList.css";
import { DataGrid } from "@mui/x-data-grid";
import { productrows } from "../../dumyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { DeleteOutline } from "@mui/icons-material";
export default function ProductsList() {
  const [data, setData] = useState(productrows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img className="productImageList" src={params.row.image} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stacks", headerName: "stacks", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "price",
      sortable: false,
      width: 160,
    },
    {
      field: "Action",
      headerName: "Action",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <Link to={"/product/:" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
