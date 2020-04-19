import React, { useState } from "react";
import {
  Box,
  Text,
  Stat,
  StatGroup,
  StatArrow,
  StatLabel,
  StatNumber,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core";

const Home = () => {
  const [modalVisible, toggleModal] = useState(false);

  const toggleTransactionModal = () => {
    toggleModal(!modalVisible);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Modal isOpen={modalVisible} onClose={toggleTransactionModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Transaction</ModalHeader>
          <ModalBody>
            <Text>Form</Text>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={toggleTransactionModal}>
              Close
            </Button>
            <Button variantColor="green">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box width="50%">
        <Box paddingTop="20px">
          <Text fontSize="18px">Balance</Text>
          <Text fontSize="24px" fontWeight="bold">
            $546.00
          </Text>
          <StatGroup
            marginTop="20px"
            borderColor="grey.50"
            border="1px"
            borderRadius="5px"
            padding="10px"
            marginBottom="10px"
          >
            <Stat>
              <StatLabel>Income</StatLabel>
              <StatNumber>
                <StatArrow type="increase" />
                $345,670
              </StatNumber>
            </Stat>
            <Stat>
              <StatLabel>Expenses</StatLabel>
              <StatNumber>
                <StatArrow type="decrease" />
                $100,670
              </StatNumber>
            </Stat>
          </StatGroup>
          <Box display="flex" justifyContent="flex-end">
            <Button variantColor="green" onClick={toggleTransactionModal}>
              Add Transaction
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
