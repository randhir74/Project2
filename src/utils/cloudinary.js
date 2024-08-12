import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (loclFilePath) => {
  try {
    if (!loclFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(loclFilePath, {
      resource_type: "auto",
    });
    //File has been uploaded successfully
    // console.log("File is uploaded on cloudinary ", response.url);
    console.log("Cloudinary response: ", response);
    fs.unlinkSync(loclFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(loclFilePath); // Remove locally saved temporary file as the upload operation got failed
    return null;
  }
};

export { uploadOnCloudinary };
