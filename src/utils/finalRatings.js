const finalRatings = (totalRatings, found, setAuthorsState) => {
  totalRatings.map(async rating => {
    if (rating.averageRatings === 5) {
      if (!found(rating)) {
        await setAuthorsState(rating);
      }
    } else if (rating.averageRatings === 4) {
      if (!found(rating)) {
        await setAuthorsState(rating);
      }
    } else if (rating.averageRatings === 3) {
      if (!found(rating)) {
        await setAuthorsState(rating);
      }
    } else if (rating.averageRatings === 2) {
      if (!found(rating)) {
        await setAuthorsState(rating);
      }
    } else if (rating.averageRatings === 1) {
      if (!found(rating)) {
        await setAuthorsState(rating);
      }
    }
  });
}

export default finalRatings;