const spliceString = (str: string, idx: number, rem: number, text: string): string => {
  // rem - delCount An integer indicating the number of old chars to remove.
  return str.slice(0, idx) + text + str.slice(idx + Math.abs(rem));
};

// Return date as string in format: MM DDth, YY
const normilizeISOFormatDate = (date: string) => {
  const fromtedDate = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  return spliceString(fromtedDate, 6, 0, 'th');
};

export default normilizeISOFormatDate;
