function books(title,pages,author,read){
    this.title=title,
    this.pages=pages,
    this.author=author,
    this.read=read
}
books.prototype.info=function(){
    if(this.read==='yes')
    console.log(this.title+' by '+this.author+', '+this.pages+" pages, already read ");
    else{

        console.log(this.title+' by '+this.author+', '+this.pages+" pages, not read  yet");
    }
}
 const samir=new books("jgfjg",45,"tfyrdhrt","hjtfyt");
 samir.info();




 