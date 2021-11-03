function checkLoker(noLoker) {
  switch (true) {
    case noLoker <= 5:
      return 'Lantai 1';
    case noLoker > 5 && noLoker <= 11:
      return 'Lantai 2';
    case noLoker > 11 && noLoker <= 18:
      return 'Lantai 3';
    case noLoker > 18 && noLoker <= 23:
      return 'Lantai 4';
    case noLoker > 23 && noLoker <= 29:
      return 'Lantai 5';
    case noLoker > 29 && noLoker <= 36:
      return 'Lantai 6';
    default:
      return 'Loker Tidak Ada';
  }
}

console.log(checkLoker(19));
