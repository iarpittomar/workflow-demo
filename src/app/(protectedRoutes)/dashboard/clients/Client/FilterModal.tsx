"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import FilterTree from "@/Components/FilterTree";

interface IFilterModal {
  isOpen: boolean;
  onClose: VoidFunction;
}

const FilterModal = ({ isOpen, onClose }: IFilterModal) => {
  const toast = useToast();
  const onModalClose = () => {
    toast({
      title: "Thank you!",
      description:
        "We have taken your request and will provide you the services soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Your Services</ModalHeader>
          <ModalCloseButton />
          <ModalBody minH="70vh">
            <FilterTree />
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={onModalClose}>
              Done
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
