import mongoose, { Schema } from 'mongoose'
import mongooseKeywords from 'mongoose-keywords'

const componentSchema = new Schema({
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  iamges: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }]
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

componentSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      description: this.description,
      iamges: this.iamges,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

componentSchema.plugin(mongooseKeywords, { paths: ['title'] });
const model = mongoose.model('Component', componentSchema)

export const schema = model.schema
export default model
