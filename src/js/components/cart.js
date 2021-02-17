export class Cart{
   constructor(){
       this.items = [
           {'1' : 3},
           {'2': 1}
       ];
    }
    countItem(){
        return this.items.length;
    }

    getItemList(){
        return this.items;
    }

    addItem(item){
        this.items.push(item);
    }

    removeItem(index){
        this.items.splice(index,1);
    }

}