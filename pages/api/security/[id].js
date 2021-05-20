export default async function securityHandler({ query: { id } }, res) {
  async function sleep(msec) {
    return new Promise((resolve) => setTimeout(resolve, msec));
  }

  let data = {};
  if (id == 1) {
    data.view = ["SEARCH", "GRID", "ADD"];
    data.access = ["EDIT", "DELETE", "VIEW", "ADD"];
  } else if (id == 2) {
    data.view = ["SEARCH", "GRID", "ADD"];
    data.access = ["VIEW"];
  }
  await sleep(500);
  res.status(200).json(data);
}
