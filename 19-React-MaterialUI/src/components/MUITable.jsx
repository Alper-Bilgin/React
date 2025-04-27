import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function MUITable() {
  const rows = [
    { id: 1, firstName: "Alper", lastName: "Bilgin", age: 21 },
    { id: 2, firstName: "Berke", lastName: "çiftçi", age: 22 },
    { id: 3, firstName: "Ahmet", lastName: "Çevik", age: 20 },
    { id: 4, firstName: "Alperen", lastName: "", age: 24 },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>İSİM</TableCell>
          <TableCell>SOYİSİM</TableCell>
          <TableCell>YAŞ</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.firstName}</TableCell>
            <TableCell>{row.lastName}</TableCell>
            <TableCell>{row.age}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default MUITable;
