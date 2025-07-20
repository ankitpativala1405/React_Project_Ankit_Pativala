import React from "react";
// import { useNavigate } from "react-router";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Link } from "react-router-dom";

const TableComponent = ({ rows }) => {

  // const navigate = useNavigate()

  return (
    <div className="overflow-x-auto">
      <div className="container mx-auto p-10">
        <Table hoverable>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Email</TableHeadCell>
              <TableHeadCell>Number</TableHeadCell>
              <TableHeadCell>Password</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y">
            {rows.map((row, index) => (
              <TableRow
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.password}</TableCell>
                <TableCell>
                  <Link
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    //  onClick={() => navigate(`/edit/${row.id}`)} 
                    to={`/edit/${row.id}`}
                  >
                    Edit
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableComponent;
