$( document ).ready(function() {


Survey.Survey.cssType = "bootstrap";
var surveyJSON = {"cookieName":"20170601","pages":[{"name":"page1","elements":[{"type":"text","name":"name","title":"Please enter your name:","isRequired":true,"placeHolder":"Jon Snow"},{"type":"text","name":"birthdate","title":"Your birthdate:","isRequired":true,"inputType":"date"},{"type":"text","name":"color","title":"Your favorite color:","inputType":"color"},{"type":"text","name":"email","title":"Your e-mail:","isRequired":true,"validators":[{"type":"email"}],"inputType":"email","placeHolder":"jon.snow@nightwatch.org"}]},{"name":"page2","elements":[{"type":"checkbox","name":"question1","choices":["item1","item2","item3"]},{"type":"rating","name":"question2"},{"type":"rating","name":"question3"}]},{"name":"page3","elements":[{"type":"matrixdropdown","name":"question4","columns":[{"name":"Column 1"},{"name":"Column 2"},{"name":"Column 3"}],"choices":[1,2,3,4,5],"rows":["Row 1","Row 2"]},{"type":"matrixdynamic","name":"question5","columns":[{"name":"Column 1"},{"name":"Column 2"},{"name":"Column 3"}],"choices":[1,2,3,4,5]}]}]}
surveyJSON.pages[0].name


  var survey = new Survey.Model(surveyJSON);
  $("#surveyContainer").Survey({
      model:survey,
      onComplete:sendDataToServer
    });

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}
});