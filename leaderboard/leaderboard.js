PlayerList = new Mongo.Collection('players');

if(Meteor.isClient){
	Template.leaderboard.helpers({
		'player': function(){
			return PlayerList.find()},
		'playerCount': function(){
			return PlayerList.find().count()},
		'selectedClass': function(){
			return "selected"}
	});//leaderboard helpers

	Template.leaderboard.events({
		'click .player': function(){
			var playerId = this._id; 
			Session.set('selectedPlayer', playerId);}

	});//leaderboard events

}//isClient

if(Meteor.isServer){

}//isServer
