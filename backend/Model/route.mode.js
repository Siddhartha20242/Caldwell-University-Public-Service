import mongoose from 'mongoose';

const routeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    stops: [{
        name: { 
            type: String, 
            required: true 
        },
        location: {
            type: { 
                type: String, 
                default: 'Point' 
            },
            coordinates: [Number]
        }
    }],
    schedule: [{
        dayOfWeek: { 
            type: Number, 
            min: 0, 
            max: 6 
        },
        departureTime: String
    }]
}, { timestamps: true });

export const Route = mongoose.model('Route', routeSchema);
