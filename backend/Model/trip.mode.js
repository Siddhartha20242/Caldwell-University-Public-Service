import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
    route: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Route', 
        required: true 
    },
    vehicle: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Vehicle', 
        required: true 
    },
    driver: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    startTime: { 
        type: Date, 
        required: true 
    },
    endTime: Date,
    status: { 
        type: String, 
        enum: ['scheduled', 'in-progress', 'completed', 'cancelled'], 
        default: 'scheduled' 
    }
}, { timestamps: true });

export const Trip = mongoose.model('Trip', tripSchema);
