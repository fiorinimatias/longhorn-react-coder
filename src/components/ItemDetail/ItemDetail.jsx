import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Text, ButtonGroup, Image, Divider, Flex,
} from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({ nombre, descripcion, img, precio, stock }) => {
  const onAdd = (quantity) => {
    toast(`agregaste ${quantity} cervezas: "${nombre}"`);
  };

  return (
    <Card cursor={"default"} borderRadius={"none"} mt={'24'}>
      <CardBody p={'1'} align={"center"} w={"250px"} h={"150px"}>
        <Image src={img} alt={nombre} h={"220px"} objectFit={"cover"}/>

        <Stack mt="2" spacing="2">
          <Heading color="#30341c" textAlign={"center"} size="sm">
            {nombre}
          </Heading>

          <Text textAlign={"center"} color="#30341c" fontSize="xl">
            ${precio}
          </Text>

          <Text color="#30341c" fontSize={'12'} lineHeight={'1.1'} textAlign={"center"}>{descripcion}</Text>
        </Stack>
      </CardBody>

      <Divider color="#dddfbb" />

      <CardFooter justifyContent={'center'}>
          <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
      </CardFooter>
      <ToastContainer />
    </Card>
  );
};

export default ItemDetail;