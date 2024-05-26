import mongoose, { Schema } from "mongoose";

const subtitleSchema = new Schema({
    filePath: {
      required: true,
      type: String
    },
    releaseName: {
      required: true,
      type: String
    },
    releaseInfo: {
      required: true,
      type: String
    },
    runtime: {
      required: false,
      type: String
    },
    releaseType: {
      required: false,
      type: String
    },
    productionType: {
      required: false,
      type: String
    },
    framerate: {
      required: false,
      type: Number
    },
    
  });

export const subtitleModel = mongoose.models.subtitles ?? mongoose.model("subtitles", subtitleSchema);