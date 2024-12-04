export type Journey = {
    year: string;
    events: JourneyItem[];
};

export type JourneyItem = {
    title: string;
    description?: string;
    imageUrl?: string;
}