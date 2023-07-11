import { BsPatchPlus } from "react-icons/bs";
import { LuTrash2 } from "react-icons/lu";
import "./Admin.css";
import { useState } from "react";

function AddImage() {
  const [image, setImage] = useState(null);
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }
  const uploadImage = async (event) => {
    var file = event.target.files[0];
    
    if (event.target.files && file) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image1: e.target.result });
      };
      setImage(URL.createObjectURL(file));
      document.getElementById("upload-img").classList.add("hidden");
      document.getElementById("show-img").classList.remove("hidden");
      const formData = new FormData();
      formData.append("file", file);
      const base64 = await convertBase64(file)
      console.log(base64);
      // const {data}=await axios.post(apiUploadImage, formData);
      // setUploadImage(data);
    }
  };

  const removeUpload = () => {
    setImage(null);
    document.getElementById("upload-img").classList.remove("hidden");
    document.getElementById("show-img").classList.add("hidden");
  };
  return (
    <div className="w-[150px]">
      <div
        className="w-[150px] h-[150px] border-1 border-dashed border-[var(--main)] relative"
        id="upload-img"
      >
        <div className="absolute top-[50%] left-[50%] transform-50">
          <BsPatchPlus className="text-[1.8em] text-[var(--main)]" />
        </div>
        <input
          className="absolute m-0 p-0 w-full h-full opacity-0 cursor-pointer"
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={uploadImage}
        />
      </div>
      <div
        className="w-[150px] h-[150px] border-1 border-solid border-[var(--main)] relative add-product-show-image hidden"
        id="show-img"
      >
        <div className="absolute m-auto w-full h-full flex justify-center">
          <img src={image} alt="" className="w-full h-full p-0" />
        </div>
        <div
          className="hidden absolute bottom-0 w-full h-fit p-1 bg-[#000000a3] cursor-pointer justify-center hover:bg-[#ff00008a]"
          onClick={removeUpload}
        >
          <LuTrash2 className="svg-white text-[1.5em]" />
        </div>
      </div>
      <span className="w-full text-center mt-2 block">Ảnh bìa</span>
    </div>
  );
}

export default AddImage;
