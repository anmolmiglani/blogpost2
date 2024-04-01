import Axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToApi = (form) => {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("title", form.title);
    data.append("body", form.body);
    data.append("image", form.image);

    Axios.post("http://localhost:4000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log("post success: ", res);
        resolve(res); // Resolve the promise with the response
      })
      .catch((err) => {
        console.log("err: ", err);
        reject(err); // Reject the promise with the error
      });
  });
};

export const updateToApi = (form, id) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);

  Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  })
    .then((res) => {
      console.log("update success: ", res);
    })
    .catch((err) => {
      console.log("err: ", err);
    });
};
