import React, { useState } from 'react';
import { arrayOf, func, oneOfType, number, shape, string } from 'prop-types';
import { BasicSelect as DropDownList } from '../../../select';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const operators = [
  { label: 'Not Started', key: 'operator', value: 'Not Started' },
  { label: 'Started', key: 'operator', value: 'Started' },
  { label: 'Succeeded', key: 'operator', value: 'Succeeded' },
  { label: 'Failed', key: 'operator', value: 'Failed' },
  { label: 'Succeeded', key: 'operator', value: 'Succeeded' },
  { label: 'Down', key: 'operator', value: 'Down' },
];
const fields = [
  { label: 'Identt', value: 'Identt', key: 'Identt' },
  { label: 'Hooyu', value: 'Hooyu', key: 'Hooyu' },
  { label: 'Verifeye', value: 'Verifeye', key: 'Verifeye' },
  { label: 'AutoIdent', value: 'AutoIdent', key: 'AutoIdent' },
  { label: 'PostIdent', value: 'PostIdent', key: 'PostIdent' },
  { label: 'Authada', value: 'Authada', key: 'Authada' },
  { label: 'Fintec', value: 'Fintec', key: 'Fintec' },
  { label: 'Jumio', value: 'Jumio', key: 'Jumio' },
  { label: 'ATrust', value: 'ATrust', key: 'ATrust' },
  { label: 'WebId', value: 'WebId', key: 'WebId' },
  { label: 'WebIdSign', value: 'WebIdSign', key: 'WebIdSign' },
  { label: 'IdAustria', value: 'IdAustria', key: 'IdAustria' },
  { label: 'Neos', value: 'Neos', key: 'Neos' },
  { label: 'ItsMe', value: 'ItsMe', key: 'ItsMe' },
  { label: 'Yes', value: 'Yes', key: 'Yes' },
  { label: 'Schufa', value: 'Schufa', key: 'Schufa' },
];
const EditNodeCondition = ({ node, path, nodeAction }) => {
  const [field, setField] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');

  const onSubmit = () => {
    const newNode = { ...node, field, value, operator };
    nodeAction('save', newNode, path);
  };

  const handleChange = (event, type) => {
    let value = event?.value;
    switch (type) {
      case 'field':
        setField(value);
        break;
      case 'operator':
        setOperator(value);
        break;
      case 'value':
        setValue(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="rowContents">
      <div className="rowLabel mode-edit" style={{ width: '650px' }}>
        <div style={{ width: '300px', marginRight: '6px' }}>
          <DropDownList
          label="Select a service"
            value={field}
            items={fields}
            handleChange={(event) => handleChange(event, 'field')}
          />
        </div>
        <div style={{ width: '200px', marginRight: '6px' }}>
          <DropDownList
          label="Select a pre condition"
            value={operator}
            items={operators}
            handleChange={(event) => handleChange(event, 'operator')}
          />
        </div>
        {/* <div
          className="row-condition-value"
          style={{ width: '300px', marginRight: '6px' }}
        >
          <TextField
            // placeholder="Add a value"
            className="condition-value"
            id="value"
            value={value}
            onChange={(event) => handleChange(event, 'value')}
          />
        </div> */}
      </div>
      <div className="rowToolbar">
        <div className="toolbarButton">
          <Button id="checkmark" onClick={onSubmit}>
            <CheckIcon style={{ color: 'grey' }} />
          </Button>
        </div>
        <div className="toolbarButton">
          <Button onClick={() => nodeAction('cancel', node, path)} id="cancel">
            <CloseIcon style={{ color: 'grey' }} />
          </Button>
        </div>
      </div>
    </div>
  );
};
EditNodeCondition.propTypes = {
  node: shape({}).isRequired,
  path: arrayOf(oneOfType([string, number])).isRequired,
  nodeAction: func.isRequired,
};

export default React.memo(EditNodeCondition);
