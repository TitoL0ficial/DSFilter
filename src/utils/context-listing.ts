import { createContext } from "react";

export type ContextListingCardType = {
    contextListing: number;
    setContextListing: (contextListing: number) => void;
}

export const ContextListingCard = createContext<ContextListingCardType>({
    contextListing: 0,
    setContextListing: () => {}
})