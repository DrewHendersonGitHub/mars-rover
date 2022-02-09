import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MarsRover from './marsrover.js';

function clearFields(){
  $("#game-search").val("");
}

function getElements(response){
  if (response.results) {
    $("#output").html();
  }else{
    $("#errors").text(`There was an error: ${response.message}`);
  }
}

$(document).ready(function() {
  $('#mars-button').click(function() {
    let rover = $('#rover-select').val();
    let date = $('input#date-input').val();
    console.log(date);
    clearFields();
    MarsRover.getMars(rover, date)
      .then(function(response) {
        getElements(response);
      });
  });
});