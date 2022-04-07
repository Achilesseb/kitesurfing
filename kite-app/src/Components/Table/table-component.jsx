import React, { useState } from "react";
import "./table-component.styles.scss";
import { useSelector } from "react-redux";
import { selectFilteredSpots } from "../../redux/reducer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { setSelectedSpot } from "../../redux/actions";

const columns = [
  { id: "name", label: "Name", minWidth: 50 },
  {
    id: "country",
    label: "Country",
    minWidth: 100,
    align: "right",
  },
  {
    id: "lat",
    label: "Latitude",
    minWidth: 100,
    align: "right",
    format: (value) => Number.parseFloat(value).toFixed(0),
  },

  {
    id: "long",
    label: "Longitude",
    minWidth: 50,
    align: "right",
    format: (value) => Number.parseFloat(value).toFixed(0),
  },

  {
    id: "month",
    label: "Month",
    minWidth: 50,
    align: "right",
  },
  {
    id: "probability",
    label: "Wind Probability",
    minWidth: 10,
    align: "right",
  },
];
function createData({ name, lat, long, country, probability, month }) {
  return { name, country, lat, long, probability, month };
}

const TableComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectFilteredSpots);
  const data = state.map((data) => createData(data));
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleRowClick = (e) => {
    console.log(e.target);
    const nameToFind = e.target.innerText;
    const dataToFind = state.find((data) => data.name === nameToFind);
    return dispatch(setSelectedSpot(dataToFind));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", margin: "0" }}>
      <TableContainer sx={{ maxHeight: 300 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#282c34e5",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    key={row.code}
                    onClick={handleRowClick}
                    sx={{ zIndex: "0" }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ zIndex: "-1" }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
