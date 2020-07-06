let index = 0;
const decrease = () => {
  if (index > 0) {
    index--;
    document.body.className = `step${index}-left-initial`;
    void document.documentElement.offsetHeight;
    document.body.className = `step${index}-left`;
  }
};
const increase = () => {
  if (index < 3) {
    index++;
    document.body.className = `step${index}-initial`;
    void document.documentElement.offsetHeight;
    document.body.className = `step${index}`;
  }
};
