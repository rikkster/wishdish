function getVariant() {

  const page = window.location.pathname.substring(1);
  const variant = page !== "feed" ? page : "feed";
  return variant;

}

export {

  getVariant

}