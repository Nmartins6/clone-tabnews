function status(request, response) {
  response.status(200).json({ key: "text value" });
}

export default status;
