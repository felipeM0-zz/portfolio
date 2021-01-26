import { api, api_pure } from "./api";
import { GridItemProps } from "../pages/Tecnologies/interfaces";

export const getDataTec = async () => {
  let data: { download_url: string }[] = [];

  // GET URL DOWNLOAD FROM DATAS
  await api
    .get("/portfolio")
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      console.log("Erro: " + error);
    });

  let datas: GridItemProps[] = [];
  let final_datas: GridItemProps[] = [];

  // GET DATAS
  await api_pure.get(data[0].download_url).then((res) => {
    datas = res.data;
  });

  // GET IMAGES
  await api.get("portfolio/images").then((res) => {
    let dt: [{ download_url: string }] = res.data;

    dt.forEach((e, i) => {
      final_datas.push({
        color: datas[i].color,
        desc: datas[i].desc,
        link: datas[i].link,
        name: datas[i].name,
        img: e.download_url,
      });
    });
  });

  return final_datas;
};
