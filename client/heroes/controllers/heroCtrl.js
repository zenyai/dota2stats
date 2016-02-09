angular.module('dota2stats').controller('heroCtrl', ['$scope', '$stateParams', '$reactive', function($scope, $stateParams, $reactive) {
  $reactive(this).attach($scope);

  this.hero_id = parseInt($stateParams.heroID);

  this.helpers({
     hero: () => {
      return Heroes.findOne({hero_id: this.getReactively('hero_id')});
    }
  });

  this.autorun(() => {
    if(!this.hero)
      return;

    this.range_type = "Melee";
    if (this.hero.herostat.Range > 128) {
      this.range_type = "Range";
    }

    this.primary_stat = "Strength";
    switch(this.hero.herostat.PrimaryStat){
      case 1:
        this.primary_stat = "Agility";
        break;
      case 2:
        this.primary_stat = "Intelligence";
        break;
    }
  });
}]);
