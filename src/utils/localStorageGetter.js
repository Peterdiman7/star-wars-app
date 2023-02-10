export const setCacheVal = (key, val) =>
  window.localStorage.setItem(key, JSON.stringify(val));

export const getCacheVal = key => {
    const strValue = window.localStorage.getItem(key);
    let value = null;
    try {
      value = JSON.parse(strValue);
    } catch (e) {
      value = strValue;
    }
  
    return value;
  };