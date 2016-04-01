var ODataCollection = Backgrid.ODataCollection = Backbone.Collection.extend({
  setTake: function(count) {
    this.set('$top', count);
  },

  setSkip: function(count) {
    this.set('$skip', count);
  },

  setOrderBy: function(key, isAsc) {
    var orderby = key + ' ' + (isAsc ? 'asc' : 'desc');
    this.set('$orderby', orderby);
  },

	parse: function(data) {
    return data.value;
  }
});
