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
  },

  events: {
    'click .btn-sell': 'sellQuote',
    'click .btn-buy': 'buyQuote'
  },

  sellQuote: function(event) {
    console.log('you sold!');
    this.quote.price -= 1;
    this.render();
  },

  buyQuote: function(event) {
    console.log('you bought!');
    this.quote.price += 1;
    this.render();
  }
});

export default QuoteView;
