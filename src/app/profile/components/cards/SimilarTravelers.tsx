import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Calendar,
    Wallet,
    Flag,
    Heart,
    CheckCircle2,
    Star,
    ShieldCheck,
    User,
    Eye,
    UserPlus,
    Briefcase,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SimilarTravelers() {
    const [isLiked, setIsLiked] = useState([false, false, false]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const router = useRouter();

    const getColor = (safetyPercentage: string) => {
        const percentage = parseInt(safetyPercentage.replace('% Safe', ''));
        if (percentage <= 50) {
            return 'bg-red-50 text-red-600 border-red-100';
        } else if (percentage <= 80) {
            return 'bg-yellow-50 text-yellow-700 border-yellow-100';
        } else {
            return 'bg-green-50 text-green-600 border-green-100';
        }
    };

    const getmatchColor = (match: string) => {
        const percentage = parseInt(match.replace('% Safe', ''));
        if (percentage <= 50) {
            return 'bg-red-500 text-red-600 border-red-100';
        } else if (percentage <= 70) {
            return 'bg-yellow-400 text-yellow-700 border-yellow-100';
        } else {
            return 'bg-green-500 text-green-600 border-green-100';
        }
    };

    const getspotsColor = (spotsLeft: string) => {
        const number = parseInt(spotsLeft.replace('% Safe', ''));
        if (number <= 5) {
            return 'bg-red-500 text-red-600 border-red-100';
        } else if (number <= 10) {
            return 'bg-yellow-400 text-yellow-700 border-yellow-100';
        } else {
            return 'bg-green-500 text-green-600 border-green-100';
        }
    };

    const handleLikeToggle = (index: number) => {
        const newLiked = [...isLiked];
        newLiked[index] = !newLiked[index];
        setIsLiked(newLiked);
    };

    const handleViewTrip = (tripId: string) => {
        router.push(`/trips/${tripId}`);
    };

    const handleJoinTrip = () => {
        alert('Join trip functionality would be implemented here');
    };

    const handlePrevCard = () => {
        setCurrentCardIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
    };

    const handleNextCard = () => {
        setCurrentCardIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
    };

    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvcGljYWwlMjBpc2xhbmQlMjBnZXRhd2F5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
            title: 'Tropical Island Getaway in Maldives',
            description: 'Join us for an unforgettable beach vacation! Relax by the turquoise waters, enjoy local seafood, and snorkel among vibrant coral reefs.',
            tags: ["Beach", "Luxury", "Relaxation"],
            location: 'Kolkata, West Bengal',
            destination: 'Maldives',
            dates: 'Feb 1–5, 2026',
            price: '₹45,000/ person',
            tripId: 'tropical-island-getaway-maldives',
            match: '50%',
            spotsLeft: '8 spots left',
            tripsCompleted: '25 Trips Completed',
            host: {
                initials: 'PS',
                name: 'Priya Sharma',
                age: 17,
                location: 'Mumbai, India',
                rating: 3.6,
                type: 'Travel Enthusiast',
                safety: '50% Safe'
            }
        },
        {
            image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW4lMjBhZHZlbnR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            title: 'Mountain Adventure in Himalayas',
            description: 'Experience the thrill of trekking through the majestic Himalayan peaks. Camp under the stars and witness breathtaking sunrises over snow-capped mountains.',
            tags: ['Adventure', 'Trekking', 'Nature'],
            location: 'Delhi, India',
            destination: 'Himalayas',
            dates: 'Mar 15–22, 2026',
            price: '₹35,000/ person',
            tripId: 'mountain-adventure-himalayas',
            match: '75%',
            spotsLeft: '15 spot left',
            tripsCompleted: '42 Trips Completed',
            host: {
                initials: 'RK',
                name: 'Rahul Kumar',
                age: 24,
                location: 'Bangalore, India',
                rating: 4.8,
                type: 'Adventure Guide',
                safety: '85% Safe'
            }
        },
        {
            image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFqYXN0aGFuJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            title: 'Cultural Heritage Tour of Rajasthan',
            description: 'Immerse yourself in the rich culture and history of Rajasthan. Visit magnificent palaces, vibrant markets, and experience traditional Rajasthani hospitality.',
            tags: ['Culture', 'Heritage', 'Photography'],
            location: 'Mumbai, Maharashtra',
            destination: 'Rajasthan',
            dates: 'Apr 5–12, 2026',
            price: '₹28,000/ person',
            tripId: 'cultural-heritage-rajasthan',
            match: '65%',
            spotsLeft: '2 spots left',
            tripsCompleted: '18 Trips Completed',
            host: {
                initials: 'AS',
                name: 'Anita Singh',
                age: 29,
                location: 'Jaipur, India',
                rating: 4.2,
                type: 'Cultural Explorer',
                safety: '80% Safe'
            }
        }
    ];

    return (
        <div className="w-full bg-gray-50 p-4 font-sans">
            <div className="w-full mx-auto">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Similar Travellers</h1>
                
                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden rounded-lg">
                        <div 
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
                        >
                            {cardsData.map((card, index) => (
                                <div key={card.tripId} className="w-full flex-shrink-0">
                                    <div className="bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col lg:flex-row">
                                        {/* Image Section */}
                                        <div className="relative w-full lg:w-[400px] h-64 lg:h-auto shrink-0">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <button 
                                                onClick={() => handleLikeToggle(index)}
                                                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 transition-colors cursor-pointer"
                                            >
                                                <Heart className={`w-5 h-5 ${isLiked[index] ? 'text-red-500 fill-red-500' : 'text-white fill-white'}`} />
                                            </button>
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex-1 p-6 flex flex-col justify-between">
                                            <div className="space-y-4">
                                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-2">
                                                    <div className="space-y-1">
                                                        <h2 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                                                            {card.title}
                                                        </h2>
                                                        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                                                            {card.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex items-center gap-2 shrink-0">
                                                        <span className={`border text-white text-xs font-bold px-3 py-1 ${getmatchColor(card.match)}`}>
                                                            {card.match} Match
                                                        </span>
                                                        <span className={`border text-white text-xs font-bold px-3 py-1 flex items-center gap-1 ${getspotsColor(card.spotsLeft)}`}>
                                                            <span className="w-2 h-2 bg-white animate-pulse"></span>
                                                            {card.spotsLeft}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {card.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="relative pl-5 ml-0.5 border-l-[2px] border-dotted border-gray-300 py-1">
                                                    <span className="absolute -left-[6px] top-[4px] w-2.5 h-2.5 border-2 border-gray-400 bg-white rounded-full"></span>
                                                    <span className="absolute -left-[6px] bottom-[4px] w-2.5 h-2.5 bg-gray-900 rounded-full"></span>
                                                    <p className="text-[13px] text-gray-600 leading-none mb-1">
                                                        {card.location}
                                                    </p>
                                                    <p className="text-[13px] font-semibold text-gray-900 leading-none">
                                                        {card.destination}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-y-3 gap-x-8 pt-2 text-sm text-gray-600">
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 text-gray-900 fill-gray-600" />
                                                        <span className="font-medium text-gray-600">{card.dates}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Wallet className="w-4 h-4 text-gray-900 fill-gray-600" />
                                                        <span className="font-medium text-gray-600">{card.price}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Flag className="w-4 h-4 text-gray-900 fill-gray-600" />
                                                        <span className="font-medium text-gray-600">{card.tripsCompleted}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr className="my-5 border-gray-900" />

                                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-12 w-12 bg-blue-500 flex items-center justify-center border-2 border-blue-100 text-white rounded-full font-bold text-lg shrink-0">
                                                        {card.host.initials}
                                                    </div>

                                                    <div className="space-y-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-bold text-gray-900">{card.host.name}, {card.host.age}</span>
                                                            <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-500 text-white" />
                                                        </div>
                                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                                            <span>{card.host.location}</span>
                                                            <span className="w-1 h-1 bg-gray-300"></span>
                                                            <div className="flex items-center text-yellow-500 font-medium">
                                                                <Star className="w-3 h-3 fill-current mr-0.5" />
                                                                {card.host.rating}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex items-center gap-1 text-[10px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5">
                                                                <User className="w-3 h-3" />
                                                                {card.host.type}
                                                            </div>
                                                            <div className={`flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 border ${getColor(card.host.safety)}`}>
                                                                <ShieldCheck className="w-3 h-3" />
                                                                {card.host.safety}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 mt-2 lg:mt-0">
                                                    <button 
                                                        onClick={() => handleViewTrip(card.tripId)}
                                                        className="bg-slate-800 hover:bg-slate-700 text-white h-8 px-3 text-xs font-medium flex items-center transition-colors cursor-pointer"
                                                    >
                                                        <Briefcase className="w-3 h-3 mr-1" />
                                                        View Trip
                                                    </button>
                                                    <button 
                                                        onClick={handleJoinTrip}
                                                        className="bg-slate-800 hover:bg-slate-700 text-white h-8 px-3 text-xs font-medium flex items-center transition-colors cursor-pointer"
                                                    >
                                                        <UserPlus className="w-3 h-3 mr-1" />
                                                        Join Trip
                                                    </button>
                                                    <Link href="/profile" className="bg-slate-800 hover:bg-slate-700 text-white h-8 px-3 text-xs font-medium flex items-center transition-colors cursor-pointer">
                                                        <Eye className="w-3 h-3 mr-1" />
                                                        View Profile
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrevCard}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                        aria-label="Previous card"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNextCard}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 z-10"
                        aria-label="Next card"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-6">
                        {cardsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentCardIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                    index === currentCardIndex 
                                        ? 'bg-gray-800 w-8' 
                                        : 'bg-gray-400 hover:bg-gray-600'
                                }`}
                                aria-label={`Go to card ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}