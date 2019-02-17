class Person{
	constructor(fullName,favColor){
		this.name=fullName;
	    this.favoriteColor=favColor;
	}
	
	greet(){
		console.log("Hi, name is "+this.name+" and color is "+this.favoriteColor + ".");
	}
}

export default Person;