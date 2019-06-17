const formatDate = (timeInSeconds) => {
  timeInSeconds = Number(timeInSeconds);
  let hh, mm, ss;
  if (!timeInSeconds) {
    return '0s';
  }
  hh = Math.floor(timeInSeconds / 3600);
  mm = Math.floor(timeInSeconds % 3600 / 60);
  ss = Math.floor(timeInSeconds % 3600 % 60);

  hh = hh === 0 ? '' : `${hh}h `
  mm = mm === 0 ? '' : `${mm}m `
  ss= ss === 0 ? '' : `${ss}s`
  
  return `${hh}${mm}${ss}`.trim();
}

module.exports = formatDate;