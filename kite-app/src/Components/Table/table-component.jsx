import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredSpots } from "../../redux/spotSlice/spotSlice";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { setSelectedSpot } from "../../redux/spotSlice/actions";
import { formatPopUpValueData, sortData } from "../../utils";
import StarIcon from "@mui/icons-material/Star";
import TableSortLabel from "@mui/material/TableSortLabel";

const columns = [
  { id: "name", label: "Name", minWidth: 50 },
  {
    id: "country",
    label: "Country",
    minWidth: 100,
    align: "right",
  },
  {
    id: "latitude",
    label: "Latitude",
    minWidth: 100,
    align: "right",
    format: (value) => Number.parseFloat(value).toFixed(0),
  },

  {
    id: "longitude",
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
const createData = ({ name, lat, long, country, probability, month, id }) => {
  let latitude, longitude;
  const dataToFormat = {
    lat: lat,
    long: long,
  };
  const data = Object.entries(dataToFormat).map((data) =>
    formatPopUpValueData(data)
  );
  latitude = data[0];
  longitude = data[1];
  return { name, country, latitude, longitude, probability, month, id };
};

const TableComponent = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectFilteredSpots);
  const data = state.map((data) => createData(data));
  const stateData = useSelector((data) => data.spots);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortedData, setSortedData] = useState();
  const [activeFilter, setActiveFilter] = useState("");
  const [direction, setDirection] = useState("asc");
  const [tableData, setTableDate] = useState(data);
  const handleRowClick = (e) => {
    const idToFind = e.target.id;
    const dataToFind = state.find((data) => data.id === idToFind);
    dispatch(setSelectedSpot(dataToFind));
    window.scrollTo(0, 0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const toggleDirection = () => {
    if (direction === "asc") setDirection("desc");
    else setDirection("asc");
  };
  const handleSort = (filter) => {
    setActiveFilter(filter);
    toggleDirection();
    const sorted = sortData(data, filter, direction);
    setSortedData(sorted);
    setTableDate(sorted);
  };
  useEffect(() => {
    setTableDate(state);
  }, [state]);
  const TableMain = () => {
    

    return tableData
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row) => {
        const isFavourite =
          stateData.favorites?.find((fav) => fav.spot === Number(row.id)) !==
          undefined;

        return (
          <TableRow hover key={row.id} onClick={(e) => handleRowClick(e)}>
            {columns.map((column) => {
              const value = row[column.id];
              return column.id === "name" && isFavourite ? (
                <TableCell
                  key={column.id}
                  align={column.align}
                  id={row.id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <StarIcon sx={{ color: "orange" }} />
                  {column.format && typeof value === "number"
                    ? column.format(value)
                    : value}
                </TableCell>
              ) : (
                <TableCell key={column.id} align={column.align} id={row.id}>
                  {column.format && typeof value === "number"
                    ? column.format(value)
                    : value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      });
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
                  {column.id === "name" ||
                  column.id === "probability" ||
                  column.id === "month" ? (
                    <TableSortLabel
                      style={{ color: "white" }}
                      onClick={() => handleSort(column.id)}
                    />
                  ) : null}

                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableMain />
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default TableComponent;
