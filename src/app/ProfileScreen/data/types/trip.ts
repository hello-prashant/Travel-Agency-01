export interface Trip {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
  status: "Confirmed" | "Pending" | "Planned" | "Completed";
  participants: string[];
  country?: string;
  participantCount?: string;
  rating?: number;
  experiences?: string;
  reviews?: string;
}

export interface FormData {
  title: string;
  destination: string;
  country: string;
  startDate: string;
  endDate: string;
  budget: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  description: string;
  participants: string;
  accommodation: string;
  transportation: string;
}

export interface AddTripFormProps {
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}