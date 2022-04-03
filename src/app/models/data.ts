import { detailedItem } from "./item";



export class dataRelated{

    private static datalist: Array<detailedItem> = [{
        itemID: 'hagsgs-dsjsdhgdg-shshjsj-1',
        title: 'Sorgum',
        image: 'assets/media/image/products/product1.png',
        price: '60',
        previous: '50',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda",
        features: [{feature: 'It is a long established fact that a reader will be distracted.'},
                    {feature: 'Contrary to popular belief, Lorem Ipsum is not text.'}, 
                    {feature: 'There are many variations of passages of Lorem.'}],
        bids: [],
        timeleft: 1333300,
        state: true
    }, {
        itemID: 'hagsgs-dsjsdhgdg-shshjsj-2',
        title: 'rice',
        image: 'assets/media/image/products/product2.png',
        price: '60',
        previous: '50',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda",
        features: [{feature: 'It is a long established fact that a reader will be distracted.'},
                    {feature: 'Contrary to popular belief, Lorem Ipsum is not text.'}, 
                    {feature: 'There are many variations of passages of Lorem.'}],
        bids: [],
        timeleft: 1333300,
        state: true
    }, {
        itemID: 'hagsgs-dsjsdhgdg-shshjsj-3',
        title: 'rice',
        image: 'assets/media/image/products/product3.png',
        price: '60',
        previous: '50',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda",
        features: [{feature: 'It is a long established fact that a reader will be distracted.'},
                    {feature: 'Contrary to popular belief, Lorem Ipsum is not text.'}, 
                    {feature: 'There are many variations of passages of Lorem.'}],
        bids: [],
        timeleft: 1333300,
        state: true
    }, {
        itemID: 'hagsgs-dsjsdhgdg-shshjsj-4',
        title: 'rice',
        image: 'assets/media/image/products/product4.png',
        price: '60',
        previous: '50',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda",
        features: [{feature: 'It is a long established fact that a reader will be distracted.'},
                    {feature: 'Contrary to popular belief, Lorem Ipsum is not text.'}, 
                    {feature: 'There are many variations of passages of Lorem.'}],
        bids: [],
        timeleft: 1333300,
        state: true
    }, {
        itemID: 'hagsgs-dsjsdhgdg-shshjsj-5',
        title: 'rice',
        image: 'assets/media/image/products/product5.png',
        price: '60',
        previous: '50',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda",
        features: [{feature: 'It is a long established fact that a reader will be distracted.'},
                    {feature: 'Contrary to popular belief, Lorem Ipsum is not text.'}, 
                    {feature: 'There are many variations of passages of Lorem.'}],
        bids: [],
        timeleft: 1333300,
        state: true
    }
];
  

    public static getdata(){
        return this.datalist;
    }
    


    public static getitem(ItemID): detailedItem {
        return dataRelated.datalist.find(e => e.itemID === ItemID);
    }


    public static getrandom(): detailedItem {
      
        return dataRelated.datalist.find(e => e.itemID === 'hagsgs-dsjsdhgdg-shshjsj-3');
    }

}

