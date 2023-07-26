'use client';
import {
  Card,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  AvatarGroup,
  Icon,
  Box,
  Flex,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { MdSettings, MdLock } from 'react-icons/md';
import FilterModal from './FilterModal';
import React, { useState } from 'react';

const serviceColors = {
  'Auto Ident': '#FE7046',
  'N E': '#114780',
  'Fin Tech': '#0065AF',
  'Verify Eye': '#5BBBC1',
  'Hoo Yu': '#E89456',
  'WebId Sign': '#05B8FF',
  'Joo U': '#92C038',
  'In Ventia': '#C83240',
  'Post Ident': '#FDCA3F',
  'Web Id': '#05B8FF',
};

const ClientsFrontend = () => {
  const tableData = [
    {
      id: 1,
      clientId: '2030',
      name: 'Merkur - Xtip',
      link: 'https://drVerify Eye.google.com/file/d/15wOdDJtm_96bL_tv0ly0CeYC5djhaSjP/view?usp=drive_link',
      createdAt: '2023-05-28',
      services: ['Auto Ident', 'N E', 'Fin Tech'],
      country: 'Italy',
      logo: '/logos/Xtip.jpg'
    },
    {
      id: 2,
      clientId: '2031',
      name: 'Merkur - Cashpoint',
      link: 'https://drive.google.com/file/d/1yMZoAEBz8mgabQgRrAZeK2RZglmx4yFJ/view?usp=sharing',
      createdAt: '2023-05-28',
      services: ['Auto Ident', 'N E', 'Fin Tech'],
      country: 'Germany',
      logo: '/logos/cashpoint.png'
    },
    {
      id: 3,
      clientId: '2032',
      name: 'Merkur - Casino',
      link: 'https://drive.google.com/file/d/1GR9LnjvGO9iz5sZiK0sQgfvkm8BZ4UfD/view?usp=sharing',
      createdAt: '2023-05-28',
      services: ['Auto Ident', 'N E', 'Fin Tech'],
      country: 'Germany',
      logo: '/logos/merkur.webp'
    },
    {
      id: 4,
      clientId: '2030',
      name: 'Merkur - Spiel',
      link: 'https://drive.google.com/file/d/1se5TCBWGJwLmWAnGK0vbZKWaVoKDvcIA/view?usp=sharing',
      createdAt: '2023-05-28',
      services: ['Auto Ident', 'N E', 'Fin Tech'],
      country: 'Austria',
      logo: '/logos/spiel.webp'
    },
    {
      id: 5,
      clientId: '2003',
      name: 'Tiptoro',
      link: 'https://gitlab.mgt.eu/mgt-client-config/configuration-ui',
      createdAt: '2023-05-28',
      services: ['Verify Eye', 'Hoo Yu', 'WebId Sign'],
      country: 'Italy',
      logo: '/logos/tiptorro.jpg'
    },
    {
      id: 6,
      clientId: '2004',
      name: 'Betway',
      link: 'https://gitlab.mgt.eu/mgt-client-config/configuration-ui',
      createdAt: '2023-05-28',
      services: ['Joo U', 'N E', 'In Ventia'],
      country: 'Germany',
      logo: '/logos/betway.png'
    },
    {
      id: 7,
      clientId: '2005',
      name: 'Lowenplay',
      link: 'https://gitlab.mgt.eu/mgt-client-config/configuration-ui',
      createdAt: '2023-05-28',
      services: ['Verify Eye', 'Hoo Yu', 'Joo U'],
      country: 'Germany',
      logo: '/logos/lowenplay.jpg'
    },
    {
      id: 8,
      clientId: '2008',
      name: 'Sportwetten',
      link: 'https://gitlab.mgt.eu/mgt-client-config/configuration-ui',
      createdAt: '2023-05-28',
      services: ['Post Ident', 'Web Id', 'WebId Sign'],
      country: 'Austria',
      logo: '/logos/sportwetten.png'
    },
    {
      id: 9,
      clientId: '2011',
      name: 'Gluecksfall',
      link: 'https://gitlab.mgt.eu/mgt-client-config/configuration-ui',
      createdAt: '2023-05-28',
      services: ['Joo U', 'In Ventia', 'WebId Sign'],
      country: 'Austria',
      logo: '/logos/Gluecksfall.png'
    },
    {
      id: 10,
      clientId: '2014',
      name: 'red Rhino',
      link: 'https://gitlab.mgt.eu/mgt-client-config/configuration-ui',
      createdAt: '2023-05-28',
      services: ['Web Id', 'WebId Sign'],
      country: 'Austria',
      logo: '/logos/redrhino.png'
    },
  ];

  const [clientIndex, setClientIndex] = useState(0);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <FilterModal
        clientId={clientIndex}
        isOpen={isOpen}
        onClose={onClose}
        exportJson={() => {}}
      />
      <Card className="mt-10">
        <TableContainer>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Clinet Id</Th>
                <Th></Th>
                <Th>Clinet Name</Th>
                <Th>Service Used</Th>
                <Th>Country</Th>
                <Th>Script</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>
                      <Image
                        boxSize="50px"
                        objectFit="inherit"
                        src={item.logo}
                        alt="Logo not available"
                      />
                    </Td>
                    <Td>{item.name}</Td>
                    <Td>
                      <AvatarGroup size="md" max={3}>
                        {item.services.map((service, index) => (
                          <Avatar
                            // @ts-ignore
                            //Todo: Fix the lint
                            bg={`${serviceColors[service]}`}
                            color="#fff"
                            key={index}
                            name={service}
                          />
                        ))}
                      </AvatarGroup>
                    </Td>
                    <Td>{item.createdAt}</Td>
                    <Td>{item.createdAt}</Td>
                    <Td>
                      <Flex cursor="pointer" color="blue.700" fontSize="2rem">
                        <Icon
                          as={MdSettings}
                          onClick={() => {
                            setClientIndex(item.id);
                            onOpen();
                          }}
                        />
                        <Icon as={MdLock} />
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default ClientsFrontend;
