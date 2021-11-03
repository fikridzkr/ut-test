let lantai = 1;
let i = 1;
function checkLoker(noLoker) {
  let text = `Lantai ${lantai}`;
  while (i <= 5 * lantai) {
    // console.log(i);
    if (noLoker === i) {
      text = `Lantai ${lantai}`;
      break;
    } else {
      if (i === 5 * lantai) {
        lantai++;
        break;
      }
      i++;
    }
  }
  while (i <= 6 * lantai) {
    if (i === 6 * lantai) {
      lantai++;
    }
    if (noLoker === i) {
      text = `Lantai ${lantai}`;
      break;
    }
    i++;
  }

  while (i <= 7 * lantai - 2) {
    if (i === 7 * lantai - 2) {
      lantai++;
    }
    if (noLoker === i) {
      text = `Lantai ${lantai}`;
      break;
    }
    // console.log(i);
    i++;
  }

  return text;
}

console.log(checkLoker(24));
