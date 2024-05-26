export const  formatHumanReadableDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleString('en-US', options);
  }

export const prepareContent = (fullText) => {
    const words = fullText.split(' ');

    if (words.length > 26) {
      const truncatedText = words.slice(0, 26).join(' ') + '...';
      return truncatedText;
    } else {
      return fullText;
    }
  }