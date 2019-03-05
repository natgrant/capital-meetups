import axios from "axios";

function editEventAction(event, id) {
  return {
    function(dispatch) {
      axios.post(`/api/v1/meetups/edit/:id`).then(response => {
        response => {
          console.log("sent", response.data);
          if (!response.status == 200) {
            dispatch(errorMessage(response.status));
          } else {
            dispatch(saveSubscriptions(response.data));
          }
        };
      });
    }
  };
}
