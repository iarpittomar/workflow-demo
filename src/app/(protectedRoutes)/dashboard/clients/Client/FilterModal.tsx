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
import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
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
  const inputFile = useRef(null);
  // const [fileData, setFile] = useState();

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

  const saveData = (data:any = []) => {
    toast({
      title: 'Thank you!',
      description:
        'We have taken your request and will provide you the services soon.',
      status: 'success',
      duration: 1000,
      isClosable: true,
      position: 'top-right',
    });
    let loadData = data.length ? data : workflowData;
    setItem(loadData, `workflow_${clientId}`);
    onClose();
  };

  const onImport = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileReader = new FileReader();
      fileReader.readAsText(e.target.files[0], 'UTF-8');
      fileReader.onload = (e) => {
        //@ts-ignore
        saveData(JSON.parse(e.target.result));
      };
    }
  };

  const onImportClick = () => {
    if (inputFile?.current) {
      //@ts-ignore
      inputFile.current.click();
    }
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
            <div className="flex float-right">
              <button
                className="btn btn-warning mr-4 w-20"
                onClick={onImportClick}
              >
                Import
                <input
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                  ref={inputFile}
                  onChange={onImport}
                />
              </button>
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
            <FilterTree
              setWorkflowData={setWorkflowData}
              clientId={clientId}
              // importedData={fileData}
            />
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterModal;
