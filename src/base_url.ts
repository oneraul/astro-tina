let base_url = import.meta.env.BASE_URL;
if (base_url === "/") {
  base_url = "";
}

export default base_url;
