export interface detailedItem {
    itemID: string;
    title: string;
    image: string;
    price: string;
    previous: string;
    bids: Array<bidders>;
    timeleft: number;
    state: boolean;
    features ?: Array<{feature: string}>;
    description ?: string;
}





export interface bidders {
    bidderId: string;
    bidtime: Date;
    amount: number;

}



