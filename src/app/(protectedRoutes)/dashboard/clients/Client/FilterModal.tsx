'use client';

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
} from '@chakra-ui/react';
import FilterTree from '@/Components/FilterTree';
import React, { useState } from 'react';
import { setItem, getItem } from '@/utils';
interface IFilterModal {
  isOpen: boolean;
  onClose: VoidFunction;
  exportJson: VoidFunction;
}

const FilterModal = ({ isOpen, onClose, clientId }: IFilterModal) => {
  const toast = useToast();
  const [workflowData, setWorkflowData] = useState([]);
  const exportJson = () => {
    const data = getItem(`workflow_${clientId}`);
    if (
      !data ||
      !Array.isArray(data) ||
      !data.length ||
      !data[0].children ||
      !data[0].children.length
    ) {
      toast({
        title: 'Data not found!',
        description: 'No saved workflow found for this client',
        status: 'error',
        duration: 1500,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';
    link.click();
  };

  const onModalClose = () => {
    toast({
      title: 'Thank you!',
      description:
        'We have taken your request and will provide you the services soon.',
      status: 'success',
      duration: 1000,
      isClosable: true,
      position: 'top-right',
    });
    setItem(workflowData, `workflow_${clientId}`);
    // onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Workflow </ModalHeader>
          <ModalCloseButton />
          <ModalBody minH="60vh">
            <FilterTree setWorkflowData={setWorkflowData} clientId={clientId} />
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success mr-4" onClick={exportJson}>
              Download
            </button>
            <button className="btn btn-primary " onClick={onModalClose}>
              Save
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
