const getItem = (key = 'selectedClient', type = 'object') => {
  let value = localStorage.getItem(key);
  if (type === 'object') value = JSON.parse(value);
  return value;
};

const setItem = (value = null, key = 'selectedClient', type = 'object') => {
  if (!value) return;
  if (type === 'object' && value) value = JSON.stringify(value);
  localStorage.setItem(key, value);
  return;
};

export { getItem, setItem };
