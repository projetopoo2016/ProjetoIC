$( document ).ready(function() {

    var editorOptions = {showEmbededSurveyTab: true}; //see examples below
    var survey = new SurveyEditor.SurveyEditor("surveyEditorContainer", editorOptions);
    //set function on save callback
    editor.saveSurveyFunc = saveMySurvey;

    function saveMySurvey(){
        var yourNewSurveyJSON = editor.text;
        //send updated json in your storage  
      }
      editor.text = yourSurveyJSON;

      var editorOptions = {
        // show the embeded survey tab. It is hidden by default
        showEmbededSurveyTab : false,
        // hide the test survey tab. It is shown by default
        showTestSurveyTab : false,
        // hide the JSON text editor tab. It is shown by default
        showJSONEditorTab : false,
        // show the "Options" button menu. It is hidden by default 
        showOptions: true                          
       };
       // pass the editorOptions into the constructor. It is an optional parameter.
       var survey = new SurveyEditor.SurveyEditor("surveyEditorContainer", editorOptions);
});