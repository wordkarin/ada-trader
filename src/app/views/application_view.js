import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import QuoteView from 'app/views/quote_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // keeping track of our existing data.
    this.quoteData = options.quoteData;

    // Compile a template to be shared between the individual tasks
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());

    // Keep track of the <div> element in our DOM so that we can use it to append things to in our render?
    // this.$ is backbone shorthand for searching within the element that the class is responsible for. (It'll work without the "this." but will search the entire DOM for the element(s).)
    this.quoteElement = this.$('.quotes');

    // Create a TaskView for each task
    this.cardList = [];
    this.quoteData.forEach(function(quote) {
      var card = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });
      this.cardList.push(card);
    }, this); // bind `this` so it's available inside forEach
  },

  render: function(){
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.quoteElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the quote to render
      card.render();

      // Add that HTML to our quote list
      this.quoteElement.append(card.$el);
    }, this);

    // Enable chained calls
    return this;
  }
});

export default ApplicationView;
