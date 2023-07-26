'use client';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
  useDisclosure,
  // ModalFooter,
  // ModalCloseButton,
  // Button,
} from '@chakra-ui/react';

import FilterTree from '@/Components/FilterTree';
import ConfirmModal from './DialogBox/ConfirmModal';
import React, { useState } from 'react';
import { setItem, getItem } from '@/utils';
interface IFilterModal {
  isOpen: boolean;
  onClose: VoidFunction;
  exportJson: VoidFunction;
  clientId: number;
}
interface IFilterModal {
  isOpen: boolean;
  onClose: VoidFunction;
  exportJson: VoidFunction;
  clientId: number;
}

const FilterModal = ({ isOpen, onClose, clientId }: IFilterModal) => {
  const toast = useToast();
  const [workflowData, setWorkflowData] = useState();
  const {
    isOpen: isConfirmOpen,
    onOpen: isConfirmOnOpen,
    onClose: isConfirmClose,
  } = useDisclosure();

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

  const saveData = () => {
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
  };

  return (
    <>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onClose={isConfirmClose}
        closeFilter={onClose}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        scrollBehavior={'inside'}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div>Workflow</div>
            <div className="float-left">
              <button className="btn btn-error mr-4 w-20" onClick={exportJson}>
                Download
              </button>
              <button className="btn btn-success mr-4 w-20" onClick={saveData}>
                Save
              </button>
              <button className="btn btn-accent w-20" onClick={isConfirmOnOpen}>
                Cancel
              </button>
            </div>
          </ModalHeader>

          {/* <ModalCloseButton onClick={onModalClose} /> */}
          <ModalBody minH="60vh">
            <FilterTree setWorkflowData={setWorkflowData} clientId={clientId} />
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
