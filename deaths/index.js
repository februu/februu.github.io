const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
if (id != "") {
  $.get(
    "https://febru-and-dxviii-deathbot-default-rtdb.firebaseio.com/" +
      id +
      ".json",
    function (data) {
      if (data != null) {
        console.log(data);
        for (let death in data["reasons"]) {
          var dt = new Date(death * 1000);
          let date = dt.toLocaleString();
          $("#deathsTable").append(
            "<tr><td>" +
              date +
              "</td><td>" +
              data["reasons"][death] +
              "</td></tr>"
          );
        }
      } else {
        $("#deathsTable").append(
          '<tr><td>Error!</td><td>Load page using correct id! <span style="color:#a84357">https://febru.me/deaths/?id=&lt;your_discord_id&gt;<span></td></tr>'
        );
      }
    }
  );
}
