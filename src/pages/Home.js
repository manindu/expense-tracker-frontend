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
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";

const Home = () => {
  const [modalVisible, toggleModal] = useState(false);

  const toggleTransactionModal = () => {
    toggleModal(!modalVisible);
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      type: "Income",
      note: "",
      amount: 0,
    },
    validationSchema: Yup.object({
      type: Yup.string().required(),
      note: Yup.string().required(),
      amount: Yup.number().required(),
    }),
    onSubmit: (values) => {
      console.log(values);
      toggleTransactionModal();
    },
  });

  return (
    <Box display="flex" justifyContent="center">
      <Modal isOpen={modalVisible} onClose={toggleTransactionModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Transaction</ModalHeader>
          <ModalBody>
            <FormControl isRequired mb="10px">
              <FormLabel htmlFor="type">Transaction Type</FormLabel>
              <Select
                id="type"
                onChange={(event) => setFieldValue("type", event.target.value)}
                value={values.type}
              >
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </Select>
              <FormErrorMessage>"some error"</FormErrorMessage>
            </FormControl>
            <FormControl isRequired mb="10px">
              <FormLabel htmlFor="note">Note</FormLabel>
              <Input
                id="note"
                placeholder="Note"
                onChange={handleChange}
                value={values.note}
              />
              <FormErrorMessage>"some error"</FormErrorMessage>
            </FormControl>
            <FormControl isRequired mb="10px">
              <FormLabel htmlFor="amount">Amount</FormLabel>
              <NumberInput
                onChange={(value) => setFieldValue("amount", value)}
                id="amount"
                precision={2}
                defaultValue={0}
                value={values.amount}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>"some error"</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={toggleTransactionModal}>
              Close
            </Button>
            <Button variantColor="green" onClick={handleSubmit}>
              Add
            </Button>
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
