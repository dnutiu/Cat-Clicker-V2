var initialCats = [	
		{
			name: "Luca",
			clickCount: 0,
			imgSrc: "img/1.jpg",
			nicknames: ["Katherina", "Joscat", "FastCat", "T-Cat", "Mr Cat"]
		},
		{
			name: "Tutu",
			clickCount: 0,
			imgSrc: "img/2.jpg",
			nicknames: ["Katherina", "Joscat", "FastCat", "T-Cat", "Mr Cat"]
		},
		{
			name: "Tommy",
			clickCount: 0,
			imgSrc: "img/3.jpg",
			nicknames: ["Katherina", "Joscat", "FastCat", "T-Cat", "Mr Cat"]
		},
		{
			name: "Mita",
			clickCount: 0,
			imgSrc: "img/4.jpg",
			nicknames: ["Katherina", "Joscat", "FastCat", "T-Cat", "Mr Cat"]
		},
		{
			name: "France",
			clickCount: 0,
			imgSrc: "img/5.jpg",
			nicknames: ["Katherina", "Joscat", "FastCat", "T-Cat", "Mr Cat"]
		}];
var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.rank = ko.computed(function() {
		if (this.clickCount() < 30) {
			return "Beginer";
		} else if (this.clickCount() < 60) {
			return "Explorer";
		} else if (this.clickCount() < 100) {
			return "Expert";
		}
	}, this);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);
}
var ViewModel = function() {
	var self = this;
	this.catList = ko.observableArray([]);
	initialCats.forEach(function(catItem) {
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(self.catList()[0]);

	this.changeCurrentCat = function(e) {
		self.currentCat(e);
	};
	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());