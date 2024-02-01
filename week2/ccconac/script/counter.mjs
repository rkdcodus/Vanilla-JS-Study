export const counter = (count, event) => {
  switch (event.target.id) {
    case 'divide':
      count = Math.round(count / 2);
      break;
    case 'decrease':
      count -= 1;
      break;
    case 'reset':
      count = 0;
      break;
    case 'increase':
      count += 1;
      break;
    case 'multiply':
      count *= 2;
      break;
    default:
      return count;
  }

  return count;
};
