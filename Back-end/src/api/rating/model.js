import mongoose, { Schema } from 'mongoose'

const KIND = ['User', 'Component'];

const ratingSchema = new Schema({
  reviewer: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  related_object: {
    type: Schema.Types.ObjectId,
    refPath: 'kind',
    required: true
  },
  kind: {
    type: String,
    trim: true,
    required: true,
    enum: KIND
  },
  description: {
    type: String,
    trim: true
  },
  rate: {
    type: Number,
    min: 0
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

ratingSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      reviewer: this.reviewer.view(full),
      related_object: this.related_object,
      kind: this.kind,
      description: this.description,
      rate: this.rate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Rating', ratingSchema)

export const schema = model.schema
export default model
