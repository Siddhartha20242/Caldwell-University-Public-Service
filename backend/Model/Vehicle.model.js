import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    vehicleNumber: { 
        type: String, 
        required: true, 
        unique: true 
    },
    type: { 
        type: String, 
        enum: ['bus', 'shuttle', 'van'], 
        required: true 
    },
    capacity: { 
        type: Number, 
        required: true 
    },
    currentLocation: {
        type: { 
            type: String, 
            default: 'Point' 
        },
        coordinates: [Number]
    },
    route: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Route' 
    },
    driver: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    status: { 
        type: String, 
        enum: ['active', 'inactive', 'maintenance'], 
        default: 'active' 
    }
}, { timestamps: true });

vehicleSchema.index({ currentLocation: '2dsphere' });

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);
