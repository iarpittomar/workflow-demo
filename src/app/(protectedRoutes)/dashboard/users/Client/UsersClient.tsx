"use client";
import {
  Card,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

const UsersClient = () => {
  const tableData = [
    {
      id: 1,
      clientId: "2030",
      name: "Merkur - Case 1",
      link: "https://drive.google.com/file/d/15wOdDJtm_96bL_tv0ly0CeYC5djhaSjP/view?usp=drive_link",
      createdAt: "2023-05-28",
    },
    {
      id: 2,
      clientId: "2031",
      name: "Merkur - Case 2",
      link: "https://drive.google.com/file/d/1yMZoAEBz8mgabQgRrAZeK2RZglmx4yFJ/view?usp=sharing",
      createdAt: "2023-05-28",
    },
    {
      id: 3,
      clientId: "2032",
      name: "Merkur - Case 3",
      link: "https://drive.google.com/file/d/1GR9LnjvGO9iz5sZiK0sQgfvkm8BZ4UfD/view?usp=sharing",
      createdAt: "2023-05-28",
    },
    {
      id: 4,
      clientId: "2030",
      name: "Merkur - Case 4",
      link: "https://drive.google.com/file/d/1se5TCBWGJwLmWAnGK0vbZKWaVoKDvcIA/view?usp=sharing",
      createdAt: "2023-05-28",
    },
    {
      id: 5,
      clientId: "2003",
      name: "Tiptoro",
      link: "https://gitlab.mgt.eu/mgt-client-config/configuration-ui",
      createdAt: "2023-05-28",
    },
    {
      id: 6,
      clientId: "2004",
      name: "Betago",
      link: "https://gitlab.mgt.eu/mgt-client-config/configuration-ui",
      createdAt: "2023-05-28",
    },
    {
      id: 7,
      clientId: "2005",
      name: "Lowenplay",
      link: "https://gitlab.mgt.eu/mgt-client-config/configuration-ui",
      createdAt: "2023-05-28",
    },
    {
      id: 8,
      clientId: "2008",
      name: "Sportwetten",
      link: "https://gitlab.mgt.eu/mgt-client-config/configuration-ui",
      createdAt: "2023-05-28",
    },
    {
      id: 9,
      clientId: "2011",
      name: "Gluecksfall",
      link: "https://gitlab.mgt.eu/mgt-client-config/configuration-ui",
      createdAt: "2023-05-28",
    },
    {
      id: 10,
      clientId: "2014",
      name: "red Rhino",
      link: "https://gitlab.mgt.eu/mgt-client-config/configuration-ui",
      createdAt: "2023-05-28",
    },
  ];

  return (
    <Card className="mt-12">
      <TableContainer className="">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Gender</Th>
              <Th>Mobile</Th>
              <Th>Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{item.createdAt}</Td>
                  <Td>{item.createdAt}</Td>
                </Tr>
              );
            })}
          </Tbody>
          {/* <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th isNumeric>multiply by</Th>
                </Tr>
              </Tfoot> */}
        </Table>
      </TableContainer>
    </Card>
  );
};

export default UsersClient;
