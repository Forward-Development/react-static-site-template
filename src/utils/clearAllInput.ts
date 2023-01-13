const clearAllInput = () => {
  document.querySelectorAll('input[type="text"]').forEach((v) => {
    (v as HTMLInputElement).value = '';
  });
};

export default clearAllInput;
