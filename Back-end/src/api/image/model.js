import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

const imageSchema = new Schema({
  originalname: {
    type: String,
    trim: true
  },
  encoding: {
    type: String,
    trim: true
  },
  mimetype: {
    type: String,
    trim: true
  },
  destination: {
    type: String,
    trim: true
  },
  filename: {
    type: String,
    trim: true
  },
  path: {
    type: String,
    trim: true
  },
  size: {
    type: Number
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

imageSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      originalname: this.originalname,
      encoding: this.encoding,
      mimetype: this.mimetype,
      destination: this.destination,
      filename: this.filename,
      path: this.path,
      size: this.size,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}
imageSchema.pre('save', function(next) {
  this.path = this.path.replace('src/', '');
  next();
})

imageSchema.plugin(mongooseKeywords, { paths: ['originalname'] });
const model = mongoose.model('Image', imageSchema)

export const schema = model.schema
export default model
