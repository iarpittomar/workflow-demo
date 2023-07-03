import React, { useEffect, useState } from 'react';
import {
  shape,
  bool,
  func,
  arrayOf,
  oneOfType,
  number,
  string,
} from 'prop-types';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Grid from '@mui/material/Grid';

import '../styles.scss';

const ShowNode = ({ node, path, treeIndex, canDrag, nodeAction }) => {
  const handleAddService = () => {
    return nodeAction('NEW', node, path, 'service', false);
  };
  const nodeWidth =
    node?.type === 'logic'
      ? 42
      : node?.type === 'condition'
      ? 350 - path.length * 42
      : node?.type === 'service'
      ? 100
      : 0;
  const nodeTitle = node.title;
  const nodeSubtitle = node.subtitle;
  const className = `rowContents ${
    !canDrag ? `rowContentsDragDisabled` : ''
  } path- ${path.join('-')}`;

  return (
    <div className={className}>
      {node.isService && (
        <Grid container sx={{ paddingTop: '20px' }}>
          <Grid item width="20%" sx={{ paddingLeft: '20px' }}>
            <Button
              variant="contained"
              onClick={handleAddService}
              sx={{ fontSize: '12px' }}
            >
              Add Service
            </Button>
          </Grid>
        </Grid>
      )}

      {!node.isService && (
        <>
          <div
            className="rowLabel"
            onDoubleClick={() => nodeAction('edit', node, path)}
            style={{ width: `${nodeWidth}px`, float: 'left' }}
          >
            <span
              className={`rowTitle${
                node.subtitle ? `rowTitleWithSubtitle` : ''
              }`}
            >
              {typeof nodeTitle === 'function'
                ? nodeTitle({ subnode: node, path, treeIndex })
                : nodeTitle}
            </span>

            {nodeSubtitle && (
              <span className="rowSubtitle">
                {typeof nodeSubtitle === 'function'
                  ? nodeSubtitle({ subnode: node, path, treeIndex })
                  : nodeSubtitle}
              </span>
            )}
          </div>

          <div
            className="rowToolbar"
            style={{ float: 'left', paddingTop: '10px' }}
          >
            <>
              <div className="toolbarButton">
                <Button onClick={() => nodeAction('edit', node, path)}>
                  <ModeEditIcon style={{ color: 'grey' }} />
                </Button>
              </div>
              {(node.type === 'service' || node.type === 'logic') && (
                <>
                  <div className="toolbarButton">
                    <Button
                      onClick={() => nodeAction('new', node, path, 'condition')}
                      icon="add"
                    >
                      Pre Condition
                    </Button>
                  </div>
                  <div className="toolbarButton">
                    <Button
                      onClick={() => nodeAction('new', node, path, 'logic')}
                      icon="add"
                    >
                      Group
                    </Button>
                  </div>
                </>
              )}

              <div className="toolbarButton">
                <Button
                  onClick={() => nodeAction('delete', node, path)}
                  disabled={
                    node.type === 'logic' &&
                    path.length === 1 &&
                    (!node.children || node.children.length === 0)
                  }
                  className="delete"
                >
                  <DeleteIcon style={{ color: 'grey' }} />
                </Button>
              </div>
            </>
          </div>
        </>
      )}
    </div>
  );
};

ShowNode.propTypes = {
  node: shape({}).isRequired,
  path: arrayOf(oneOfType([string, number])).isRequired,
  treeIndex: number.isRequired,
  canDrag: bool.isRequired,
  nodeAction: func.isRequired,
};

export default ShowNode;
