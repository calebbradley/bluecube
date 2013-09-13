/*global describe, it */
'use strict';
(function () {
    describe('To Do Form', function () {
    	this.timeout(3000);

        describe('The save button', function () {
            it('should save new ToDos and those
        	ToDos should be returned from Parse', function (done) {
        		var result;

        		// fill out the form
			    var form = $('.form')
			    // make a random title with which we can query
			    var randomTitle = 'A Test Post #'+ Math.floor(Math.random()*10000000)
		        form.find('#title').val(randomTitle)
	    	    form.find('#content').val('This is a really great post! I loved writing it!')
 
			    // submit it
			    $('.save').click()


			    setTimeout((function(3000){
 
        		var query = new Parse.Query(NoteClass);
                query.equalTo("title", randomTitle);
        		query.find({
         	    success: function(results) {
            	result = results[0]
            	console.log(results)
            	expect(result.get('title')).to.equal(randomTitle)
            	done()
          },
          error: function(error) {
            done(error.description)
          }
        });
 
      }), 3000)
    }); // end it()
 
  })
})();


