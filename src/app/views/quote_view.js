import Backbone from 'backbone';

// these views act like classes, so they're capitalized.
var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({quote: this.quote});
    this.$el.html(html);

    // Enable chained calls
    return this;
  }
});

export default QuoteView;
