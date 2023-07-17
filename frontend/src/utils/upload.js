import axios from "axios";

const cloud_name = process.env.REACT_APP_CLOUD_NAME;

export const uploadFiles = async (files) => {
  let formData = new FormData();
  formData.append("upload_preset", "qkdeq6fq");
  let uploaded = [];
  for (const f of files) {
    const { file, type } = f;
    formData.append("file", file);
    let res = await uploadToCloundinary(formData);
    uploaded.push({
      file: res,
      type: type,
    });
  }
  return uploaded;
};

const uploadToCloundinary = async (formData) => {
  return new Promise(async (resolve) => {
    return await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/raw/upload`,
        formData
      )
      .then(({ data }) => {
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
};
