Parse.initialize("MREHdC9OjtXDq5Y9hllrZ16vk3ccFF6ZLBTRxrSK", "r0ycB4sOzGJbZO3cmQPldt0G0KusZ8RmAI9pRLJe");



var NoteClass = Parse.Object.extend("Note");
 
var NoteCollectionClass = Parse.Collection.extend({
  model: NoteClass
});
 
// create an instance of the collection
var notes = new NoteCollectionClass()
 
notes.fetch({
  success: function(collection) {
    collection.each(function(note){
      addToSideBar(note)
    })
  }
})
 
$('.save').click(function(){
  var note = new NoteClass();
  note.set('title', $('#title').val());
  note.set('content', $('#content').val());
 
  note.save(null, {
    success: function(result){
      addToSideBar(result)
    },
    error: function(result, error){
      alert("TRY AGAIN, "+ error.description)
    }
  })
})
 
// functions 
 
function addToSideBar(note) {
  var li = $('<li>'+note.get('title')+'</li>')
  $('.notes').append(li)
  li.click(function(){
    renderNote(note)
  })
}
 
function renderNote(note) {
  $('#title').val( note.get('title') )
  $('#content').val( note.get('content') )
}



var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  }
});

// Setting the value of attributes via instantiation
var myTodo = new Todo({
  title: "Set through instantiation."
});
console.log('Todo title: ' + myTodo.get('title')); // Todo title: Set through instantiation.
console.log('Completed: ' + myTodo.get('completed')); // Completed: false

// Set single attribute value at a time through Model.set():
myTodo.set("title", "Title attribute set through Model.set().");
console.log('Todo title: ' + myTodo.get('title')); // Todo title: Title attribute set through Model.set().
console.log('Completed: ' + myTodo.get('completed')); // Completed: false

// Set map of attributes through Model.set():
myTodo.set({
  title: "Both attributes set through Model.set().",
  completed: true
});
console.log('Todo title: ' + myTodo.get('title')); // Todo title: Both attributes set through Model.set().
console.log('Completed: ' + myTodo.get('completed')); // Completed: true





var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  },
  initialize: function(){
    console.log('This model has been initialized.');
    this.on('change', function(){
        console.log('- Values for this model have changed.');
    });
  }
});

var myTodo = new Todo();

myTodo.set('title', 'The listener is triggered whenever an attribute value changes.');
console.log('Title has changed: ' + myTodo.get('title'));


myTodo.set('completed', true);
console.log('Completed has changed: ' + myTodo.get('completed'));

myTodo.set({
  title: 'Changing more than one attribute at the same time only triggers the listener once.',
  completed: true
});

// Above logs:
// This model has been initialized.
// - Values for this model have changed.
// Title has changed: The listener is triggered whenever an attribute value changes.
// - Values for this model have changed.
// Completed has changed: true
// - Values for this model have changed.


var NoteCollectionClass = document.getElementById("notes");

 

// Start from the highest index and work towards zero

for (var i = selectList.length - 1; i >= 0; i--) {

    // Is this option selected? Yes, call remove and give the current index "i"

    if (remove.options[i].selected) {

      selectList.remove(i);

    }

}




